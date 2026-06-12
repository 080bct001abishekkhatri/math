import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../theme/colors';

interface DPadProps {
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
  onExe: () => void;   // center = EXE / =
}

const DPad: React.FC<DPadProps> = ({ onUp, onDown, onLeft, onRight, onExe }) => {
  return (
    <View style={styles.container}>
      {/* Up */}
      <View style={styles.row}>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.arrowBtn} onPress={onUp} activeOpacity={0.7}>
          <Text style={styles.arrow}>▲</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </View>

      {/* Left / EXE / Right */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.arrowBtn} onPress={onLeft} activeOpacity={0.7}>
          <Text style={styles.arrow}>◀</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exeBtn} onPress={onExe} activeOpacity={0.7}>
          <Text style={styles.exeText}>EXE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowBtn} onPress={onRight} activeOpacity={0.7}>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Down */}
      <View style={styles.row}>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.arrowBtn} onPress={onDown} activeOpacity={0.7}>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    width: 36,
  },
  arrowBtn: {
    width: 32,
    height: 28,
    backgroundColor: Colors.keyDefault,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.4)',
  },
  exeBtn: {
    width: 44,
    height: 44,
    backgroundColor: Colors.keyEquals,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(0,0,0,0.5)',
  },
  arrow: {
    color: '#ffffff',
    fontSize: 11,
  },
  exeText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default DPad;