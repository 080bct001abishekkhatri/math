import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../theme/colors';

interface DisplayProps {
  expression: string;
  result: string;
  mode: string;
  angleMode: string;
  isShift: boolean;
  isAlpha: boolean;
  history?: { expr: string; result: string }[];
}

const Display: React.FC<DisplayProps> = ({
  expression,
  result,
  mode,
  angleMode,
  isShift,
  isAlpha,
}) => {
  return (
    <View style={styles.screen}>
      {/* Status bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>{isShift ? 'S' : ' '}</Text>
        <Text style={styles.statusText}>{isAlpha ? 'A' : ' '}</Text>
        <Text style={styles.modeBadge}>{mode}</Text>
        <Text style={styles.angleBadge}>{angleMode}</Text>
        <Text style={styles.statusText}>Disp</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Expression line */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.exprContainer}
        style={styles.exprScroll}
      >
        <Text style={styles.expressionText} numberOfLines={2}>
          {expression || ' '}
        </Text>
      </ScrollView>

      {/* Result line */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText} adjustsFontSizeToFit numberOfLines={1}>
          {result}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.displayBg,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.displayBorder,
    padding: 6,
    minHeight: 90,
    marginBottom: 6,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minHeight: 14,
  },
  statusText: {
    fontSize: 9,
    color: Colors.displayText,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  modeBadge: {
    fontSize: 9,
    color: Colors.displayText,
    fontWeight: '700',
    backgroundColor: 'rgba(0,0,0,0.08)',
    paddingHorizontal: 3,
    borderRadius: 2,
    marginLeft: 'auto',
  },
  angleBadge: {
    fontSize: 9,
    color: Colors.displayText,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.displayBorder,
    marginVertical: 3,
    opacity: 0.3,
  },
  exprScroll: {
    maxHeight: 38,
  },
  exprContainer: {
    alignItems: 'flex-end',
    flexGrow: 1,
    paddingRight: 2,
  },
  expressionText: {
    fontSize: 15,
    color: Colors.displayText,
    fontFamily: 'monospace',
    textAlign: 'right',
  },
  resultContainer: {
    alignItems: 'flex-end',
    marginTop: 2,
    paddingRight: 2,
  },
  resultText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.displayText,
    fontFamily: 'monospace',
    minHeight: 26,
  },
});

export default Display;