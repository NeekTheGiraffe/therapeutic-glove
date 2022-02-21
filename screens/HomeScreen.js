import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Button
        style={styles.button}
        title="Go to settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        style={styles.button}
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
};