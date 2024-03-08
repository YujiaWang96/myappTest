import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Group22 from './assets/images/pageLinkGmailAccount/Group22.svg';
import LinkGmailAccountIcons from './assets/images/pageLinkGmailAccount/LinkGmailAccountIcons.svg';

// Get the device's width and height
const { width, height } = Dimensions.get('window');

const LinkGmailAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
       <LinkGmailAccountIcons/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Automated Price Adjustments</Text>
        <Text style={styles.subtitle}>
          Connect your Gmail to allow us to automatically track price drops via e-receipts in your inbox.
        </Text>
      </View>
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
  imageWrapper:{
    position: 'absolute',
    top:height*0.2,
    left:width*0.13,
  },
  textWrapper: {
    position: 'absolute',
    top: height * 0.6, 
    left: width * 0.1,
    width: width * 0.8, 
    height:height * 0.09,
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
    fontSize: 21.8, 
    fontFamily: 'Inter',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  subtitle: {
    marginTop:10,
    width: width * 0.8, 
    textAlign: 'center',
    color: '#4D4D4D',
    fontSize: 17.51, 
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 21, 
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

export default LinkGmailAccount;
