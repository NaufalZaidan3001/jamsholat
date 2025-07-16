import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGS_KEY = 'prayer_app_settings';

const DEFAULT_SETTINGS = {
    calculationMethod: 'Kemenag',
    asr: 'standard',
    hijriAdjustment: 0, // Default adjustment is 0 days
};

export const saveSettings = async (settings) => {
    try {
        const jsonValue = JSON.stringify(settings);
        await AsyncStorage.setItem(SETTINGS_KEY, jsonValue);
    } catch (e) {
        console.error("Failed to save settings.", e);
    }
};

export const loadSettings = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(SETTINGS_KEY);
        // Ensure new settings have a default value if they don't exist in storage
        const loaded = jsonValue != null ? JSON.parse(jsonValue) : {};
        return { ...DEFAULT_SETTINGS, ...loaded };
    } catch (e) {
        console.error("Failed to load settings.", e);
        return DEFAULT_SETTINGS;
    }
};