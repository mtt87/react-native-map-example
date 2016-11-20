import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  },
  welcome: {
    fontSize: 21,
    textAlign: 'center',
    margin: 10,
    marginTop: 25,
  },
  map: {
    height: 350,
    width: width - 20,
    borderWidth: 2,
    borderColor: '#3F51B5',
  },
  button: {
    backgroundColor: '#3F51B5',
    padding: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  }
});


export default class RnTalk extends Component {
  constructor(){
    super();
    this.state = {
      showPins: false,
      markers: [],
    };
  }

  toggleTechHub() {
    const markers = [{
      title: 'THL',
      latlng: {
        latitude: 51.5216297,
        longitude: -0.0867828,
      },
      description: 'TechHub 20 Ropemaker Street',
      image: '',
    }];

    if (this.state.markers.length > 0) {
      return this.setState({
        showPins: !this.state.showPins,
        markers: [],
      });
    }
    return this.setState({
      showPins: !this.state.showPins,
      markers,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello world!
        </Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 51.5216297,
            longitude: -0.0867828,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          showsPointsOfInterest={false}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <TouchableOpacity
          onPress={() => this.toggleTechHub()}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {this.state.showPins ? 'Hide' : 'Show'} TechHub
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('RnTalk', () => RnTalk);
