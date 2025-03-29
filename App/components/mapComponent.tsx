import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from './MapView';
import { ThemedView } from '@/components/ThemedView';

const MapComponent = () => {
    return (
        <ThemedView style={styles.mapContainer}>
            <MapView style={styles.map} />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.75,
    },
});

export default MapComponent;