import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3F51B5',
    padding: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  },
});

const ToggleButton = props =>
  <TouchableOpacity
    onPress={props.toggleTechHub}
  >
    <View style={styles.button}>
      <Text style={styles.buttonText}>
        {props.showPins ? 'Hide' : 'Show'} TechHub
      </Text>
    </View>
  </TouchableOpacity>;

ToggleButton.propTypes = {
  showPins: React.PropTypes.bool,
  toggleTechHub: React.PropTypes.func,
};

export default ToggleButton;
