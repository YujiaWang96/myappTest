import React from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity,TextInput} from 'react-native';
import FilterIcon from './assets/images/pageRefundHistory/FilterIcon.svg';
import SearchIcon from './assets/images/pageRefundHistory/SearchIcon.svg';
import BackIcon from './assets/images/pageRefundHistory/BackIcon.svg';
import InfoIcon from './assets/images/pageRefundHistory/InfoIcon.svg';
import TargetIcon from './assets/images/pageRefundHistory/TargetIcon.svg';
import ZaraIcon from './assets/images/pageRefundHistory/ZaraIcon.svg';
import AnthIcon from './assets/images/pageRefundHistory/AnthIcon.svg';
import SephoraIcon from './assets/images/pageRefundHistory/SephoraIcon.svg';

const { width, height } = Dimensions.get('window');

const ItemContent = ({ date,
  method,
  amount,
  storeName,
  orderDetails,
  status,
  text6Color,
   }) => {
    
    return (
      <>
        <View style={styles.topBox}>
          <Text style={styles.text1}>{date}</Text>
          <Text style={styles.text2}>{method}</Text>
          <Text style={styles.text3}>{amount}</Text>
        </View>
        <View style={styles.bottomBox}>
          
          <Text style={styles.text4}>{storeName}</Text>
          <Text style={styles.text5}>{orderDetails}</Text>
          <Text style={styles.text6}>{status}</Text>
          <Text style={[styles.text6, { color: text6Color || '#6734F3' }]}>{status}</Text>
        </View>
      </>
    );
};

