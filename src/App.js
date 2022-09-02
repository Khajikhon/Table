import React, {useState}  from 'react'
import {useDispatch} from 'react-redux'
import {addTable, table} from './store/reducer/table'
import './App.css';
import Table from './pages/Table';

function App() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const dispatch = useDispatch()
   
  function addItem() {
 
  
  let createTable = {
    name: name,
    surname: surname,
    email: email,
    contact: contact
  }

  
  dispatch({type: "addTable",payload: createTable })
  
  
  
}
  
  return (
    <div className='conteiner '>
    <div className='row mt-5 '>
      <div className='col-2'>
        <input onInput={val => setName(val.target.value)} type={"text"} placeholder="Name"/>
      </div>
      <div className='col-2'>
        <input onInput={val => setSurname(val.target.value)} type={"text"} placeholder="Surname" />
      </div>
      <div className='col-2'>
        <input onInput={val => setEmail(val.target.value)} type={"text"} placeholder="Email" />
      </div>
      <div className='col-2'>
        <input onInput={val => setContact(val.target.value)} type={"text"} placeholder="Phonenumber" />
      </div>
      <div className='col-2'>
        <button onClick={addItem} className='btn btn-primary '>Qo'shish</button>
      </div>

      <Table/>
    </div>
    </div>
  )
}

export default App;
