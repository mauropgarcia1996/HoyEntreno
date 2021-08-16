import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ScheduleItem = params => {
  return (
    <View style={styles.itemContainer}>
      <LinearGradient
        colors={['#1D61EF', '#19D5FD']}
        style={styles.scheduleItem}>
        <Text
          style={styles.itemTimeText}>
          13:00h
        </Text>
        <View>
          <Text
            style={styles.itemClassText}>
            Zumba Class
          </Text>
          <Text style={styles.itemPlaceText}>
            El Santo
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginVertical: 10,
  },
  itemTimeText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  itemClassText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  itemPlaceText: {color: 'white', fontSize: 12, textAlign: 'center'},
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

export default ScheduleItem;
