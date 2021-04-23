const reducer = (state, action) => {
    
    switch(action.type){
        
         case 'SET_CART_ITEM': 
             return {
                 ...state,
                 actualUser: {
                     login: action.actualUser.login,
                     cart: [...action.actualUser.cart, action.payload]
                 },
                 usersData: [
                     ...state.usersData.filter(items => items.login.username !== action.actualUser.login.username),
                     {
                         login: action.actualUser.login,
                         cart: [...action.actualUser.cart, action.payload],
                     },
                 ]   
             }       

         case 'DELETE_CART_ITEM':
             return {
                 ...state,
                 actualUser: {
                     login: action.actualUser.login,
                     cart: [...action.actualUser.cart.filter(items => items.id !== action.payload)]
                 },
                 usersData: [
                     ...state.usersData.filter(items => items.login.username !== action.actualUser.login.username),
                     {
                         login: action.actualUser.login,
                         cart: [...action.actualUser.cart.filter(items => items.id !== action.payload)]
                     },
                 ]        
             };

        case 'LOGIN_REQUEST':

            const requestedData = state.usersData.filter(items => items.login.username === action.payload.username)
            
            return {
                ...state,
                actualUser: requestedData[0] // así devolver un objeto y no un array
            }

        case 'SIGN_OUT':
            return {
                ...state,
                actualUser: {},
            }

        case 'SIGN_UP_REQUEST':
            return {
                ...state,
                usersData: [
                    ...state.usersData,
                    {
                        login: action.payload,
                        cart: []
                    }
                ]
            }
                
        default: 
            return state;
    }

}

export default reducer;