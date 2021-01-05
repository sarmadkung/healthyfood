import React from 'react';
import { useState } from 'react';
import { CheckBox,View, Text  } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';
export const Signup = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <SafeAreaView style={[styles.flex, styles.phc_5, styles.justify_center]} >
            <TextInput
                label="First Name"
                value={firstName}
                dense
                onChangeText={text => setFirstName(text)}
            />
             <TextInput
                label="Last Name"
                value={lastName}
                dense
                onChangeText={text => setLastName(text)}
            />

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

            <TextInput
                label="Re-enter Password"
                style={[styles.mt_20]}

                value={password}
                dense
                onChangeText={text => setPassword(text)}
            />



            <Button
             onPress={()=> navigation.navigate('Tab') }
                dark
                style={[styles.mt_30]}
            mode="contained"
            >
                Signup
        </Button>
            
        </SafeAreaView>
    )
}
