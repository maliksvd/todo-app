import React, {useState} from 'react';
import { 
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState(false);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setTaskCompleted(true);
  }

  const allCompletedTasks = () => {
    setTaskCompleted(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tasks</Text>
        <Button title="Clear" onPress={() => setTaskItems([])} />
      </View>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}

          

          
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f1f6',
    alignItems: 'start',
    justifyContent: 'start',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWrapper: {
    paddingTop: 40,
  },
  items: {},
  writeTaskWrapper: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  input: {
    width:'60%',
    backgroundColor: '#FFF',
    fontSize: 14,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
    color: '#999',
  },

});
