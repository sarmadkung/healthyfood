
import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import Map from './Components/Map';

export const Nutritionist = ()=> {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["bottom","top"]} >
            <View style={[{height: Dimensions.get('screen').height /2 }]} >
                <Map />
            </View>
            <View style={[{padding:'5%' ,height: Dimensions.get('screen').height / 2.7 }]} >
                <Searchbar placeholder="Find Nutrationist" />
                <ScrollView contentContainerStyle={[{paddingBottom:20}]} >

                {
                    [1, 2,3,4,5,6].map(v => {
                        return (
                            <Card style={[{marginTop:10}]} >
                    <Card.Content>
                        <View>
                            <Text style={[{fontWeight:'bold'}]} >Muhammad Sarmad</Text>
                            <Text >I am full stack developer and data scientist!</Text>
                            <View style={[{flexDirection:'row',marginTop:20}]} >
                                <Icon color="green" size={20} name="map-pin" />
                                <Text style={[{marginLeft:20}]} >Gujrat, Pakistan</Text>

                            </View>
                        </View>
                    </Card.Content>
                </Card>
                        )
                    })
                }
                </ScrollView>

            </View>
        </SafeAreaView>
            
    )
}

// import React,{useState} from 'react';
// import MapView ,{ Marker}  from 'react-native-maps';
//  import {StyleSheet,View, Dimensions} from 'react-native';


// export const Nutritionist = () => {
//     const [region, setRegion] = useState({
//      latitude: 51.5079145,
//      longitude: -0.0899163,
//      latitudeDelta: 0.01,
//      longitudeDelta: 0.01
//    });
//    return (
//      <View style={styles.container}>
//        <MapView style={styles.map}
//         region={region}
//          onRegionChangeComplete={region => setRegion(region)}
//         >
//            <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
//         </MapView>
//      </View>
//    );
 
 

// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     flex:1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });
