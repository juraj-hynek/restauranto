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

const ListItem = ({ item, navigation }) => {
  return (
    <View style={styles.item}>
     <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
     <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
     </TouchableOpacity>
    </View>
  );
};

export default function BuildSectionList({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem navigation={navigation} item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Manage ordering',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Create Order',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Accepted Orders',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Manage Stock',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Add Goods to Stock',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'All goods',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Manage Inventory',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Start Inventory',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'History of Inventory',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Waste statistics',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
       color: "#121212",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 120,
    height: 120,
  },
  itemText: {
    color: "#121212",
    fontSize: 13,
    // color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,

  },
});