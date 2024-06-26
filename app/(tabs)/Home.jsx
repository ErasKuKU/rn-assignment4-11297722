import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, ScrollView} from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <SafeAreaView style={styles.box}>
       <StatusBar style="auto" />
      <View style={styles.profileContainer}>
        <View style={styles.profileContainer2}>
        <View style={styles.profileBox}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.profile}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text1}>Welcome Back</Text>
          <Text style={styles.text2}>Erasmus Mensah</Text>
        </View>
        </View>
         <View style={styles.elipse}>
          <Image  source={require('../../assets/search.png')}
          style={styles.search}/>
         </View>
         
      </View>
      <View style={styles.cardBox}>
        <Image   source={require('../../assets/Card.png')}
          style={styles.card}/>
      </View>
      <View style={styles.button}>
      <View style={styles.buttonBox}>
        <Image   source={require('../../assets/send.png')}
          style={styles.sends}/>
      </View>

      <View style={styles.buttonBox}>
        <Image   source={require('../../assets/recieve.png')}
          style={styles.sends}/>
      </View>
      
      <View style={styles.buttonBox}>
        <Image   source={require('../../assets/loan.png')}
          style={styles.send}/>
      </View>

      <View style={styles.buttonBox}>
        <Image   source={require('../../assets/topUp.png')}
          style={styles.send}/>
      </View>
    
      </View>
      <View style={styles.transaction}>
        <View><Text style={styles.text3}>Transaction</Text></View>
        <View><Text style={styles.text4}>See All</Text></View>
      </View>
      <ScrollView style={styles.scroll}>
        <Pressable style={styles.Pressable}>
          <View style={styles.Pressable2}>
            <View style={styles.apple}>
            <Image   source={require('../../assets/apple.png')}
          style={styles.appleImg}/>
            </View>
            <View>
              <Text style={styles.text5}>Apple Store</Text>
              <Text style={styles.text6}>Entertainment</Text>
            </View>
          </View>
          <View><Text style={styles.text7}>- $599</Text></View>
        </Pressable>

        <Pressable style={styles.Pressable}>
          <View style={styles.Pressable2}>
            <View style={styles.apple}>
            <Image   source={require('../../assets/spotify.png')}
          style={styles.appleImg}/>
            </View>
            <View>
              <Text style={styles.text5}>Spotify</Text>
              <Text style={styles.text6}>Music</Text>
            </View>
          </View>
          <View><Text style={styles.text7}>- $12,99</Text></View>
        </Pressable>

        <Pressable style={styles.Pressable}>
          <View style={styles.Pressable2}>
            <View style={styles.apple}>
            <Image   source={require('../../assets/moneyTransfer.png')}
          style={styles.appleImg}/>
            </View>
            <View>
              <Text style={styles.text5}>Money Transfer</Text>
              <Text style={styles.text6}>Transaction</Text>
            </View>
          </View>
          <View><Text style={styles.text7}>- $300</Text></View>
        </Pressable>

        <Pressable style={styles.Pressable}>
          <View style={styles.Pressable2}>
            <View style={styles.apple}>
            <Image   source={require('../../assets/grocery.png')}
          style={styles.appleImg}/>
            </View>
            <View>
              <Text style={styles.text5}>Apple Store</Text>
              <Text style={styles.text6}>Entertainment</Text>
            </View>
          </View>
          <View><Text style={styles.text7}>- $88</Text></View>
        </Pressable>

      </ScrollView>        
    </SafeAreaView>
  )
}

export default Home



const styles = StyleSheet.create({
  
      box:{
        marginHorizontal: 15
      },
      profileContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      profileContainer2:{
        flexDirection: 'row'
      },
      text1:{
        marginTop: 3,
        marginLeft: 7,
        color: 'grey'
      },
      text2:{
        marginTop:8,
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 7
      },
      search:{
        width:20,
        height:20,
        marginTop:9,
        marginLeft:8
      },
      elipse:{
        height:39,
        width: 39,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        marginTop: 6
      },
      cardBox:{
        marginTop: 40
      },
      card:{

      },
      button:{
        flexDirection:'row',
        marginTop:20,
        justifyContent: 'space-between',
        marginHorizontal: 6
        
      },
      buttonBox:{
        height:50,
        width:50,
        backgroundColor:'#D3D3D3',
        borderRadius: 25
      },
      send:{
        marginTop: 10,
        marginLeft: 13
      },
      sends:{
        marginTop: 12,
        marginLeft: 16
      },
      transaction:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      },
      text3:{
        fontSize: 20,
        fontWeight: '700'
      },
      text4:{
        color:'blue',
        fontSize: 18,
        fontWeight: '600'
      },
      Pressable:{
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      Pressable2:{
        flexDirection: 'row'
      },
      apple:{
        height:50,
        width:50,
        backgroundColor:'#D3D3D3',
        borderRadius: 24,
        marginTop: 16
      },
      appleImg:{
        marginTop:15,
        marginLeft: 17
      },
      text5:{
        marginTop:20,
        marginLeft: 5,
        fontSize: 20,
        fontWeight:'700'
      },
      text6:{
        marginBottom:10,
        marginLeft: 5,
        color: 'grey'

      },
      text7:{
        marginTop:22,
        fontSize: 28,
        fontWeight:'600'
      },
      scroll:{
        height:300
      }






})