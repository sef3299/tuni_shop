import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Action';
import './Productcard.css'; // Import CSS file for custom styles

function Productcard({ e }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const add = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Card className="custom-card">
        
        <Card.Body>
          <Card.Img variant="top" src={e.image} style={{height:"300px"}}/>
          <Card.Title style={{overflowY:'auto',height:"100px"}}>{e.title}</Card.Title>
          <Card.Text style={{overflowY:'auto',height:"100px"}}>
           Description {e.description}
          </Card.Text>
          <Card.Text>
           Price: {e.price} $
          </Card.Text>
          <Card.Text>
           Owner: {e.userID?e.userID.name:"admin"}
          </Card.Text>
          <div className="button-container">
            <Button variant="custom-primary" onClick={add}>+</Button>
            <span>{quantity}</span>
            <Button variant="custom-primary" onClick={decrement}>-</Button>
            <Button variant="custom-primary" onClick={() => dispatch(addtocart({ product: e, quantity: quantity }))}>ADD to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Productcard;
