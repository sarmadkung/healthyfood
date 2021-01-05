import React from 'react';
import { useState } from 'react';
import { View, Text  } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';
export const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={[styles.flex, styles.phc_5, styles.justify_center]} >
            <TextInput
                label="Email"
                value={email}
                dense
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Password"
                style={[styles.mt_20]}

                value={password}
                dense
                onChangeText={text => setPassword(text)}
            />
            <Button
                onPress={()=> navigation.navigate('Tab')}
                dark
                style={[styles.mt_30]}
            mode="contained"
            >
                Login
        </Button>
            {/* <Button
                onPress={()=> navigation.navigate('Signup') }
                dark
                style={[styles.mt_30]}
                       
            mode="Text"
            >
                Signup
        </Button> */}
        </SafeAreaView>
    )
}