import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView,
  TouchableOpacity, StatusBar,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/(tabs)/_layout';
import Colors from '../theme/colors';

type ExitNav = StackNavigationProp<RootStackParamList, 'Exit'>;
type ExitRoute = RouteProp<RootStackParamList, 'Exit'>;

const ExitScreen = () => {
  const navigation = useNavigation<ExitNav>();
  const route = useRoute<ExitRoute>();
  const { studentName, rollNumber } = route.params;

  const handleGoBack = () => {
    navigation.navigate('Calculator', { studentName, rollNumber });
  };

  const handleExit = () => {
    // Navigate back to splash to restart session
    navigation.navigate('Splash');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <View style={styles.container}>
        {/* Brand */}
        <View style={styles.brandArea}>
          <View style={styles.brandBar}>
            <Text style={styles.brandText}>CASIO</Text>
          </View>
          <Text style={styles.modelText}>fx-991ES PLUS</Text>
        </View>

        {/* Farewell card */}
        <View style={styles.card}>
          <Text style={styles.emoji}>👋</Text>
          <Text style={styles.title}>Session Summary</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Student</Text>
            <Text style={styles.infoValue}>{studentName}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Roll No.</Text>
            <Text style={styles.infoValue}>{rollNumber}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Device</Text>
            <Text style={styles.infoValue}>fx-991ES PLUS</Text>
          </View>

          <Text style={styles.message}>
            Thank you for using Casio fx-991ES PLUS Scientific Calculator.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.backBtn} onPress={handleGoBack} activeOpacity={0.8}>
            <Text style={styles.backBtnText}>← Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.exitBtn} onPress={handleExit} activeOpacity={0.8}>
            <Text style={styles.exitBtnText}>New Session</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Tribhuvan University • Institute of Engineering
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  brandArea: { alignItems: 'center', marginBottom: 24 },
  brandBar: {
    backgroundColor: Colors.brandBlue,
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 2,
    marginBottom: 4,
  },
  brandText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 6,
  },
  modelText: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2,
  },
  card: {
    backgroundColor: Colors.calcBody,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  emoji: { fontSize: 48, marginBottom: 8 },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
  },
  infoLabel: { color: '#888888', fontSize: 13 },
  infoValue: { color: '#ffffff', fontSize: 13, fontWeight: '600' },
  divider: { width: '100%', height: 1, backgroundColor: Colors.border },
  message: {
    color: '#888888',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 18,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
    width: '100%',
    maxWidth: 380,
  },
  backBtn: {
    flex: 1,
    backgroundColor: Colors.keyDefault,
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  backBtnText: { color: '#ffffff', fontSize: 14, fontWeight: '600' },
  exitBtn: {
    flex: 1,
    backgroundColor: Colors.brandBlue,
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  exitBtnText: { color: '#ffffff', fontSize: 14, fontWeight: '700' },
  footer: {
    color: '#444466',
    fontSize: 11,
    marginTop: 24,
    textAlign: 'center',
  },
});

export default ExitScreen;