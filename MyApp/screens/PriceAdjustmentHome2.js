import React from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import StarIcon from './assets/images/pagePriceAdjustmentHome/StarIcon.svg';
import ArrowIcon from './assets/images/pagePriceAdjustmentHome/ArrowIcon.svg';
import Group22 from './assets/images/pageLinkGmailAccount/Group22.svg';
import TargetIcon from './assets/images/pageRefundHistory/TargetIcon.svg';
import ZaraIcon from './assets/images/pageRefundHistory/ZaraIcon.svg';
import AnthIcon from './assets/images/pageRefundHistory/AnthIcon.svg';
import SephoraIcon from './assets/images/pageRefundHistory/SephoraIcon.svg';

const { width, height } = Dimensions.get('window');

const ItemContent = ({ 
  storeName,
  orderDetails,
  money,
  refund,

  }) => {
    return (
      <View style={styles.items}>
        <Text style={styles.text2}>{storeName}</Text>
        <Text style={styles.text3}>{orderDetails}</Text>
        <Text style={styles.text4}>{money}</Text>
        <Text style={styles.text1}>{refund}</Text>
      </View>
    );
};

const PriceAdjustmentHome2 = () => {
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

      {/* price match items */}
      <View style={styles.bigBox}>
        <View style={styles.items}>
          <ItemContent 
            storeName="Target"
            orderDetails="2 order 7 items"
            money="$119.35"
            refund="Potential Refund">
          </ItemContent>
          <TargetIcon style={{position:'absolute',top:width*0.05,left:width*0.07}}/>
        </View>
        <View style={styles.items}>
          <ItemContent 
            storeName="Zara"
            orderDetails="2 order 7 items"
            money="$25.00"
            refund="Potential Refund"
          />
          <ZaraIcon style={{position:'absolute',top:width*0.02,left:width*0.04}}/>
        </View>
        <View style={styles.items}>
          <ItemContent 
            storeName="Sephora"
            orderDetails="3 order 7 items"
            money="$34.35"
            refund="Potential Refund"
          />
          <SephoraIcon style={{position:'absolute',top:width*0.02,left:width*0.04}}/>
        </View>
        <View style={styles.items}>
          <ItemContent 
            storeName="Anthropologie"
            orderDetails="1 order 3 items"
            money="$11.35"
            refund="Potential Refund"
          />
          <AnthIcon style={{position:'absolute',top:width*0.02,left:width*0.04}}/>
        </View>
      </View>

      {/* bottom button */}
      <TouchableOpacity style={styles.button}> 
        <View style={styles.rowDisplay}> 
          <Text style = {styles.starIcon}>{<Group22/>}</Text>
          <Text style={styles.buttonText}>Link Gmail Account</Text>
        </View> 
      </TouchableOpacity>
      
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

  imageWrapper:{
    position: 'absolute',
    top:height*0.4,
    left:width*0.25,
    alignItems: 'center',
  },
//----------------------------------------------------
  bigBox:{
    position:'absolute',
    top:height*0.39,
    left:width*0.05,
    height:height*0.412,
    width:width*0.9,
    borderWidth:1,
    borderColor:'#E3E9EC',
    borderRadius:22,
  },
  items:{
    flex:1,
    borderWidth:1,
    borderBottomColor:'#E3E9EC',
    borderTopColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    flexDirection:'row'
  },

  text1:{
    right:width*0.03,
    position:'absolute',
    bottom:width*0.07,
    color: 'rgba(0,0,0,0.42)',
    fontSize: width*0.025,
    fontFamily: 'Inter',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  text2:{
    position:'absolute',
    bottom:width*0.1,
    left:width*0.25,
    color: 'black',
    fontSize: width*0.04,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  text3:{
    left:width*0.25,
    position:'absolute',
    bottom:width*0.07,
    color: 'rgba(0,0,0,0.42)',
    fontSize: width*0.025,
    fontFamily: 'Inter',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  text4:{
    position:'absolute',
    bottom:width*0.1,
    right:width*0.03,
    color: '#6734F3',
    fontSize: width*0.04,
    fontFamily: 'Inter',
    fontWeight: '500',
    wordWrap: 'break-word'
  },
  
//------------------------------------------
  rowDisplay:{
    flexDirection : 'row',
    alignItems: 'center',
  },
  starIcon:{
    position:'relative',
    top:2,
  },
  button: {
    position: 'absolute',
    bottom: height * 0.05, 
    alignSelf: 'center',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    width:width*0.9,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: width * 0.2, 
  },
  buttonText: {
    color: 'white',
    fontSize: 14.22,
    fontFamily: 'Inter',
    fontWeight: '500',
    wordWrap: 'break-word',
    paddingLeft:5,
  }
  
});

export default PriceAdjustmentHome2;