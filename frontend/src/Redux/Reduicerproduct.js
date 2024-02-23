import { GETPRODUCT, MYPRODUCT } from './Actiontypeproduct';

const initialProductState =  {
    products: [],
    myproducts: []
  };

export const ProductReducer = (state = initialProductState, { type, payload }) => {
    switch (type) {
        case MYPRODUCT:
           
            return {...state,myproducts: payload};
            
        case GETPRODUCT:
            return {...state,products: payload.product};
        default:
            return state;
    }
    
};
