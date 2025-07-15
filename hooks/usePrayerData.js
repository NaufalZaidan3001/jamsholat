import { useIsFocused } from '@react-navigation/native';
import { CalculationMethod, CalculationParameters, Coordinates, Madhab, PrayerTimes } from 'adhan';
import { useEffect, useState } from 'react';
import { loadSettings } from '../lib/storage';
import { useLocation } from './useLocation';

export function usePrayerData() {
    const { location, error: locationError, isLoading: isLocationLoading } = useLocation();
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [settings, setSettings] = useState(null);
    const isFocused = useIsFocused(); // Re-fetch settings when screen is focused

    useEffect(() => {
        if (isFocused) {
            const getSettings = async () => {
                const loadedSettings = await loadSettings();
                setSettings(loadedSettings);
            };
            getSettings();
        }
    }, [isFocused]);

    useEffect(() => {
        if (location && settings && settings.calculationMethod) {
            const coordinates = new Coordinates(location.latitude, location.longitude);
            const date = new Date();
            
            let params;

            // The 'Kemenag' method is not a standard part of all adhan.js versions.
            // We define it manually for robustness.
            if (settings.calculationMethod === 'Kemenag') {
                params = new CalculationParameters();
                params.fajrAngle = 20;
                params.ishaAngle = 18;
                params.method = "Kemenag"; // Assign a custom name
            } else {
                // Use the switch for other standard methods
                switch (settings.calculationMethod) {
                    case 'MuslimWorldLeague':
                        params = CalculationMethod.MuslimWorldLeague();
                        break;
                    case 'Egyptian':
                        params = CalculationMethod.Egyptian();
                        break;
                    case 'MoonsightingCommittee':
                        params = CalculationMethod.MoonsightingCommittee();
                        break;
                    case 'NorthAmerica':
                        params = CalculationMethod.NorthAmerica();
                        break;
                    case 'UmmAlQura':
                        params = CalculationMethod.UmmAlQura();
                        break;
                    case 'Dubai':
                        params = CalculationMethod.Dubai();
                        break;
                    case 'Kuwait':
                        params = CalculationMethod.Kuwait();
                        break;
                    case 'Qatar':
                        params = CalculationMethod.Qatar();
                        break;
                    case 'Singapore':
                        params = CalculationMethod.Singapore();
                        break;
                    default:
                        // Fallback to a default method if something goes wrong
                        params = CalculationMethod.MuslimWorldLeague();
                        break;
                }
            }
            
            params.madhab = settings.asr === 'hanafi' ? Madhab.Hanafi : Madhab.Shafi;
            
            const pt = new PrayerTimes(coordinates, date, params);
            setPrayerTimes(pt);
        }
    }, [location, settings]);

    return {
        prayerTimes,
        location,
        error: locationError,
        isLoading: isLocationLoading || !settings,
    };
}