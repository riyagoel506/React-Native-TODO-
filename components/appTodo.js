import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native';


export class AppTodo extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
        }
    }
    changeHandler = (val) => {
        this.setState({ text: val })
    }
    render() {
        let text = this.state.text
        return (
            <View>
                <TextInput placeholder='Add new Todo' onChangeText={this.changeHandler} style={styles.input} />
                <Button title='add todo' color='coral' onPress={() => this.props.addList(text)} />
            </View>
        )
    }
}

export default AppTodo

const styles = StyleSheet.create({
    PictureInPictureWindow: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})