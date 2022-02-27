import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'


export class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>My Todos</Text>
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 70,
        paddingTop: 30,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }

});