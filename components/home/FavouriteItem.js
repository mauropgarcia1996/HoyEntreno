import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const FavouriteItem = (params) => {
    return (
        <View style={{marginRight: 10}}>
            <Image source={require("../../assets/el_santo_logo.png")} />
            <Text style={{textAlign: "center", fontSize: 10, fontWeight: "500", marginVertical: 5}}>El Santo</Text>
        </View>
    )
}

export default FavouriteItem