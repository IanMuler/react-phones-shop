export const setCartItem = (payload, actualUser) => ({
    type: "SET_CART_ITEM",
    payload,
    actualUser,
});

export const deleteCartItem = (payload, actualUser) => ({
    type: "DELETE_CART_ITEM",
    payload,
    actualUser,
});

export const loginRequest = (payload) => ({
    type: "LOGIN_REQUEST",
    payload,
});

export const signOut = () => ({
    type: "SIGN_OUT",
});

export const SignUpRequest = (payload) => ({
    type: "SIGN_UP_REQUEST",
    payload,
});
