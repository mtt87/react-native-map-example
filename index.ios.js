import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Map from './src/Map';
import ToggleButton from './src/ToggleButton';

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
    marginBottom: 15,
    marginTop: 35,
  },
});


export default class RnTalk extends Component {
  constructor() {
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
        latitude: 51.519789,
        longitude: -0.088203,
      },
    }, {
      title: 'TH@Campus',
      latlng: {
        latitude: 51.522791,
        longitude: -0.085474,
      },
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
          Hello TechHub!
        </Text>
        <Map
          width={width - 20}
          style={styles.map}
          markers={this.state.markers}
        />
        <ToggleButton
          toggleTechHub={() => this.toggleTechHub()}
          showPins={this.state.showPins}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('RnTalk', () => RnTalk);
