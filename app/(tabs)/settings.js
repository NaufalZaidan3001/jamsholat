import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PRAYER_METHODS } from '../../constants/PrayerMethods';
import { loadSettings, saveSettings } from '../../lib/storage';

export default function SettingsScreen() {
    const [method, setMethod] = useState('Kemenag');
    const [asr, setAsr] = useState('standard');

    useEffect(() => {
        const getSettings = async () => {
            const settings = await loadSettings();
            setMethod(settings.calculationMethod);
            setAsr(settings.asr);
        };
        getSettings();
    }, []);

    const handleMethodChange = async (newMethod) => {
        setMethod(newMethod);
        const currentSettings = await loadSettings();
        await saveSettings({ ...currentSettings, calculationMethod: newMethod });
    };

    const handleAsrChange = async (newAsr) => {
        setAsr(newAsr);
        const currentSettings = await loadSettings();
        await saveSettings({ ...currentSettings, asr: newAsr });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Pengaturan</Text>

                <View style={styles.settingRow}>
                    <Text style={styles.label}>Metode Perhitungan</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={method}
                            onValueChange={handleMethodChange}
                            style={styles.picker}
                            dropdownIconColor="#FFF"
                        >
                            {PRAYER_METHODS.map(m => (
                                <Picker.Item key={m.id} label={m.name} value={m.id} color="#000" />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={styles.settingRow}>
                    <Text style={styles.label}>Mazhab Asar</Text>
                     <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={asr}
                            onValueChange={handleAsrChange}
                            style={styles.picker}
                            dropdownIconColor="#FFF"
                        >
                            <Picker.Item label="Standar (Shafi'i, Maliki, Hanbali)" value="standard" color="#000" />
                            <Picker.Item label="Hanafi" value="hanafi" color="#000" />
                        </Picker>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#111827',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        color: '#FFF',
        marginBottom: 30,
    },
    settingRow: {
        marginBottom: 25,
    },
    label: {
        fontFamily: 'Inter-Regular',
        fontSize: 18,
        color: '#D1D5DB',
        marginBottom: 10,
    },
    pickerContainer: {
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    picker: {
        color: '#000',
    }
});