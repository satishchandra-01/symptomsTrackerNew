/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
// import {TextInput} from '@react-native-material/core';
import React, {Component, useState} from 'react';
import { Icon } from 'react-native-elements';
import {Header} from './symptomCard';
export default function TrackerPage() {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  var monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var that = this;
  var day = new Date().getDate(); //Current Date
  var month = monthNames[new Date().getMonth()]; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var date = day + ' ' + month + ' ' + year;
  var symptoms = [
    'Head ache',
    'Nausea',
    'Fever',
    'Bodyache',
    'Anorexia',
    'Depression',
    'Dry skin',
    'Achne',
    'breathlessness',
    'blood vomit',
    'burn',
  ];
  const TurnOnActive = () => {
    setIsActive(true);
  };
  const TurnOffActive = () => {
    setIsActive(false);
  };
  const displaySymptoms = symptoms.map(symptom => (
    <Text style={styles.symptoms} key={symptom}>
      {symptom}
    </Text>
  ));
  var symptomDemo = {name:'Nausea',syn:"Loose Motions"};
  return (
    <>
      <View style={styles.miniDashboard}>
        <View style={styles.miniDashboardRow}>
          <Text style={styles.miniDashboardText1}>#1</Text>
          <Text style={styles.miniDashboardText2}>Frequency</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.miniDashboardRow}>
          <Text style={styles.miniDashboardText1}>Nausea</Text>
          <Text style={styles.miniDashboardText2}>Avg 3/Day</Text>
        </View>
        <Text
          style={{
            fontStyle: 'italic',
            color: '#B1D2F9',
            textAlign: 'right',
            marginRight: '5%',
            marginBottom: '2%',
          }}>
          {date}
        </Text>
      </View>
      <View style={styles.topBar}>
        {!isActive && (
          <>
            <Text style={styles.topBarTextActive} onPress={TurnOffActive}>
              All
            </Text>
            <Text style={styles.topBarText} onPress={TurnOnActive}>
              Active
            </Text>
          </>
        )}
        {isActive && (
          <>
            <Text style={styles.topBarText} onPress={TurnOffActive}>
              All
            </Text>
            <Text style={styles.topBarTextActive} onPress={TurnOnActive}>
              Active
            </Text>
          </>
        )}
        <View style={{flexGrow: 1}} />
        <Icon
          name="add"
          type="Ionicons"
          color="white"
          size={30}
          style={styles.topBarText}
        />
        <Icon
          name="add"
          type="Ionicons"
          color="white"
          size={30}
          style={styles.topBarText}
        />
      </View>
      <ScrollView>
        <View style={styles.symptomsContainerMain}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              fontFamily: 'sans-serif',
              display: 'flex',
              marginLeft: '2%',
              marginBottom: '3%',
            }}>
            Top Symptoms
          </Text>
          <View style={styles.symptomsContainerSub}>{displaySymptoms}</View>
          <TextInput
            style={styles.TextInput}
            placeholder="Other Symptom"
            placeholderTextColor="#286BBC"
            onChangeText={change => setText(change)}
            value={text}
          />
          <TouchableOpacity style={styles.rateBtn} >
            <Text style={styles.loginText} >Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollView}>
          <Header symptom={symptomDemo}/>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({

  miniDashboard: {
    backgroundColor: '#279AC6',
    justifyContent: 'center',
    color: 'White',
  },
  miniDashboardRow: {
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  miniDashboardText1: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  miniDashboardText2: {
    fontFamily: 'sans-serif',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  line: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  topBar: {
    backgroundColor: '#279AC6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarText: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginLeft: '3%',
    marginRight: '2%',
    marginBottom: '2%',
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: '#B1D2F9',
  },
  topBarTextActive: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginLeft: '3%',
    marginRight: '2%',
    marginBottom: '2%',
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
  symptomsContainerMain: {
    padding: '5%',
  },
  symptomsContainerSub: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  symptoms: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingRight: '3%',
    paddingLeft: '3%',
    marginRight: '4%',
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: 'rgba(40, 107, 188, 0.09)',
    fontFamily: 'Circular Std',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#286BBC',
    borderRadius: 5,
  },
  OtherSymptomsInput: {
    borderRadius: 10,
    backgroundColor: 'black',
  },
  TextInput: {
    marginTop: 20,
    height: 50,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    backgroundColor: '#E5EDF7',
    fontFamily: 'Inter',
    fontSize: 15,
    fontStyle: 'normal',
  },
  loginText:{
    color:"white",
    fontWeight:"bold",
  },
  rateBtn:{
    borderRadius:10,
    height:50,
    width: '30%',
    marginLeft: '70%',
    marginTop:20,
    marginBottom:20,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#279AC6",
    fontWeight:"bold",
  },
  symptomsCardContainer: {
  },
  symptomsCardHead: {
    backgroundColor: '#F9F9F9',
  },
});
