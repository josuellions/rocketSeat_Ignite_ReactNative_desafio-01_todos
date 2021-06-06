import { O_RDONLY } from 'constants';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle !== '' && newTaskTitle.length > 0 ){ 
      setTasks(old => [... old, {
        id: Number(new Date().getTime()), 
        title: newTaskTitle,
        done: false
      }]);
      
      return newTaskTitle
    }

    Alert.alert('Todo não pode ser vazio!')
    return null;
    
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const UpTasks = tasks.map((task) => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task
    });

    setTasks(UpTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTasks = tasks.filter( task => task.id !== id);

    setTasks(removeTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}