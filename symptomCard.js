/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

/* eslint-disable no-trailing-spaces */

/* eslint-disable quotes */

/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { TextInput2 } from './textInput';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
  } from 'react-native';
  import { Slider } from 'react-native-elements';
  import { Animated } from 'react-native';
  import Modal from "react-native-modal";
  import ReactSlider from "react-slider";
  import { Icon } from 'react-native-elements';
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
    XAxis,
    YAxis,
  } from "react-native-chart-kit";
const MyThumb = ({ value }) => (
    <View style={{ backgroundColor: 'black', padding: 10 }}>
      <Text style={{ color: 'black' }}>{value}</Text>
    </View>
  );

export class Header extends Component {
    state = {
        isExpand: false,
        frequencyElements: ['1','2','3','4','5','6','7'],
        frequency: 4,
        frequencyValues: [15,2,12,21],
        frequencyLevels: ['Moderate','Normal','Moderate','Normal'],
        noteForDoctor: ['','','',''],
        isFrequencyModalVisible: false,
        selectedOptionId: 1,
        test: 10,
        count:0,
        severity: '',
        selectedSeverityId: '0',
        isEditActive: false,
        labels: ["1 Feb", "2 Feb", "3 Feb", "4 Feb", "5 Feb", "6 Feb"],
  datasets: [
    {
      data: [2,3,1,2,1,5],
    },
  ],
     };
     
