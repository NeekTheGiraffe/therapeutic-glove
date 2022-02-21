import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from '../styles';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details!</Text>
      <LineChart
        data={line}
        width={Dimensions.get('window').width - 16} // from react-native
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
    </View>
  )
}

const line = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2 // optional
    }
  ]
};