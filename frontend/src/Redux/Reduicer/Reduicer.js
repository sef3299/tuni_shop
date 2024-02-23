import { REGISTER, LOGIN, ADDTOCART, REMOVEFROMCART, GETCURRENT, LOGOUT, ALERT_ERROR, CLEAR_ERROR } from '../ActionType';


const initialState = { user: {},errors:[] };

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.newuser };
        case LOGIN:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user };
        case GETCURRENT:
            return { ...state, user: payload.user }
        case LOGOUT:
            return { ...state, user: {} }  
            case ALERT_ERROR:
                return {...state,errors:[...state.errors,payload]}
            case CLEAR_ERROR:
                return {...state,errors:state.errors.filter((el) => el.id !== payload)};       
        default:
            return state;
    }
};

const initialCartState = [];

export const CartReducer = (state = initialCartState, { type, payload }) => {
    switch (type) {
        case ADDTOCART:
            console.log(state)
            return [...state, payload];
            
        case REMOVEFROMCART:
            return state.filter(item => item.product.id !== payload);
        default:
            return state;
    }
    
};


