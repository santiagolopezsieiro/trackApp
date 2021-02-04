import React from 'react';
import { Text , StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

const Map = () => {
    return <MapView 
        style={styles.map} 
        initialRegion={{
            latitude:-34.609032,
            longitude:-58.373219,
            latitudeDelta: 0.10,
            longitudeDelta: 0.10
        }}
        />
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;