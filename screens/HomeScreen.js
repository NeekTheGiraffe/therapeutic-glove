import { View, Text, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from '../styles';
import Card from '../components/Card';
import { LineChart } from 'react-native-chart-kit';

export default function HomeScreen({ navigation }) {

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        flexDirection: 'column',  // Sets flex as vertical
        justifyContent: 'center', // Vertical align
        alignItems: 'center'      // Horizontal align
      }}
    >
      <Text style={{
        color: "#fff",
      }}>
        Home Screen
      </Text>

      <Card style={{ padding: 10, margin: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ color: "#fff"}}>Your stuff goes here!</Text>
        <Button
          title="Go to settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </Card>

      <Card style={{ padding: 10, margin: 10, flexDirection: 'column', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={{ color: "#fff"}}>Your Data</Text>
          <LineChart
            data={line}
            width={Dimensions.get('window').width - 56} // from react-native
            height={220}
            yAxisLabel={''}
            chartConfig={{
              backgroundColor: '#9e4e20',
              backgroundGradientFrom: '#823c14',
              backgroundGradientTo: '#cf5e1d',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </TouchableOpacity>
      </Card>

      <Button
        style={styles.button}
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
};


const line = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2 // optional
    }
  ]
};