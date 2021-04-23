export const setCartItem = (payload) => ({
    type: "SET_CART_ITEM",
    payload,
});

export const deleteCartItem = (payload) => ({
    type: "DELETE_CART_ITEM",
    payload,
});

export const loginRequest = (payload) => ({
    type: "LOGIN_REQUEST",
    payload,
});

export const signOut = () => ({
    type: "SIGN_OUT",
});