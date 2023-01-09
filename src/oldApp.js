import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Message from './components/Message';
import HookTest from './components/HookTest';
import NameList from './components/NameList';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import ToDoList from './components/ToDoList';
import NavBar from './components/NavBar';
import {Routes, Route, BrowserRouter}from 'react-router-dom'
import AddTask from './components/AddTask';
import initialData from './initialData';
import { useState } from 'react';
import FoodComponent from './components/FoodComponent';
import Fetching from './components/Fetching';
import Example from './components/Example';
class App extends Component{

  state = {
      tasks: [],
      fetching : true
  }

  onToggleCompleted = (taskId) => {
      let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
      taskToUpdate.completed = !taskToUpdate.completed

      this.setState(prevState => (
          prevState.tasks.map(task => {
              return task.id === taskId ?  taskToUpdate : task
          })
      ))
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true
  }
  componentDidUpdate(){ 
    console.log("componentDidUpdate")
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return true
    }
  componentDidMount(){  
    setTimeout(() => {
        this.setState({tasks: initialData, fetching: false})
    }, 2000);
    console.log("componentDidMount")
    return true
  }
  render(){
      return(
          <section id="todo">
            {this.state.fetching? <Fetching/> : null}
            <Example></Example>
              <BrowserRouter>
                  <Routes>
                      <Route path="/add-task" element={<AddTask/>} />
                      <Route path="/:filter?" element={<ToDoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                  </Routes>
                  <NavBar />
              </BrowserRouter>
          </section>
      )
  }
}

export default App