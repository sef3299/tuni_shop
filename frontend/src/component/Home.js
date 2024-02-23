import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Productcard from './Productcard';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../Redux/Actionproducts';




function Home() {
    const [product, setproduct] = useState([])
    const [category,setcategory]=useState("")
   const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getproduct())
        axios.get("https://fakestoreapi.com/products").then(res => setproduct(res.data))
    }, [])
const products=useSelector(state=>state.ProductReducer.products)
console.log(products)
    return (
        
      <div style={{display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"}}>
           <div style={{ marginTop: '20px' }}>
  
           <Card>
           <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://miro.medium.com/v2/resize:fit:1400/1*GugoFZUldUF6RncoKt_4Bw.png"
        
      />
      
      <Carousel.Caption>
      <Card border="primary" style={{ width: '30rem', gap: '5px', marginLeft: '600px', backgroundColor: 'rgba(21, 255, 255, 0.5)' }}>
  <Card.Body>
    <Card.Title>New.collection</Card.Title>
    <Card.Text>
    <h2>Try our amazing AI sneaker designer. Sneakerheads rejoice!</h2>
    </Card.Text>
    <Nav.Link style={{ width: '172px', border: '2px solid black', borderRadius: '4px', padding: '8px 16px', backgroundColor: 'transparent', color: 'black', textDecoration: 'none', marginRight: '10px' }} onClick={() => setcategory("men's clothing")}> SHOP  MEN</Nav.Link>
    <br></br>
    <Nav.Link style={{ width: '172px', border: '2px solid black', borderRadius: '4px', padding: '8px 16px', backgroundColor: 'transparent', color: 'black', textDecoration: 'none' }} onClick={() => setcategory("women's clothing")}>SHOP WOMEN</Nav.Link>
  </Card.Body>
</Card>

</Carousel.Caption>

    </Carousel.Item>
   
    
    
  </Carousel>
  <Card.Text style={{ marginTop: '0px', marginRight: '200px', color: 'red' }}>
  <Navbar bg="light" expand="lg" data-bs-theme="light">
  <Container>
  <Nav fill variant="tabs" defaultActiveKey="/home" style={{ marginLeft: '400px',gap:'15px' }}>

  <Nav.Item>
      <Nav.Link onClick={()=>setcategory("")}>ALL</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link  onClick={()=>setcategory("men's clothing")}>MEN</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link  onClick={()=>setcategory("women's clothing")}>WOMEN</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link onClick={()=>setcategory("jewelery")}>JEWELERY</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link onClick={()=>setcategory("electronics")}>ELECTRONICS</Nav.Link>
      </Nav.Item>
      
    </Nav>
      
    
  </Container>
</Navbar>

  </Card.Text>
</Card>

  
      </div>

{product.filter(e=>category!==""?e.category===category:e).map(e =>
                <Productcard e={e}/>
            )}
{products.filter(e=>category!==""?e.category===category:e).map(e =>
                <Productcard e={e}/>
            )}
<div >

</div>
          
        </div>
        
      
           
      

        
       
        
    )
    
     
      
  

}





export default Home;

