import PropTypes from 'prop-types';
import * as React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform
} from 'react-native';
import { DarkTheme } from '@react-navigation/native';

const Card = props => {

  const { children, elevation, opacity, cornerRadius, backgroundColor } = props;

  const cardStyle = StyleSheet.create({
    container: {
      
      // Common to all platforms
      width: Dimensions.get('window').width - 40,
      backgroundColor: backgroundColor,
      borderRadius: cornerRadius,

      // Platform-specific
      ...Platform.select({
        ios: {
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: { width: 0, height: elevation }

        },
        android: {
          elevation: elevation
        },
        default: {
          elevation: elevation
        }
      })
    }
  });

  return (
    <View style={[cardStyle.container, props.style]}>
      {children}
    </View>
  );
};

// Type safety
Card.propTypes = {
  backgroundColor: PropTypes.string,
  elevation: PropTypes.number,
  cornerRadius: PropTypes.number,
  opacity: PropTypes.number
};

// Default props
Card.defaultProps = {
  backgroundColor: DarkTheme.colors.card,
  elevation: 3,
  cornerRadius: 5,
  opacity: .5
};

export default Card;