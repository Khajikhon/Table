import React, {useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Table() {
  const table = useSelector(state => state.addTable)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [index, setIndex] = useState('')

  const handleClose = () => {
        
    let editingTable = {
      name: name,
      surname: surname,
      email: email,
      contact: contact,
      index: index
    }
    console.log(editingTable);

    dispatch({type: "editItem", payload: editingTable })

    setShow(false)
  };
  const handleShow = (currentIndex) => {
       setIndex(currentIndex)
       setName(table[index].name)
       setSurname(table[index].surname)
       setEmail(table[index].email)
       setContact(table[index].contact)
    

    setShow(true)
  };
  function delTab(index) {

    dispatch({type: "delItem", payload: {index: index}})
    
  }
  console.log(table);

 
  return (
    <div>
      <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
                {
                  (table.length >0) ? table.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      <td>{item.surname}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>
                        <button onClick={() => handleShow(index)} className='btn btn-success'>Tahrirlash</button>
                        <button onClick={() => delTab(index)} className='btn btn-danger'>O'chirish</button>
                      </td>
                      </tr>
                    )
                  }):
                  (
                    <div className='text-align-content-center'><h4 className='text-align-center'> Table Yaratilmagan</h4></div>
                  )
                }
            
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Taxrirlash</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <input value={name} onInput={val => setName(val.target.value)} type={"text"} placeholder="Name"/>
      
        <input value={surname} onInput={val => setSurname(val.target.value)} type={"text"} placeholder="Surname" />
      
        <input value={email} onInput={val => setEmail(val.target.value)} type={"text"} placeholder="Email" />
      
        <input value={contact} onInput={val => setContact(val.target.value)} type={"text"} placeholder="Phonenumber" />
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
