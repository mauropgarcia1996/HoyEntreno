import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ScheduleItem from '../components/home/ScheduleItem';
import FavouriteItem from '../components/home/FavouriteItem';

const HomeScreen = params => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textBase}>
            Con ganas de descubrir algo nuevo?
          </Text>
          <View style={styles.hStack}>
            {[0, 1, 2].map(e => (
              <View style={styles.item}></View>
            ))}
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <Text style={styles.textHeading}>Agenda</Text>
          <View>
            {[0, 1, 2].map(e => (
              <ScheduleItem />
            ))}
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <Text style={styles.textHeading}>Favoritos</Text>
          <Text style={styles.subtitle}>Lugares que disfrutas</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 20
            }}>
            <FlatList
              data={[0, 1, 2, 3, 4, 5, 6]}
              horizontal={true}
              renderItem={FavouriteItem}
              keyExtractor={item => item}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E46A59',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  textBase: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
  },
  textHeading: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 54,
  },
  subtitle: {
    color: '#8E8E93',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
  },
  hStack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  item: {
    height: 50,
    width: 100,
    backgroundColor: '#FFE8E8',
    borderRadius: 5,
  },
  scheduleItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '75%',
    borderRadius: 10,
  },
});

export default HomeScreen;
