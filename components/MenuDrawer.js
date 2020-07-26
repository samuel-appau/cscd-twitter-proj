import React,{Component} from 'react'
import {StyleSheet,Dimensions,Platform, View,Text,TouchableOpacity,Alert, Button,Image}  from 'react-native'
import {Ionicons,AntDesign,Entypo, Feather,FontAwesome} from  '@expo/vector-icons'
import { Linking } from 'expo';

const WIDTH=Dimensions.get('window').width;

const HEIGHT=Dimensions.get('window').height;

export default class MenuDrawer extends  Component{ 


        state={
            responseJSON:'',
            lastName:'',
            // photo:'http://aby.voting.tk/',
            
             }

     
             componentDidMount(){
                return  fetch('http://abyvoting.tk/profile',{
                    method:"GET",
              
                    })
                  .then((response)=>response.json())
                     .then((responseJSON)=>{
                     Alert.alert(responseJSON.image_icon)
                      this.setState({
                          responseJSON:responseJSON.first_name,
                          lastName:responseJSON.last_name,
                          
                        //  photo:(JSON.stringify(responseJSON.image_icon))
                      })
                
                      
                     })
                     .catch((error)=>{
                       Alert.alert(error)
                     })
                  
                  }
        
        
     url="https://www.linkedin.com/"
     url1="https://www.facebook.com/beitfarms/"
     url2="https://twitter.com/Beitfarms/"

    navLink(nav,text){
        return(
            <TouchableOpacity  style={{height:40,}} onPress={()=>this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
render(){
    return(
     <View  style={styles.container}>
         <View style={{backgroundColor:'#000',height:140}}>
          <View  style={{flexDirection:'row'}}>
            
                   <FontAwesome  name="user-circle"  size={90} color="white" style={{borderRadius:40,height:96,marginLeft:8,width:96,marginTop:34}}/>  

                   {/* <Image  source={{uri:this.state.photo}}   style={{borderRadius:42,height:89,width:89,marginTop:34}}  />   */}
               
               
           
           <Text style={{paddingTop:40,color:"white",marginTop:14,fontSize:22,marginLeft:17,fontWeight:'bold'}}>DUAPA APP</Text>
        
        </View>
         <View style={{borderRadius:8,width:100,height:140,borderWidth:1,borderWidthColor:'#fff',marginLeft:90,marginTop:-29}}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',fontSize:18,color:'white',marginLeft:14}}>{this.state.responseJSON}  </Text>
                <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{this.state.lastName}</Text>
            </View> 
            </View>
       
        </View>
       
        <View style={{backgroundColor:'#fff'}}>
        <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:4}}>
         <Ionicons name="ios-home" size={26} style={{marginLeft:14}}/>
         </View>
         <View style={{flex:14}}>
           {this.navLink('Home','Home')} 
        </View>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:4}}>
         <Feather name="user" size={26} style={{marginLeft:14}}/>
         </View>
         <View style={{flex:14}} >
         {this.navLink('Account','Account')}
        </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:4}}>
         <Ionicons name="ios-notifications" size={26} style={{marginLeft:16}}/>
         </View>
         <View style={{flex:14}}>
         {this.navLink('Notification','Notification')}
        </View>
        </View>
        </TouchableOpacity>
        
        
        <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:4}}>
         <Entypo name="help-with-circle" size={26} style={{marginLeft:16}}/>
         </View>
         <View style={{flex:14}}>
         {this.navLink('Help','Help')}
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:4}}>
         <AntDesign name="logout" size={26} color="black" style={{marginLeft:16}} />

         </View>
         <View style={{flex:14}}>
         {this.navLink('Logout','Logout')}
        </View>
        </View>
        </TouchableOpacity>

       

       
        </View>

        <View style={{height:80,marginTopWidth:1,flexDirection:'row',marginTop:207,borderWidthColor:'black',backgroundColor:'black' }}>
        <TouchableOpacity onPress={() => Linking.openURL(this.url)}>
        <AntDesign name="linkedin-square" size={24} color="white" style={{marginLeft:100,marginTop:10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(this.url1)}>
        <Entypo name="facebook-with-circle" size={24} color="white" style={{marginLeft:20,marginTop:10}}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(this.url2)}>
        <FontAwesome name="twitter-square" color="white" size={24} style={{marginLeft:20,marginTop:10}} />
        </TouchableOpacity>
        </View>
    
    </View>
    )
}
   

}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    topLink:{
        height:140,
        backgroundColor:"#000",
        flexDirection:'row',
        

    },

    link:{
        
        fontSize:18,
        marginLeft:10,
        margin:5,
        textAlign:'left'
    }
})