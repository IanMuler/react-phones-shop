const reducer = (state, action) => {
    
    switch(action.type){
        
        case 'SET_CART_ITEM':

            const exist = state.myList[action.profile].find(item => item.id === action.payload.id)

            if (exist) return {...state}

            return {
                myList: {
                    ...state.myList,
                    [action.profile]: [...state.myList[action.profile], action.payload]
                }
            };

        case 'DELETE_CART_ITEM':
            return {
                myList: {
                    ...state.myList,
                    [action.profile]: [...state.myList[action.profile].filter(items => items.id !== action.payload)]
                }
            };

        case 'LOGIN_REQUEST':
            return {
                ...state,
                actualUser: action.payload,
            }

        case 'SIGN_OUT':
            return {
                ...state,
                actualUser: {},
            }
                
        default: 
            return state;
    }

}

export default reducer;