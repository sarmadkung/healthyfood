


import React from 'react';
import { View, Text, SafeAreaView , CheckBox } from 'react-native';
import {Appbar , Headline , Searchbar} from 'react-native-paper';
import {Container, Header, Title, Content, Footer, Footertab, Button, Left, Body, Right, Icon} from 'react-native';
import styles from '../../../../styles';
import { render } from 'react-dom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fruits from './Fruits';





export const Ingredients = () => {


    return (

        <SafeAreaView style={[styles.flex]}  edges={["top"]}>
         <Appbar style={[styles.phc_5]} >
             <View>
                 <Headline style={[{color:'white'}]} >Ingredients Based Recipes</Headline>
               </View>
                
           </Appbar>
           <View style={[{paddingHorizontal:'5%'}]}>
                  
                   <Searchbar style={[{marginTop:20}]} placeholder="Type your ingredients?"></Searchbar>
                   </View>
          </SafeAreaView>
     
    )
}










// import React from 'react';
// import { View } from 'react-native';
// import Icon from 'react-native-vector-icons';
// import SectionedMultiSelect from 'react-native-sectioned-multi-select';




// export default class ingrediet extends Component {
//     constructor() {
//       super();
//       this.state = {
//         selectedItems: [],
//       };
//     }
//     onSelectedItemsChange = (selectedItems) => {
//       this.setState({ selectedItems });
//     };
   
//     render() {
//       return (
//         <View>
//           <SectionedMultiSelect
//             items={items}
//             IconRenderer={Icon}
//             uniqueKey="id"
//             subKey="children"
//             selectText="Choose some things..."
//             showDropDowns={true}
//             readOnlyHeadings={true}
//             onSelectedItemsChange={this.onSelectedItemsChange}
//             selectedItems={this.state.selectedItems}
//           />
//         </View>
//       );
//     }
//   }