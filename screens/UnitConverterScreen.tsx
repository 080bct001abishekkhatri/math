import React, { useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView,
  FlatList, TouchableOpacity, TextInput,
  StatusBar, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../theme/colors';
import { unitCategories, convertUnit, UnitCategory } from '../utils/unitData';

const UnitConverterScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<UnitCategory>(unitCategories[0]);
  const [fromUnit, setFromUnit] = useState(unitCategories[0].units[0].symbol);
  const [toUnit, setToUnit] = useState(unitCategories[0].units[1].symbol);
  const [inputValue, setInputValue] = useState('1');
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const getResult = () => {
    const val = parseFloat(inputValue);
    if (isNaN(val)) return '—';
    const converted = convertUnit(val, fromUnit, toUnit, selectedCategory.name);
    if (isNaN(converted)) return 'ERROR';
    if (Math.abs(converted) >= 1e10 || (Math.abs(converted) < 1e-6 && converted !== 0)) {
      return converted.toExponential(6);
    }
    return parseFloat(converted.toPrecision(10)).toString();
  };

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const selectCategory = (cat: UnitCategory) => {
    setSelectedCategory(cat);
    setFromUnit(cat.units[0].symbol);
    setToUnit(cat.units[1]?.symbol ?? cat.units[0].symbol);
    setInputValue('1');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Unit Converter</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="always">

        {/* Category selector */}
        <Text style={styles.sectionLabel}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
          <View style={styles.catRow}>
            {unitCategories.map(cat => (
              <TouchableOpacity
                key={cat.name}
                style={[styles.catChip, selectedCategory.name === cat.name && styles.catChipActive]}
                onPress={() => selectCategory(cat)}
              >
                <Text style={[styles.catChipText, selectedCategory.name === cat.name && styles.catChipTextActive]}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Converter card */}
        <View style={styles.converterCard}>
          {/* FROM */}
          <View style={styles.unitRow}>
            <Text style={styles.unitLabel}>From</Text>
            <TouchableOpacity
              style={styles.unitPicker}
              onPress={() => { setShowFromPicker(!showFromPicker); setShowToPicker(false); }}
            >
              <Text style={styles.unitPickerText}>
                {selectedCategory.units.find(u => u.symbol === fromUnit)?.name ?? fromUnit}
              </Text>
              <Text style={styles.unitSymbol}> ({fromUnit})</Text>
              <Text style={styles.dropIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          {showFromPicker && (
            <View style={styles.dropdown}>
              {selectedCategory.units.map(u => (
                <TouchableOpacity
                  key={u.symbol}
                  style={[styles.dropItem, fromUnit === u.symbol && styles.dropItemActive]}
                  onPress={() => { setFromUnit(u.symbol); setShowFromPicker(false); }}
                >
                  <Text style={styles.dropItemText}>{u.name}</Text>
                  <Text style={styles.dropItemSymbol}>{u.symbol}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Input */}
          <TextInput
            style={styles.valueInput}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="decimal-pad"
            placeholder="Enter value"
            placeholderTextColor="#888"
          />

          {/* Swap button */}
          <TouchableOpacity style={styles.swapBtn} onPress={swapUnits}>
            <Text style={styles.swapText}>⇅ Swap</Text>
          </TouchableOpacity>

          {/* TO */}
          <View style={styles.unitRow}>
            <Text style={styles.unitLabel}>To</Text>
            <TouchableOpacity
              style={styles.unitPicker}
              onPress={() => { setShowToPicker(!showToPicker); setShowFromPicker(false); }}
            >
              <Text style={styles.unitPickerText}>
                {selectedCategory.units.find(u => u.symbol === toUnit)?.name ?? toUnit}
              </Text>
              <Text style={styles.unitSymbol}> ({toUnit})</Text>
              <Text style={styles.dropIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          {showToPicker && (
            <View style={styles.dropdown}>
              {selectedCategory.units.map(u => (
                <TouchableOpacity
                  key={u.symbol}
                  style={[styles.dropItem, toUnit === u.symbol && styles.dropItemActive]}
                  onPress={() => { setToUnit(u.symbol); setShowToPicker(false); }}
                >
                  <Text style={styles.dropItemText}>{u.name}</Text>
                  <Text style={styles.dropItemSymbol}>{u.symbol}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Result */}
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Result</Text>
            <Text style={styles.resultValue}>{getResult()}</Text>
            <Text style={styles.resultUnit}>{toUnit}</Text>
          </View>

          {/* Formula display */}
          <Text style={styles.formulaDisplay}>
            {inputValue || '0'} {fromUnit} = {getResult()} {toUnit}
          </Text>
        </View>

        {/* All units reference table */}
        <Text style={styles.sectionLabel}>All {selectedCategory.name} Units</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>Unit</Text>
            <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1 }]}>Symbol</Text>
            <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2, textAlign: 'right' }]}>= 1 {selectedCategory.units[0].symbol}</Text>
          </View>
          {selectedCategory.units.map(u => {
            const val = convertUnit(1, selectedCategory.units[0].symbol, u.symbol, selectedCategory.name);
            const formatted = isNaN(val) ? '—' : (Math.abs(val) >= 1e6 || Math.abs(val) < 1e-4 ? val.toExponential(3) : parseFloat(val.toPrecision(6)).toString());
            return (
              <View key={u.symbol} style={styles.tableRow}>
                <Text style={[styles.tableCell, { flex: 2 }]}>{u.name}</Text>
                <Text style={[styles.tableCell, styles.symbolCell, { flex: 1 }]}>{u.symbol}</Text>
                <Text style={[styles.tableCell, { flex: 2, textAlign: 'right' }]}>{formatted}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.calcBody,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { marginRight: 10 },
  backText: { color: Colors.brandBlue, fontSize: 14, fontWeight: '600' },
  headerTitle: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  body: { padding: 12, paddingBottom: 40 },
  sectionLabel: { color: '#aaaaaa', fontSize: 12, fontWeight: '600', marginBottom: 6, marginTop: 12, letterSpacing: 0.5 },
  catScroll: { marginBottom: 8 },
  catRow: { flexDirection: 'row', gap: 6, paddingBottom: 4 },
  catChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, backgroundColor: Colors.calcBody, borderWidth: 1, borderColor: Colors.border },
  catChipActive: { backgroundColor: Colors.brandBlue, borderColor: Colors.brandBlue },
  catChipText: { color: '#aaaaaa', fontSize: 12 },
  catChipTextActive: { color: '#ffffff', fontWeight: '700' },
  converterCard: { backgroundColor: Colors.calcBody, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: Colors.border, marginBottom: 16 },
  unitRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  unitLabel: { color: '#aaaaaa', fontSize: 12, fontWeight: '600', width: 36 },
  unitPicker: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.background, borderRadius: 8, padding: 10, borderWidth: 1, borderColor: Colors.border },
  unitPickerText: { color: '#ffffff', fontSize: 13, fontWeight: '600', flex: 1 },
  unitSymbol: { color: '#aaaaaa', fontSize: 12 },
  dropIcon: { color: '#888', fontSize: 10, marginLeft: 4 },
  dropdown: { backgroundColor: Colors.background, borderRadius: 8, borderWidth: 1, borderColor: Colors.border, marginBottom: 8, maxHeight: 180 },
  dropItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: Colors.border },
  dropItemActive: { backgroundColor: 'rgba(0,102,204,0.15)' },
  dropItemText: { color: '#dddddd', fontSize: 13 },
  dropItemSymbol: { color: '#888', fontSize: 12 },
  valueInput: { backgroundColor: Colors.background, borderRadius: 8, borderWidth: 1, borderColor: Colors.shiftLabel, color: '#ffffff', fontSize: 20, fontWeight: '600', paddingHorizontal: 14, paddingVertical: 10, textAlign: 'right', marginBottom: 8 },
  swapBtn: { alignSelf: 'center', backgroundColor: Colors.keyDefault, borderRadius: 20, paddingHorizontal: 20, paddingVertical: 6, marginBottom: 8 },
  swapText: { color: Colors.shiftLabel, fontSize: 13, fontWeight: '700' },
  resultBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.background, borderRadius: 8, padding: 12, marginTop: 4, borderWidth: 1, borderColor: Colors.displayBorder },
  resultLabel: { color: '#888', fontSize: 12, marginRight: 8 },
  resultValue: { flex: 1, color: Colors.displayBg, fontSize: 22, fontWeight: '700', textAlign: 'right' },
  resultUnit: { color: '#aaaaaa', fontSize: 14, marginLeft: 8 },
  formulaDisplay: { color: '#888888', fontSize: 11, textAlign: 'center', marginTop: 8 },
  table: { backgroundColor: Colors.calcBody, borderRadius: 10, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden' },
  tableHeader: { flexDirection: 'row', backgroundColor: Colors.keyDefault, paddingHorizontal: 10, paddingVertical: 8 },
  tableHeaderText: { color: Colors.shiftLabel, fontWeight: '700', fontSize: 11 },
  tableRow: { flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: Colors.border },
  tableCell: { color: '#cccccc', fontSize: 12 },
  symbolCell: { color: Colors.shiftLabel, fontWeight: '600' },
});

export default UnitConverterScreen;