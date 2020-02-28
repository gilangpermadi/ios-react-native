import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.rectangle}></View>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.topBarSection}>
              <View style={{flex: 1}}>
                <TextInput placeholder='Find Something...' style={styles.searchBox}/>
                <Image style={{position: 'absolute', top: 8, left: 10}} source={require('./src/icon/search.png')}/>
              </View>
              <View style={styles.iconBox}>
                <Image style={styles.discIcon} source={require('./src/icon/promo.png')}/>
              </View>
            </View>
          </View>
          <View style={styles.headFeature}>
            <Image source={require('./src/icon/pay.png')}/>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Rp50.000</Text>
          </View>
          <View style={styles.payFeature}>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <Image style={{}} source={require('./src/icon/pay.png')}/>
              <Text>Pay</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <Image style={{}} source={require('./src/icon/nearby.png')}/>
              <Text>Nearby</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <Image style={{}} source={require('./src/icon/topup.png')}/>
              <Text>Topup</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <Image style={{}} source={require('./src/icon/more.png')}/>
              <Text>More</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.navigation}>
          <View style={styles.tabs}>
            <View style={styles.tabsIcon}>
              <Image source={require('./src/icon/home-active.png')}/>
            </View>
            <Text style={styles.tabsTextActive}>
              Home
            </Text>
          </View>
          <View style={styles.tabs}>
            <View style={styles.tabsIcon}>
              <Image style source={require('./src/icon/order.png')}/>
            </View>
            <Text style={styles.tabsText}>
              Orders
            </Text>
          </View>
          <View style={styles.tabs}>
            <View style={styles.tabsIcon}>
              <Image style source={require('./src/icon/help.png')}/>
            </View>
            <Text style={styles.tabsText}>
              Help
            </Text>
          </View>
          <View style={styles.tabs}>
            <View style={styles.tabsIcon}>
              <Image style source={require('./src/icon/inbox.png')}/>
            </View>
            <Text style={styles.tabsText}>
              Inbox
            </Text>
          </View>
          <View style={styles.tabs}>
            <View style={styles.tabsIcon}>
              <Image style source={require('./src/icon/account.png')}/>
            </View>
            <Text style={styles.tabsText}>
              Account
            </Text>
          </View>
        </View>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  rectangle: {
    height: 22,
    color: 'white',
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation: {
    height: 54,
    flexDirection: 'row'
  },
  tabs: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabsIcon: {
    height: 26,
    width: 26
  },
  tabsText: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
    fontWeight: 'bold'
  },
  tabsTextActive: {
    fontSize: 10,
    color: '#43AB4A',
    marginTop: 4,
    fontWeight: 'bold'
  },
  topBarSection: {
    position: 'relative',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 40,
    borderRadius: 25,
    fontSize: 13,
    paddingLeft: 45,
    marginRight: 18
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    top: 10,
    backgroundColor: '#2C5FB8',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
    alignItems: 'center'
  },
  payFeature: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#2C5FB8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});