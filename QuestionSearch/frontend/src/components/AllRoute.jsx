import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddQuestion } from './AddQuestion'
import { Login } from './Login'
import { PrivateComponent } from './PrivateComponent'
import { QuestionList } from './QuestionList'
import { SignUp } from './SignUp'

export const AllRoute = () => {
  const auth = localStorage.getItem("user");
  return (
    <>
    <Routes element={<PrivateComponent/>}>
        <Route path='/' element={<QuestionList/> }/>
        <Route path='/add' element={<AddQuestion/>}/>
    </Routes>
    <Routes>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}