const RefundHistory = () => {
  return (
    <View style={styles.container}>
      {/* back & info */}
      <View style={styles.backAndInfo}>
        <TouchableOpacity>
          <BackIcon/>
        </TouchableOpacity>
        <TouchableOpacity style={{position:'absolute',right:0,bottom:0}}>
          <InfoIcon/>
        </TouchableOpacity>
      </View>
      {/* history and saved money section */}
      <View style={styles.historySummary}>
        <Text style={styles.history}>History</Text>
        <Text style={styles.money}>$236.83</Text>
        <Text style={styles.items15}>15 Items</Text>
        <Text style={styles.totalSaving}>Total savings</Text>
      </View>
      
      {/* 2 toggle buttons */}
      <View style={styles.toggleWrapper}>
        <TouchableOpacity
          style={styles.eligibleItemsButton}
          onPress={() => { console.log("Eligible Items clicked"); }} 
        >
          <Text style={styles.toggleButtonText}>Price Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pendingButton}
          onPress={() => { console.log("Pending clicked"); }} 
        >
          <Text style={styles.toggleButtonText}>Refunds</Text>
        </TouchableOpacity>
      </View>

       {/*  fliter & search box*/}
      <View style={styles.filterSearch}>
        <TouchableOpacity style={styles.filterButton}>
          <FilterIcon/>
          <Text Style={{fontSize:11, color:'#363644'}}>{' Filter'}</Text>
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <SearchIcon style={styles.searchIcon}/>
          <TextInput style={styles.textInput} defaultValue='Search price matches'>
          </TextInput>
        </View>
      </View>

      {/*  4 items */}
      <View style={styles.itemsBox}>
        <View style={styles.items}>
          <ItemContent 
            date="February 14, 2024"
            method="Auto"
            amount="+$119.35"
            storeName="Target"
            orderDetails="2 order 7 items"
            status="Completed"
            text6Color="#6734F3" 
          />
          <TargetIcon style={{bottom:width*0.16,left:width*0.08}}/>
        </View>
        <View style={styles.items}>
          <ItemContent 
            date="February 14, 2024" 
            method="Maunal" 
            amount="+$100.35" 
            storeName="ZARA" 
            orderDetails="1 order 3 items" 
            status="Completed"
            text6Color="#6734F3" 
          />
          <ZaraIcon style={{bottom:width*0.2,left:width*0.05}}/>
        </View>
        <View style={styles.items}>
          <ItemContent 
            date="February 14, 2024" 
            method="Auto" 
            amount="+$52.35" 
            storeName="Sephora" 
            orderDetails="3 order 4 items" 
            status="Completed"
            text6Color="#6734F3" 
          />
          <SephoraIcon style={{bottom:width*0.2,left:width*0.05}}/>
        </View>
        <View style={styles.items}>
          <ItemContent width={width*0.2} height={height*0.2}
            date="February 14, 2024" 
            method="Auto" 
            amount="+$119.35" 
            storeName="Anthropologies" 
            orderDetails="2 order 2 items" 
            status="Failed"
            text6Color="#FF2E2C" 
          />
          <AnthIcon style={{bottom:width*0.2,left:width*0.05}}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
//---------------------------------------------
  backAndInfo:{
    position: 'absolute',
    width: width*0.9,
    height: height*0.02,
    left: width*0.05,
    top: height*0.08,
    flexDirection:'row',
  },
//----------------------------------------------
  historySummary: {
    position: 'absolute',
    width: width*0.9,
    height: height*0.065,
    left: width*0.05,
    top: height*0.12,
    justifyContent: 'center',
    padding: 20,
  },
  history: {
    position:'absolute',
    color: 'black',
    top:2,
    fontSize: width*0.07,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  money: {
    position:'absolute',
    right:0,
    top:2,
    color: 'black',
    fontSize: width*0.07,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  items15: {
    position:'absolute',
    bottom:2,
    color: '#6A6A6A',
    fontSize: width*0.03,
    fontFamily: 'Inter',
    fontWeight: '500',
    wordWrap: 'break-word',
  },
  totalSaving: {
    position:'absolute',
    right:0,
    bottom:2,
    color: '#6A6A6A',
    fontSize: width*0.03,
    fontFamily: 'Inter',
    fontWeight: '500',
    wordWrap: 'break-word',
  },
//-------------------------------------------
  toggleWrapper: {
    position: 'absolute',
    width: width*0.9,
    height: height*0.04,
    left: 20,
    top: height*0.2,
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
//--------------------------------------
  filterSearch:{
    position: 'absolute',
    width: width*0.9,
    height: height*0.03,
    left: 20,
    top: height*0.25,
    borderRadius:5,
    flexDirection: 'row',
  },
  filterButton:{
    flex:1,
    borderRadius:5,
    backgroundColor:'#EEEEEE',
    marginRight:8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox:{
    color:'#363644',
    flex:5,
    borderRadius:5,
    backgroundColor:'#EEEEEE',
    flexDirection:'row',
    alignItems:'center'
  },
  searchIcon:{
    position:'absolute',
    top:7,
    left:8,
  },
  textInput:{
    paddingLeft:25,
    fontSize:11,
    color:'#363644',
  },
// --------------------------------------
  itemsBox:{
    position:'absolute',
    bottom:20,
    left:width*0.05,
    flex:1,
    marginBottom:width*0.02,
    alignItems:'center',
  },
  items: {
    width:width*0.9,
    height:height*0.16,
    backgroundColor:'white',
    borderRadius:'20',
    borderWidth:2,
    borderColor:'#E3E9EC',
    marginTop:8,
  },
  topBox:{
    borderWidth:2,
    height:height*0.053,
    borderLeftColor: 'transparent', 
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor:'#E3E9EC',
  },
  text1:{
    top:5,
    left:12,
    color: 'black',
    fontSize: width*0.03,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  text2:{
    left:12,
    top:6,
    color: 'rgba(0;0;0;0.5)',
    fontSize: width*0.025,
    fontFamily: 'Inter',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  text3:{
    left:width*0.68,
    bottom:width*0.04,
    color: '#6734F3',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word'
  },
  bottomBox:{
    height:height*0.1,
    justifyContent:'center',
  },
  text4:{
    position:'absolute',
    bottom:width*0.1,
    left:width*0.25,
    color: 'black',
    fontSize: width*0.03,
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  text5:{
    left:width*0.25,
    position:'absolute',
    bottom:width*0.07,
    color: 'rgba(0;0;0;0.42)',
    fontSize: width*0.025,
    fontFamily: 'Inter',
    fontWeight: '400',
    wordWrap: 'break-word'
  },
  text6:{
    position:'absolute',
    bottom:width*0.08,
    right:width*0.03,
    color: '#6734F3',
    fontSize: width*0.04,
    fontFamily: 'Inter',
    fontWeight: '500',
    wordWrap: 'break-word'
  },

});

export default RefundHistory;