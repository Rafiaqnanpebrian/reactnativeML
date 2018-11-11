import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
    title: 'Login',
  };
    render() {
      return (
          <View style={styles.container}>
            <Image  style={{width:80, height: 80}}
             source={require('../Components/ts.png')}/>
            <Text style={tulisan.judul}>STEMATEL</Text>
            <Text style={tulisan.judul}></Text>
            <Text style={tulisan.judul}></Text>
            <Text style={tulisan.judul}></Text>
            <TextInput
                style = {styles.inputBox}
                placeholder="Telepon / Email"
            />
            <TextInput
                style = {styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
            />
                <Button
                onPress ={() =>{this.props.navigation.navigate('Judul')}}
                style ={styles.button}
                title=" Login "
                color="black"
                />
            </View>

        )
    }
}
const tulisan = {
    judul : {
        color : "#000000",
        fontSize : 25,
        fontWeight : 'bold',
    }
}
const styles = StyleSheet.create({
    container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#FFFFFF'
	},

	inputBox:{
		width: 250,
		fontSize: 16,
		color: '#000000'
    },
    button: {
        width: 250,
		height: 40,
		alignItems: 'center',
		backgroundColor: '#3B5998',
		marginVertical: 10,
		paddingHorizontal: 60,
        flexDirection : 'row', 
        justifyContent : 'space-between'
    }
});