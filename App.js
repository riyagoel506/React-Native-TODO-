import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Alert, Keyboard, } from 'react-native';
import AppTodo from './components/appTodo';
import Header from './components/header';
import Todos from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { name: 'Buy coffee', key: '1' },
    { name: 'Create an app', key: '2' },
    { name: 'Play on the switch', key: '3' },
    { name: 'Go to Shopping', key: '4' },
    { name: 'Read the Books', key: '5' },
  ])
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const addList = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { name: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }
    else {
      Alert.alert("OOPS..!", "Please enter atleast 4 letters")
    }
  }
  return (

    // TouchableWithoutFeedback is used to dismiss the keyboard
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AppTodo addList={addList} />
          <View style={styles.list}>

            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todos item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
