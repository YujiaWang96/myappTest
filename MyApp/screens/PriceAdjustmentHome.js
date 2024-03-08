import React from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Clothes from './assets/images/pagePriceAdjustmentHome/Clothes.svg';
import Bar from './assets/images/pagePriceAdjustmentHome/Bar.svg';
import StarIcon from './assets/images/pagePriceAdjustmentHome/StarIcon.svg';
import ArrowIcon from './assets/images/pagePriceAdjustmentHome/ArrowIcon.svg';


const { width, height } = Dimensions.get('window');

const PriceAdjustmentHome = () => {
  return (
    <View style={styles.container}>
      {/* {header} */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerWrapperText}>Price Adjustments</Text>
        <Text style = {styles.starIcon}>{<StarIcon/>}</Text>
      </View>
      {/* Saved money bar Section */}
      <View style={styles.savedSection}>
        <Text style={styles.savedAmount}>Saved $0</Text>
        <Text style={styles.savedItems}>0 Items</Text>
        <TouchableOpacity 
          style={styles.arrowIcon}
          onPress = {() =>{console.log("To refund history");}}
          >   
          <ArrowIcon/>  
        </TouchableOpacity>
      </View>
      {/* Eligible Items & Pending section */}
      <View style={styles.toggleWrapper}>
        <TouchableOpacity
          style={styles.eligibleItemsButton}
          onPress={() => { console.log("Eligible Items clicked"); }} 
        >
          <Text style={styles.toggleButtonText}>Eligible Items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pendingButton}
          onPress={() => { console.log("Pending clicked"); }} 
        >
          <Text style={styles.toggleButtonText}>Pending</Text>
        </TouchableOpacity>
      </View>
      
      {/* Clothing image and related icons */}
      <View style={styles.imageWrapper}>
        <Clothes />
      </View>
      <View style={styles.barWrapper}>
        <Bar width={width * 0.75} height={height * 0.02} />
      </View>
      
      {/* Performing Money-Saving Magic Section */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Performing Money-Saving Magic</Text>
        <Text style={styles.subtitle}>
          We are working hard to load your receipts. This process may take a few minutes.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  headerWrapper: {
    position: 'absolute',
    top: height * 0.1,
    left: width * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerWrapperText:{
    color: 'black',
    fontSize: width *0.06,
    fontFamily: 'Inter',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  savedSection: {
    position: 'absolute',
    width: width*0.9,
    height: 89,
    left: 19,
    top: 171,
    backgroundColor: '#8754DE', 
    borderRadius: 15,
    justifyContent: 'center',
    padding: 20,
  },
  savedAmount: {
    bottom:10,
    color: 'white',
    fontSize: width*0.05,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  savedItems: {
    top:10,
    color: 'white',
    fontSize: width*0.04,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  arrowIcon: {
    position: 'absolute',
    width: width*0.1,
    height: width*0.1,
    right: 20,
    top: 25,
  },
  starIcon:{
    position:'relative',
    top:3,
  },
  progressBarBackground: {
    position: 'absolute',
    width: 322,
    height: 7,
    left: 58,
    top: 598,
    backgroundColor: '#E3E9EC',
    borderRadius: 26,
  },
  progressBarForeground: {
    width: 86,
    height: 7,
    backgroundColor: 'black',
    borderRadius: 26,
  },
  toggleWrapper: {
    position: 'absolute',
    width: width*0.9,
    height: height*0.04,
    left: 20,
    top: 282,
    borderRadius:10,
    backgroundColor:'#EEEEEE',
    flexDirection: 'row',
  },
  eligibleItemsButton:{
    backgroundColor:'white',
    flex:1,
    borderRadius:10,
    alignItems:'center',
    paddingVertical:width*0.02,
    borderWidth:1,
    borderColor:'#DCDCDC',
  },
  eligibleItemsText: {
    flex: 1, 
    backgroundColor: 'pink',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: '500',
    borderRadius:10,
    borderColor:'black',
    paddingVertical:width*0.02,
  },
  pendingButton:{
    flex:1,
    alignItems:'center',
    paddingVertical:width*0.02,
  },
  pendingText: {
    flex: 1, 
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: '400',
    paddingVertical:width*0.02,
  },
  textWrapper: {
    position: 'absolute',
    top: height * 0.67, 
    left: width * 0.1,

    alignItems: 'center',
  },
  rowDisplay:{
    flexDirection : 'row',
    alignItems: 'center',
  },
  starIcon:{
    position:'relative',
    top:2,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: width*0.05, 
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word'
  },
  subtitle: {
    marginTop:10,
    width: width * 0.8, 
    textAlign: 'center',
    color: '#4D4D4D',
    fontSize: width*0.04, 
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 20, 
    wordWrap: 'break-word'
  },
  imageWrapper:{
    position: 'absolute',
    top:height*0.4,
    left:width*0.25,
    alignItems: 'center',
  },
  barWrapper:{
    position: 'absolute',
    top: height * 0.64, 
    left: width * 0.15, 
    width: width * 0.7, 
    height: height * 0.02, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PriceAdjustmentHome;