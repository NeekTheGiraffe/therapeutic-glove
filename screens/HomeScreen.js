import { View, Text, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from '../styles';
import Card from '../components/Card';
import { LineChart } from 'react-native-chart-kit';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {

  const [graphValue, setGraphValue] = useState(40);

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>
        Home Screen
      </Text>

      <Card style={styles.card}>
        <Text style={{ color: "#fff"}}>Your stuff goes here!</Text>
        <Button
          title="Go to settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </Card>

      <Card style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', {
          graphValue: graphValue
        })}>
          <Text style={{ color: "#fff"}}>Your Data</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May'],
              datasets: [
                {
                  data: [20, graphValue, 28, 80, 99, 43],
                  strokeWidth: 2 // optional
                }
              ]
            }}
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
        title="Increase"
        onPress={() => setGraphValue(graphValue + 2)}
      />
      <Button
        style={styles.button}
        title="Decrease"
        onPress={() => setGraphValue(graphValue - 2)}
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