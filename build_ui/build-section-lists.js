import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Card, CardConent, CardHeader, CardSubtitle, CardTitle } from './build_card';


// const ListItem = ({ item, navigation }) => {
//   return (
//     <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
//     <Card style={{
//       width: 155,
//       marginRight: 8,
//       marginBottom: 28,
//       flex:1,
//       borderWidth:0
    
//     }}>
//      <Image
//         source={{
//           uri: item.uri,
//         }}
//         style={styles.itemPhoto}
//         resizeMode="cover"
//       />
//       <CardHeader>
//         <CardTitle>
//           {item.text}
//         </CardTitle>
//         <CardSubtitle>
//           {item.text}
//         </CardSubtitle>
//       </CardHeader>
//       </Card>
//      </TouchableOpacity>
   
//   );
// };

export default function BuildSectionList({navigation,  listDataWithSections= [],renderItem= ()=> null}) {
  return (
    <View style={styles.container}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={listDataWithSections}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => renderItem(item)}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return renderItem(item);
          }}
        />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
  },
  itemPhoto: {
    width: null,
    height: 120,
  },
});