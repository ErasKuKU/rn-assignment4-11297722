import { Pressable, SafeAreaView, StyleSheet, Text, View , Switch} from 'react-native'
import React, { useState } from 'react'


const Settings = ()=>{
 
    return (
      <SafeAreaView>
      <View style={styles.Settings}>
        <Text style={styles.settingsText1} >Settings</Text>
      </View>
      <View style={styles.box}>
      <Pressable style={styles.p1}>
        <Text style={styles.settingsText}>Language</Text>
      </Pressable>

      <Pressable style={styles.p1}>
        <Text style={styles.settingsText}>My Profile</Text>
      </Pressable>

      <Pressable style={styles.p1}>
        <Text style={styles.settingsText}>Contact Us</Text>
      </Pressable>

      <Pressable style={styles.p1}>
        <Text style={styles.settingsText}>Change Password</Text>
      </Pressable>

      <Pressable style={styles.p1}>
        <Text style={styles.settingsText}>Privacy policy</Text>
      </Pressable>
      </View>
       
       <View style={styles.themeBox}>
        <View><Text style={styles.themeText}>Theme</Text></View>
        <View>
        <Switch
          style={styles.toggleSwitch}
          
        />
        </View>
       </View>
      </SafeAreaView>
    )
  }

  export default Settings



  const styles = StyleSheet.create({
    Settings:{
     alignItems: 'center',
     marginTop: 20
    },
    settingsText1:{
      fontSize: 30,
      fontWeight: '600'
    },
    p1:{
      height:70,
      borderBottomWidth: 0.5
    },
    box:{
      marginTop: 19
    },
    settingsText:{
      marginTop: 24,
      marginLeft: 10
    },
    themeBox:{
      marginTop: 40,
      marginLeft: 10,
      justifyContent: 'space-between',
      flexDirection: 'row'

    },
    themeText:{
      fontSize: 20,
      fontWeight: '700'
    },
    toggleSwitch: {
      transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
      marginRight: 14
    },
    
  })