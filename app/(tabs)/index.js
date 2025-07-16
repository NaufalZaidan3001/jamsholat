import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Clock from '../../components/Clock';
import Countdown from '../../components/Countdown';
import PrayerTimesList from '../../components/PrayerTimesList';
import { usePrayerData } from '../../hooks/usePrayerData';

export default function HomeScreen() {
  const { 
    prayerTimes, 
    location, 
    error, 
    isLoading, 
    gregorianDate, 
    hijriDate 
  } = usePrayerData();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>Mencari lokasi dan menghitung...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        
        <Clock />
        
        {prayerTimes && <Countdown prayerTimes={prayerTimes} />}

        <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{gregorianDate}</Text>
            <Text style={styles.hijriDateText}>{hijriDate}</Text>
        </View>

        {location && (
            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>
                    {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                    {location.isDefault && " (Default)"}
                </Text>
            </View>
        )}

        {prayerTimes ? (
          <PrayerTimesList prayerTimes={prayerTimes} />
        ) : (
          <Text style={styles.errorText}>Waktu sholat tidak dapat dihitung.</Text>
        )}
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    dateContainer: {
        marginVertical: 15,
        alignItems: 'center',
    },
    dateText: {
        fontFamily: 'RobotoMono-Regular',
        fontSize: 20,
        color: '#FFF',
    },
    hijriDateText: {
        fontFamily: 'RobotoMono-Light',
        fontSize: 18,
        color: '#BDBDBD',
    },
    locationContainer: {
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        marginBottom: 20,
    },
    locationText: {
        fontFamily: 'RobotoMono-Regular',
        color: '#CCC',
    },
    errorText: {
        color: '#FF6B6B',
        textAlign: 'center',
        padding: 10,
    },
    loadingText: {
        marginTop: 10,
        color: '#FFF',
        fontFamily: 'RobotoMono-Regular',
    }
});