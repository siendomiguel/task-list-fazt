import React from 'react'
import {createContext} from 'react'

const TaskContext = createContext();

function TaskContextProvider(props) {
  return (
    <TaskContext.Provider>
      {props.children}
    </TaskContext.Provider>
  )
}

export {TaskContext, TaskContextProvider};