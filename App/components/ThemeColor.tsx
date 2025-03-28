import React from 'react'

import { useThemeColor } from '@/hooks/useThemeColor';

export default function ThemeColor() {

    const color = useThemeColor({ light: 'black', dark: 'white' }, 'text')
    return color
}