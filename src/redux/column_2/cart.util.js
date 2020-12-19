export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (Item) => Item.char_id === cartItemToAdd.char_id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.char_id === cartItemToAdd.char_id ? { ...cartItem } : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd }];
};
