import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<your_project_id>.supabase.co';
const supabaseKey = '<your_supabase_api_key>';

const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await supabase.from('todos').select('*');
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!newTodo) return;
    const { data, error } = await supabase.from('todos').insert({ task: newTodo });
    if (error) {
      console.log(error);
    } else {
      setTodos([...todos, data[0]]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = async (id) => {
    const { error } = await supabase.from('todos').delete().match({ id });
    if (error) {
      console.log(error);
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleEditTodo = async (id, task) => {
    const { error } = await supabase.from('todos').update({ task }).match({ id });
    if (error) {
      console.log(error);
    } else {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, task };
          } else {
            return todo;
          }
        })
      );
    }
  };

  const renderItem = ({ item }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(item.task);

    const handleSaveEdit = () => {
      handleEditTodo(item.id, updatedTask);
      setIsEditing(false);
    };

    return (
      <View style={styles.todo}>
        {isEditing ? (
          <TextInput style={styles.input} value={updatedTask} onChangeText={setUpdatedTask} />
        ) : (
          <Text style={styles.task}>{item.task}</Text>
        )}
        <View style={styles.buttons}>
          {isEditing ? (
            <Button title="Save" onPress={handleSaveEdit} />
          ) : (
            <>
              <Button title="Edit" onPress={() => setIsEditing(true)} />
              <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} value={newTodo} onChangeText={setNewTodo} />
        <Button title="Add" onPress={handleAddTodo} />
      </View>
      <FlatList data={todos} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
})
