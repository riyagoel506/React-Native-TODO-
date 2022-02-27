import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export class Todos extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.pressHandler(this.props.item.key)}>
                <View style={styles.item}>
                    <MaterialIcons name='delete' size={18} color='#333' />
                    <Text style={styles.itemC} >{this.props.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Todos

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemC: {
        marginLeft: 10,
    }
})