import React from 'react';
import { View, Text,StyleSheet, FlatList} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Appbar, Headline, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';
import { Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export const Home  = () => {
  
    // const [items, setItems] = React.useState([
    
    //     { name: 'TURQUOISE', code: '#1abc9c'  },
    //     { name: 'EMERALD', code: '#2ecc71' },
    //     { name: 'PETER RIVER', code: '#3498db' },
    //     { name: 'AMETHYST', code: '#9b59b6' },
    //     { name: 'WET ASPHALT', code: '#34495e' },
    //     { name: 'GREEN SEA', code: '#16a085' },
    //     { name: 'NEPHRITIS', code: '#27ae60' },
    //     { name: 'BELIZE HOLE', code: '#2980b9' },
    //     { name: 'WISTERIA', code: '#8e44ad' },
    //     { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    //     { name: 'SUN FLOWER', code: '#f1c40f' },
    //     { name: 'CARROT', code: '#e67e22' },
    //     { name: 'ALIZARIN', code: '#e74c3c' },
    //     { name: 'CLOUDS', code: '#ecf0f1' },
    //     { name: 'CONCRETE', code: '#95a5a6' },
    //     { name: 'ORANGE', code: '#f39c12' },
    //     { name: 'PUMPKIN', code: '#d35400' },
    //     { name: 'POMEGRANATE', code: '#c0392b' },
    //     { name: 'SILVER', code: '#bdc3c7' },
    //     { name: 'ASBESTOS', code: '#7f8c8d' },
        
    //   ]);
      
    return (
        <SafeAreaView>
         <Appbar style={[styles.phc_5]} >
                <View>
                    <Headline style={[{color:'white'}]} >Healthy Cooking</Headline>
                </View>
            </Appbar>
                <View style={[{paddingHorizontal:'5%'}]}>
                    <Text style={[{marginTop:20},styles.title]}>What would you like to cook?</Text>
              
                    <Searchbar style={[{marginTop:20}]} placeholder="Search"  />
                    
                </View>
        
                  {/* <View style={{flex:1}}>
                 
                    <FlatGrid itemDimension={130} data={items}  style={styles.gridView}
    
                      //fixed
                      spacing={10}
                    
                      renderItem={({ item }) => (
                        
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                          <Text style={styles.itemName}>{item.name}</Text>
                          <Text style={styles.itemCode}>{item.code}</Text>
                        </View>
                      
                      )}
                    /> */}
{/* 
                  </View> */}
        
        </SafeAreaView>
    )
}

 
