import { Text, type TextProps, StyleSheet, Dimensions } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: Dimensions.get('window').width*0.04,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: Dimensions.get('window').width*0.04,
    lineHeight: 24,
    fontWeight: '500',
  },
  title: {
    fontSize: Dimensions.get('window').width*0.07,
    fontWeight: '700',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: Dimensions.get('window').width*0.05,
    fontWeight: '600',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
