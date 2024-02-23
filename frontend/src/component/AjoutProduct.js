import { Input } from '@mui/material';
import { useEffect, useState } from 'react';
import { Form, FormControl, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../Redux/Actionproducts';
import { getcurrentuser } from '../Redux/Action';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AjoutProduct() {
  const [show, setShow] = useState(false);
const[category,setCategory]=useState("")
const[title,settitle]=useState("")
const[description,setdescription]=useState("")
const[image,setimage]=useState([])
const[price,setprice]=useState(0)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch=useDispatch()
const handleAjout=async()=>{
  const formaData=new FormData()
    formaData.append('file',image)
    formaData.append('upload_preset','ml_default')
    if(image.length===undefined){
    await axios.post('https://api.cloudinary.com/v1_1/dwb8dvmbw/upload',formaData).then((res)=>
    {  console.log(res.data.url)
      dispatch(addproduct({title,category,image:res.data.url,price,description}))
  })
   
    handleClose()
}}

  useEffect(() => {
    
  dispatch(getcurrentuser())
  
  }, [])
  const user=useSelector(state=>state.userReducer.user)
  console.log(user)
  return (
    <>
      <Button style={{width:"200px",color:'yellow'}}  variant="primary" onClick={handleShow}>
        Ajouter votre produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {user?.name?
        <form>
        <Form.Label for="exampleFormControlInput1">title:</Form.Label>

        <Form.Control onChange={(e)=>settitle(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" />

  <Form.Group class="form-group">
    <Form.Label for="exampleFormControlInput1">category:</Form.Label>
    <Form.Select onChange={(e)=>setCategory(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="men's clothing" >
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
    </Form.Select>
    </Form.Group>
    <Form.Label for="exampleFormControlInput1">descreption:</Form.Label>
    <Form.Control onChange={(e)=>setdescription(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="........." />
    <Form.Label for="exampleFormControlInput1">image:</Form.Label>
    <Form.Control onChange={(e)=>setimage(e.target.files[0])} type="file" class="form-control" id="exampleFormControlInput1" accept='image/*' />
    <Form.Label for="exampleFormControlInput1">price:</Form.Label>
    <Form.Control onChange={(e)=>setprice(e.target.value)} type="number" class="form-control" id="exampleFormControlInput1" placeholder="..$" />
  
</form>
:
<div style={{display:"flex",textAlign:"center",flexDirection:"column",alignItems:"center"}}>
    <h1>you need to create an account or SignIn</h1>
    <Button><Link to='/Registre'>Create Acount</Link></Button>
    <Button><Link to='/login'>Login</Link></Button>
</div>

}

            


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         {user?.name? <Button variant="primary" onClick={handleAjout}>
            Save Changes
          </Button>:null}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AjoutProduct;