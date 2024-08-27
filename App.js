import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

const App = () => {
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false,
  });

  const handleToggle = (toggleKey) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [toggleKey]: !prevToggles[toggleKey],
    }));
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>{'<'}</Text>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.iconContainer}>
            <FontAwesome name="comments-o" size={20} />
            <View style={styles.redCircle} />
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="shopping-basket" size={18} />
            <View style={styles.redCircle} />
          </View>
        </View>
      </View>

      <View style={styles.notificationHeader}>
        <Text style={styles.notificationTitle}>Notification Settings</Text>
        <Text style={styles.notificationSubtitle}>
          These are the most important settings
        </Text>
      </View>

      {[
        { label: 'Someone mentions me', key: 'toggle1' },
        { label: 'Anyone follows me', key: 'toggle2' },
        { label: 'Someone comments me', key: 'toggle3' },
        { label: 'A seller follows me', key: 'toggle4' },
      ].map(({ label, key }) => (
        <View key={key} style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>{label}</Text>
          <ToggleSwitch
            isOn={toggles[key]}
            onColor="purple"
            offColor="gray"
            size="medium"
            onToggle={() => handleToggle(key)}
          />
        </View>
      ))}

      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    color: 'black',
  },
  headerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginLeft: 10,

  },
  headerRight:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:17,
  },
  iconContainer:{
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCircle:{
    position: 'absolute',
    top: -3,
    right: -1,
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor:'red',
  },
  notificationHeader:{
    marginTop:10,
    // paddingHorizontal:15,
    
  },
  notificationTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  notificationSubtitle:{
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  toggleRow:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical:14,
    paddingHorizontal:15,
  },
  toggleLabel:{
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  }

});

export default App;