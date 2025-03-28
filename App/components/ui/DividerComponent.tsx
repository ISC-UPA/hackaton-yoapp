import React from 'react';
import { StyleSheet, View } from 'react-native';

const DividerComponent = () => {
    return (
        <View style={styles.dividerComponent}></View>
    );
}

const styles = StyleSheet.create({

    dividerComponent: {
        height: 1,
        width: 'auto',
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(120, 120, 120, 0.3)',
     },
    
})

export default DividerComponent;
