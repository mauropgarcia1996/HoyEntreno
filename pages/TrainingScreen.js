import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

const TrainingScreen = (params) => {
    return (
        <>
        <ScrollView>
            <View style={styles.searchBox}>
                <TextInput />
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        borderWidth: 3,
        borderColor: "#5856D6",
        borderRadius: 20,
        height: 40
    }
})

export default TrainingScreen