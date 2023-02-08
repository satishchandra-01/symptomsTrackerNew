/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TrackerPage from './TrackerPage';
import { LineChart } from 'react-native-charts-wrapper';

export default function App() {
  const [dates, setDates] = React.useState([1,2,3,4,5]);
const [temperatures, setTemperatures] = React.useState([1,2,3,4,5]);
const handleInput = (inputDates, inputTemperatures) => {
  setDates(inputDates);
  setTemperatures(inputTemperatures);
};
  return (
    <View>
      <TrackerPage />
      <Text>HI</Text>
      {/* <LineChart
    data={{
      datasets: [
        {
          data: temperatures.map((temp, index) => ({
            x: dates[index],
            y: temp,
          })),
        },
      ],
    }}
    xAxis={{}}
    yAxis={{}}
  /> */}
    </View>
  );
}
