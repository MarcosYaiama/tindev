import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    StyleSheet,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native'

import api from '../services/api'
import logo from '../assets/logo.png'
export default function Login({navigation}){
    const [user, setUser] = useState('');

    async function handleLogin() {
        const response = await api.post('/devs', { username:user});

        const { _id } = response.data;
        
        await AsyncStorage.setItem('user', _id); // Só aceita o 2 como String ou numérico
        
        navigation.navigate('Main', {user: _id});
    }
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuario do GitHub"
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
             />
             <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Enviar</Text>
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    input:{
        height: 46,
        alignSelf:'stretch', //Ocupa toda a largura possivel
        backgroundColor: '#FFF', 
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal:15,   //Padding do texto do input 
    }, 
    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor:'#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16,
    }

});