import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesScreen from './GamesScreen.js';
import PianoTilesScreen from "./PianoTilesScreen.js";

const GamesStack = createNativeStackNavigator();

export default function GamesStackScreen() {
  return (
    <GamesStack.Navigator
      screenOptions={{ headerShown: true }}
    >
      <GamesStack.Screen name="Games" component={GamesScreen} />
      <GamesStack.Screen name="Piano Tiles" component={PianoTilesScreen} />
    </GamesStack.Navigator>
  )
}