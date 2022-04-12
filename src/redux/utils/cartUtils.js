export const addItemToCart = (cartItems, payload) => {
    const item = cartItems.find(x => x.id === payload.id);
    if(item){
        return cartItems.map(item =>
            item.id === payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }

  return [ ...cartItems, { ...payload, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, payload) => {
    const item = cartItems.find(x => x.id === payload.id);

    if(item && item.quantity >= 2) {
        return cartItems.map(item =>
            item.id === payload.id
                ? {...item, quantity: item.quantity - 1}
                : item
        )
    }

    return cartItems.filter(item => item.id !== payload.id)
}