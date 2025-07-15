import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGS_KEY = 'prayer_app_settings';

const DEFAULT_SETTINGS = {
    calculationMethod: 'Kemenag',
    asr: 'standard',
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
        return jsonValue != null ? JSON.parse(jsonValue) : DEFAULT_SETTINGS;
    } catch (e) {
        console.error("Failed to load settings.", e);
        return DEFAULT_SETTINGS;
    }
};