import AddTask from "./ComponentOfAddTask/AddTask";
import ToDo from "./ComponentsOfZen/To_Do";
import Done from "./ComponentsOfZen/Done";
import Trash from "./ComponentsOfZen/Trash";
import Mode from "./ComponentMode/Mode";
import ToDo_Done_Trash from "./ToDo_Done_Trash/ToDo_Done_Trash";
import List from "./ComponentOfList/List";
import {useState, useEffect, useRef, useMemo} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContextTheme from "./ContextTheme";

function App() {
  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState({
  id: null,
  text: '',
  type: ''
  });
  const [list, setList] = useState([]);
  const autoFocus = useRef(null);
  const [head, setHead] = useState('To Do');
  const [backColor, setBackcolor] = useState(1);
  const [seperateList, setSeperateList] = useState([]);
  const [theme, setTheme] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const expersiveFunction = useMemo(() => {
    return seperateList.filter(item =>
      item.text && item.text.toLowerCase().includes(inputSearch.toLowerCase())
    );
  }, [inputSearch, seperateList]);

  useEffect(() => {
  if (theme) {
    document.documentElement.style.setProperty('--background-color', '#252525');
    document.documentElement.style.setProperty('--text-color', '#E0E0E0');
  } else {
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black');
  }
}, [theme]);

  useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    setList(storedTasks);
    setSeperateList(storedTasks.filter(item => item.type === 'todo')); 
  }
  setIsLoaded(true);
}, []);

  useEffect(() => {
  if (isLoaded) {
    localStorage.setItem('tasks', JSON.stringify(list));
  }
}, [list, isLoaded]);

  function filterList(event) {
    setInputSearch(prev => event.target.value);
  }

  function handleAddTask() {
    setAddTask(prev => !prev);
  };

  function changeTheme(){
    setTheme(prev => !prev);
  }

  function handleAddInput(event) {
    const newTask = {
      id: uuidv4(),
      text: event.target.value,
      type: 'todo'
    };
    setTask(prev => newTask);
  };

  function handleAddTaskToList() {
  const newTask = task;
  const newList = [...list, newTask];

  setList(newList);
  setAddTask(prev => !prev);
  setTask('');
  setSeperateList(newList.filter(item => item.type === 'todo'));
}

  function showToDo() {
    setHead(prev => 'To Do');
    setBackcolor(prev => 1);
    const updatedShowToDo = list.filter((item)=>item.type === 'todo');
    setSeperateList(prev => updatedShowToDo);
  }

  function showDone() {
    setHead(prev => 'Done');
    setBackcolor(prev => 2);
    setSeperateList(list.filter((item)=>item.type === 'done'))
  }

  function showTrash() {
    setHead(prev => 'Trash');
    setBackcolor(prev => 3);
    setSeperateList(list.filter((item)=>item.type === 'trash'))
  }

  function handleMoveToTrash(taskToUpdate){
  const updatedList = list.map(item =>
    item.id === taskToUpdate.id
      ? {...item, type: 'trash'}
      : item
  );

  setList(updatedList);
  if (head === 'To Do') {
    setSeperateList(updatedList.filter(item => item.type === 'todo'));
  } else if (head === 'Done') {
    setSeperateList(updatedList.filter(item => item.type === 'done'));
  } else if (head === 'Trash') {
    setSeperateList(updatedList.filter(item => item.type === 'trash'));
  }
}

  function handleMoveToToDo(taskToUpdate){
  const updatedList = list.map(item =>
    item.id === taskToUpdate.id
      ? {...item, type: 'todo'}
      : item
  );
  setList(updatedList);
  if (head === 'To Do') {
    setSeperateList(updatedList.filter(item => item.type === 'todo'));
  } else if (head === 'Done') {
    setSeperateList(updatedList.filter(item => item.type === 'done'));
  } else if (head === 'Trash') {
    setSeperateList(updatedList.filter(item => item.type === 'trash'));
  }
  }

  function handleMoveToDone(taskToUpdate){
    const updatedList = list.map(item =>
    item.id === taskToUpdate.id
      ? {...item, type: 'done'}
      : item
  );
  setList(updatedList);
  if (head === 'To Do') {
    setSeperateList(updatedList.filter(item => item.type === 'todo'));
  } else if (head === 'Done') {
    setSeperateList(updatedList.filter(item => item.type === 'done'));
  } else if (head === 'Trash') {
    setSeperateList(updatedList.filter(item => item.type === 'trash'));
  }
  }

  function handleDeleteForever(task) {
    const updatedList = list.filter((item) => item.id !== task.id);
    setList(updatedList);
    if (head === 'To Do') {
    setSeperateList(updatedList.filter(item => item.type === 'todo'));
  } else if (head === 'Done') {
    setSeperateList(updatedList.filter(item => item.type === 'done'));
  } else if (head === 'Trash') {
    setSeperateList(updatedList.filter(item => item.type === 'trash'));
  }
  }

  return (
    <ContextTheme.Provider value={theme}>
      <div style={{backgroundColor: theme ? '#252525' : 'white', color: theme ? '#E0E0E0' : 'black', minHeight: '100vh'}}>
      <div style={{flexDirection:'column', width:'630px', height:'84px', marginTop:'50px', marginLeft:'80px'}}>
      <p style={{fontWeight:'700', fontSize:'34px', fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Task Zen</p>
      <p style={{fontWeight:'500', fontSize:'16px'}}>Today is relax day, just relax and consider about today's day</p>
    </div>
    <div style={{display:'flex', height:'52px', marginTop:'100px', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <div style={{display:'flex', width:'350px', height:'52px', justifyContent:'space-between', alignItems:'center'}}>
        <ToDo showToDo={showToDo} backColor={backColor}/>
        <Done showDone={showDone} backColor={backColor}/>
        <Trash showTrash={showTrash} backColor={backColor}/>
      </div>
      <input style={{borderRadius:'50px', height:'30px', backgroundColor: theme ? '#C0C0C0' : 'white', color: theme ? '#252525' : '#252525'}} placeholder='type to filter' type='text' onChange={filterList}/>
      <Mode changeTheme={changeTheme}/>
      <AddTask addTask={addTask} handleAddTask={handleAddTask} handleAddInput={handleAddInput} task={task} handleAddTaskToList={handleAddTaskToList} autoFocus={autoFocus}/>
    </div>
    <div>
      <ToDo_Done_Trash head={head}/>
    </div>
    <List list={expersiveFunction} handleMoveToTrash={handleMoveToTrash} handleMoveToToDo={handleMoveToToDo} handleMoveToDone={handleMoveToDone} handleDeleteForever={handleDeleteForever}/>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#081E340D', height:'90px', fontFamily:'Verdana, Geneva, Tahoma, sans-serif', gap:'200px'}}>
      <a style={{color: theme ? 'white' : 'black'}} href="https://github.com/myrzadaksh">GitHub</a>
      <a style={{color: theme ? 'white' : 'black'}} href="https://www.linkedin.com/in/daulet-sovetov/">LinkedIn</a>
    </div>
    </div>
    </ContextTheme.Provider>
  );
}

export default App;