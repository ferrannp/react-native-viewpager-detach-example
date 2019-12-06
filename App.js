/**
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ViewPager from '@react-native-community/viewpager';

class HomeScreen extends React.Component {
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={[styles.container, styles.page1]} key="1">
          <Text>First page</Text>
        </View>
        <View style={[styles.container, styles.page2]} key="2">
          <Text>Second page</Text>
        </View>
      </ViewPager>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    backgroundColor: 'lightblue',
  },
  page2: {
    backgroundColor: 'lightgreen',
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
