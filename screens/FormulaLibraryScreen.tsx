import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView,
  FlatList, TouchableOpacity, TextInput,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../theme/colors';
import { formulas, formulaCategories, Formula } from '../utils/formulaData';

const FormulaLibraryScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const categories = ['All', ...formulaCategories];

  const filtered = useMemo(() => {
    return formulas.filter(f => {
      const matchCat = selectedCategory === 'All' || f.category === selectedCategory;
      const matchSearch =
        !search ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.formula.toLowerCase().includes(search.toLowerCase()) ||
        f.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCategory]);

  const renderFormula = ({ item }: { item: Formula }) => {
    const isExpanded = expandedItem === item.name;
    return (
      <TouchableOpacity
        style={styles.formulaCard}
        onPress={() => setExpandedItem(isExpanded ? null : item.name)}
        activeOpacity={0.8}
      >
        <View style={styles.formulaHeader}>
          <View style={styles.formulaLeft}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryBadgeText}>{item.category}</Text>
            </View>
            <Text style={styles.formulaName}>{item.name}</Text>
          </View>
          <Text style={styles.expandIcon}>{isExpanded ? '▲' : '▼'}</Text>
        </View>

        <Text style={styles.formulaText}>{item.formula}</Text>

        {isExpanded && (
          <View style={styles.variablesBox}>
            <Text style={styles.varLabel}>Variables:</Text>
            <Text style={styles.varText}>{item.variables}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Formula Library</Text>
        <Text style={styles.countText}>{filtered.length} formulas</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search formulas..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
        {search ? (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Text style={styles.clearBtn}>✕</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Category chips */}
      <View style={styles.chipRow}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={c => c}
          contentContainerStyle={styles.chipList}
          renderItem={({ item: cat }) => (
            <TouchableOpacity
              style={[styles.chip, selectedCategory === cat && styles.chipActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Formula list */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.name}
        renderItem={renderFormula}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No formulas found.</Text>
          </View>
        }
      />
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
  headerTitle: { flex: 1, color: '#ffffff', fontSize: 16, fontWeight: '700' },
  countText: { color: '#888888', fontSize: 11 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.calcBody,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: { fontSize: 14, marginRight: 8 },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    paddingVertical: 10,
  },
  clearBtn: { color: '#888', fontSize: 14, padding: 4 },
  chipRow: { paddingBottom: 6 },
  chipList: { paddingHorizontal: 10, gap: 6 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.calcBody,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: { backgroundColor: Colors.brandBlue, borderColor: Colors.brandBlue },
  chipText: { color: '#aaaaaa', fontSize: 12 },
  chipTextActive: { color: '#ffffff', fontWeight: '700' },
  list: { padding: 10, gap: 8, paddingBottom: 30 },
  formulaCard: {
    backgroundColor: Colors.calcBody,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 6,
  },
  formulaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  formulaLeft: { flex: 1 },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,102,204,0.2)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 4,
  },
  categoryBadgeText: { color: Colors.brandBlue, fontSize: 10, fontWeight: '600' },
  formulaName: { color: '#ffffff', fontSize: 14, fontWeight: '700' },
  formulaText: {
    color: Colors.shiftLabel,
    fontSize: 14,
    fontFamily: 'monospace',
    marginTop: 2,
  },
  expandIcon: { color: '#888', fontSize: 11, marginLeft: 8, marginTop: 2 },
  variablesBox: {
    marginTop: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 6,
    padding: 8,
    borderLeftWidth: 3,
    borderLeftColor: Colors.shiftLabel,
  },
  varLabel: { color: '#aaaaaa', fontSize: 11, fontWeight: '600', marginBottom: 2 },
  varText: { color: '#dddddd', fontSize: 12 },
  empty: { alignItems: 'center', padding: 40 },
  emptyText: { color: '#888888', fontSize: 14 },
});

export default FormulaLibraryScreen;