     changeExpandStatus = () => {
        this.setState({isExpand: !this.state.isExpand});
    };
    displayFrequencyModal = (count) => {
        this.setState({isFrequencyModalVisible:true});
        this.setState({count});
    };
    hideFrequencyModal = () => {
        this.setState({isFrequencyModalVisible:false});
    };
    addNewFrequencyItem = () => {
        this.setState({frequency:this.state.frequency + 1,count:this.state.frequency + 1,isEditActive:true});
        this.setState({frequencyValues:[...this.state.frequencyValues,new Date().getHours()]});
        this.setState({frequencyLevels:[...this.state.frequencyLevels,'Normal']});        
    };
    onChangeText = (text) => {
        this.setState({noteForDoctor:text});
    };
    updateDetails = () => {
        this.setState({isFrequencyModalVisible: false,selectedSeverityId:0});
        const items = this.state.frequencyLevels;
        items[this.state.count - 1 ] = this.state.severity;
        this.setState(items);
    };
    handleFrequencyModal = () => {
        return (
            <Modal isVisible={this.state.isFrequencyModalVisible} animationIn="slideInUp" animationOut="slideOutDown" animationInTiming={500} animationOutTiming={500}>
                <View style={styles.addFrequencyModal}>
                    <View style={{margin: '3%',marginLeft: '4%'}}>
                        <Text style={{fontWeight: 'bold',fontSize: 25,textAlign: 'left',color: '#286BBC'}}>Add{this.state.count}</Text>
                    </View>
                    <View style={styles.questionContainer} >
                        <View style={styles.OptionCircleContainer} >
                            <View style={styles.OptionCircle}>
                                <View style= {this.state.selectedOptionId === 1 ?  styles.selectedOptionCircle : {}}></View>
                            </View>
                        </View>
                        <Text style={styles.optionHeading} onPress={() => this.setState({selectedOptionId:1,selectedSeverityId:0})}>By intensity</Text>
                    </View>
                    <View style={[styles.optionsContainer]}>
                        <TouchableOpacity style={[styles.optionBox,this.state.selectedSeverityId === 1 ? {backgroundColor:'white',borderWidth:1} : {backgroundColor:'#7ADC96'} ]} onPress={() => this.setState({severity:'Mild',selectedSeverityId:1,selectedOptionId:1})}>
                            <Text style={styles.optionText}>Mild( Noticeable )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionBox,this.state.selectedSeverityId === 2 ? {backgroundColor:'white',borderWidth:1} : {backgroundColor:'#E0D040'}]} onPress={() => this.setState({severity:'Moderate',selectedSeverityId:2,selectedOptionId:1})}>
                            <Text style={styles.optionText}>Moderate( Bearable )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionBox,this.state.selectedSeverityId === 3 ? {backgroundColor:'white',borderWidth:1} : {backgroundColor:'#EA9B65'}]} onPress={() => this.setState({severity:'High',selectedSeverityId:3,selectedOptionId:1})}>
                            <Text style={styles.optionText}>High( Unbearable )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionBox,this.state.selectedSeverityId === 4 ? {backgroundColor:'white',borderWidth:1} : {backgroundColor:'#E1341C'}]} onPress={() => this.setState({severity:'Severe',selectedSeverityId:4,selectedOptionId:1})}>
                            <Text style={styles.optionText}>Severe( Prefer Doctor's Intervention )</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.questionContainer} >
                        <View style={styles.OptionCircleContainer} >
                            <View style={styles.OptionCircle}>
                                <View style= {this.state.selectedOptionId === 2 ?  styles.selectedOptionCircle : {}}></View>
                            </View>
                        </View>
                        <Text style={styles.optionHeading} onPress={() => this.setState({selectedOptionId:2,selectedSeverityId:0})}>By Action</Text>
                    </View>
                    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginLeft: '6%',marginRight: '3%'}}>
                        <TouchableOpacity style={[styles.optionBox,this.state.selectedSeverityId === 5 ? {backgroundColor:'white',borderWidth:1} : {backgroundColor:'#E0D040'},{marginRight: '2%',marginLeft: '2%',flexGrow: 1,alignItems: 'center',justifyContent: 'center'}]} onPress={() => this.setState({severity:'Yes',selectedSeverityId:5,selectedOptionId:2})}>
                            <Text style={[styles.optionText,{paddingBottom:'4%',paddingTop: '4%'}]}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optionBox,this.state.selectedSeverityId === 6 ? {backgroundColor:'white',borderWidth:1} : {backgroundColor:'#7ADC96'},{marginRight: '2%',marginLeft: '2%',flexGrow: 1,alignItems: 'center',justifyContent: 'center'}]} onPress={() => this.setState({severity:'No',selectedSeverityId:6,selectedOptionId:2})}>
                            <Text style={[styles.optionText,{paddingBottom:'4%',paddingTop: '4%'}]}>No</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.questionContainer,{marginBottom:0,marginTop:'4%'}]}>
                        <Text style={styles.optionHeading}>Add note for your doctor</Text>
                    </View>
                    <View style={{marginTop:0}}>
                        <TextInput2 
                            value={this.state.noteForDoctor}
                            style={{padding: 10,backgroundColor:'#E5EDF7',margin: '4%',marginLeft: '8%',borderRadius: 10,fontSize: 20,height:150 }}
                            placeholderStyle={{ fontFamily: "Circular Std", fontSize: 18,color: 'black' }}
                            onChangeText={text => this.onChangeText(text)}
                            placeholder={'Write Here...'}
                            />
                    </View>
                    <View style={{flexDirection: 'row',margin: '3%',arginLeft: '15%'}}>
                        <TouchableOpacity style={[styles.button,{backgroundColor:'#AD2C0F'}]}>
                            <Text style={{paddingLeft: '15%',paddingRight: '15%',paddingTop: '3%',paddingBottom: '3%',color: 'white',fontSize: 18,fontFamily: 'Circular Std'}} onPress={() => this.setState({isFrequencyModalVisible:false})}>Cancel </Text>
                        </TouchableOpacity>
                        <View style={{flexGrow: 1}}></View>
                        <TouchableOpacity style={[styles.button,{backgroundColor:'#279AC6'}]} >
                            <Text style={{paddingLeft: '15%',paddingRight: '15%',paddingTop: '3%',paddingBottom: '3%',color: 'white',fontSize: 18,fontFamily: 'Circular Std'}} onPress={this.updateDetails}>Update </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };
    displaySymptoms = this.state.frequencyElements.map((symptom,index) => (
        <View key={symptom} style={ index < this.state.frequency ? styles.colouredFrequencyBox : styles.uncolouredFrequencyBox} >
          <Text style={index < this.state.frequency ? styles.colouredFrequencyBoxText : styles.uncoloredFrequencyBoxText }>{symptom}</Text>
        </View>
      ));
  render() {
    const handleSlider = (count,boolean) =>{
        return (
            <Slider
                disabled={boolean}
                value={this.state.frequencyValues[count - 1]}
                onValueChange={(value) => {
                    const items = this.state.frequencyValues;
                    items[count - 1 ] = value;
                    this.setState(items);
                }}
                minimumValue={0}
                maximumValue={24}
                step={1}
                style={{marginLeft:'3%', marginRight: '3%',marginTop:'5%',marginBottom:'0%',flexGrow: 1}}
                thumbStyle={{backgroundColor:'transparent',borderRadius:10,height:100,width:100}}
                trackStyle={{height:2}}
                minimumTrackTintColor={'#F5F5F5'}
                maximumTrackTintColor={'#F5F5F5'}
                thumbProps={{
                    children: (
                        <View style={{margin:'3%',marginTop:'23%',paddingLeft:'1%',paddingRight:'1%',alignItems: 'center',justifyContent: 'center',flexDirection:'row',backgroundColor:'white'}} >
                            <View style={{backgroundColor:'#48CAE4',height:50,width:50,borderTopLeftRadius: 20,borderBottomLeftRadius: 20,borderTopRightRadius:0,borderBottomRightRadius:0,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{paddingTop: '2%',paddingBottom: '2%',paddingLeft: '4%',paddingRight: '4%',fontWeight: 'bold',fontSize: 25,color: 'white'}} >{count}</Text>
                            </View>
                            <View style={{justifyContent: 'center',width:90,height:50,paddingLeft:5,backgroundColor:'#E5E8EE',borderTopRightRadius:20,borderBottomRightRadius:20}}>
                                <Text style={{paddingLeft: '3%',paddingRight: '5%',fontWeight: 'bold',fontSize: 18,color:'#286BBC',fontFamily:'Circular Std'}}>
                                    {this.state.frequencyLevels[count - 1]}
                                </Text> 
                                <View style={{paddingLeft: '3%',paddingRight: '5%',flexDirection:'row'}}>
                                    <Text style={{paddingLeft: '3%',paddingRight: '5%',color:'#616161',fontWeight:'bold',fontSize: 15}}>
                                        {this.state.frequencyValues[count - 1] <= 12 ? `${this.state.frequencyValues[count - 1]} AM` : `${this.state.frequencyValues[count - 1] - 12} PM`}
                                    </Text>
                                        <Icon
                                            name='expand-more'
                                            type='MaterialIcons'
                                            color='#517fa4'
                                            size={20}
                                            style={{padding:0}}
                                        />
                                </View>
                            </View>
                        </View>
                    ),
                }}
            />
        );
    };
    return (
        <View>
            <View style={styles.symptomsCardHeader}>
                <Text style={styles.symptomsCardHeaderHeading}>{this.props.symptom.name}</Text>
                <Text style={styles.symptomsCardHeaderText}>Syn: {this.props.symptom.syn}</Text>
            </View>
            <View style={styles.graphContainer} >
            <BarChart
            data={{
                labels: this.state.labels,
                datasets: this.state.datasets,
            }}
            showBarTops = {false}
            width={Dimensions.get("window").width - 50} // from react-native
            height={320}
            style={{marginRight: 50,marginTop: 50,marginBottom:50}}
            yAxisInterval={1}
            fromZero={true}
            withInnerLines={false}
            chartConfig={{
            decimalPlaces: 0,
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            fillShadowGradient:'#48CAE4',
            fillShadowGradientOpacity: 1,
            fillShadowGradientFrom:'#48CAE4',
            fillShadowGradientTo:'#48CAE4',
            color: (opacity = 1) => `black`,
            labelColor: (opacity = 1) => `black`,
            }}
            
        />

            </View>
            <View style={styles.frequencyContainer}>
                <View style={styles.frequencyContainerHeader}>
                    <Text style={styles.frequencyContainerHeaderHeading}>Frequency per day</Text>
                </View>
                <View style={styles.frequencyDisplayBar} >
                    {this.displaySymptoms}
                </View>
                <View style={{backgroundColor:'black',height:0.5,marginLeft:'3%',marginRight:'3%'}}></View>
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                    {this.state.isEditActive &&
                        <>
                            {this.state.frequencyElements.map((count) => ( 
                                count <= this.state.frequency ? 
                                <View style={{flexDirection: 'row',marginTop:'4%'}} key={count}>
                                    {handleSlider(count,false)}
                                    <View style={{marginTop:20,paddingRight:15}} >
                                        <Icon
                                            name='edit'
                                            type='MaterialIcons'
                                            color='#517fa4'
                                            size={35}
                                            style={{padding:10}}
                                            onPress={() => this.displayFrequencyModal(count)}
                                        />
                                    </View>
                                </View>
                                : 
                                <>
                                </>
                            ))}
                        </>
                    }
                    {!this.state.isEditActive &&
                        <>
                            {this.state.frequencyElements.map((count) => ( 
                                count <= this.state.frequency ? 
                                <View style={{flexDirection: 'row',marginTop:'4%'}} key={count}>
                                    {handleSlider(count,true)}
                                </View>
                                : 
                                <>
                                </>
                            ))}
                        </>
                    }
                    <View style={{backgroundColor:'black',height:0.5,marginLeft:'3%',marginRight:'3%',marginTop:'5%'}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{paddingLeft: '5%',paddingRight: '5%',paddingTop: '3%',paddingBottom: '3%',color: 'white',fontWeight: 'bold',fontSize: 15,fontFamily: 'Circular Std'}} onPress={() => {this.addNewFrequencyItem(); this.setState({isFrequencyModalVisible:true});}}>Add </Text>
                        </TouchableOpacity>
                        <View style={{flexGrow:1}}></View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{paddingLeft: '5%',paddingRight: '5%',paddingTop: '3%',paddingBottom: '3%',color: 'white',fontWeight: 'bold',fontSize: 15,fontFamily: 'Circular Std'}} onPress={() => this.setState({isEditActive : !this.state.isEditActive})}>{this.state.isEditActive ? 'Update' : 'Edit'}</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.isFrequencyModalVisible &&
                        <>
                        {this.handleFrequencyModal()}
                        </>
                    }
                </View>
                
            </View>
            <View style={{height: 300}}></View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      chart: {
        flex: 1,
      },
    symptomsCardContainer: {
    },
    symptomsCardHeader: {
        backgroundColor: '#48CAE4',
        fontFamily: 'Circular Std',
        color: 'white',
    },
    symptomsCardHeaderHeading: {
        fontFamily: 'Circular Std',
        color: 'white',
        fontWeight: "bold",
        fontSize: 25,
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '3%',
    },
    symptomsCardHeaderText: {
        fontFamily: 'Circular Std',
        color: 'white',
        fontSize: 15,
        marginBottom: '2%',
        marginLeft: '3%',
        fontWeight: 'normal',
    },
    graphContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,      
    },
    frequencyContainer: {
        backgroundColor: 'white',
    },
    frequencyContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    frequencyContainerHeaderHeading: {
        fontFamily: 'Circular Std',
        fontWeight: 'bold',
        fontSize: 23,
        color: 'black',
        paddingLeft: '3%',
    },
    frequencyDisplayBar: {
        flexDirection: 'row',
    },
    uncolouredFrequencyBox: {
        marginLeft: '1%',
        marginRight: '1%',
        marginTop: '3%',
        marginBottom: '3%',
        flexGrow: 1,
        borderColor: '#E5E8EE',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    colouredFrequencyBox: {
        marginLeft: '1%',
        marginRight: '1%',
        marginTop: '3%',
        marginBottom: '3%',
        flexGrow: 1,
        borderColor: '#E5E8EE',
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#48CAE4',        
    },
    colouredFrequencyBoxText: {
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '4%',
        paddingRight: '4%',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    uncoloredFrequencyBoxText: {
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '4%',
        paddingRight: '4%',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    button: {
        backgroundColor: '#48CAE4',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
        borderRadius: 10,
    },
    addFrequencyModal: {
        backgroundColor:"white",
        borderRadius: 10,
    },
    questionContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '3%',
    },
    OptionCircleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    OptionCircle: {
        height:20,
        width: 20,
        borderRadius: 100,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    selectedOptionCircle: {
        height:10,
        width: 10,
        borderRadius: 100,
        backgroundColor: 'black',
    },
    optionHeading: {
        fontFamily: 'Circular Std',
        fontSize: 20,
        fontWeight: 'bold',
        flexGrow: 1,
        color: 'black',
        paddingBottom: 0,
        marginLeft: '3%',
    },
    optionBox: {
        margin: '1%',
        marginLeft: '10%',
        marginRight: '5%',
        borderRadius: 15,
    },
    optionText: {
        fontFamily: 'Circular Std',
        fontSize: 20,
        fontWeight: 'bold',
        padding: '5%',
        color: 'black',
    },
  });
export default Header;
