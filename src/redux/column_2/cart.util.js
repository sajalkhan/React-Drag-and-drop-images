export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (Item) => Item.char_id === cartItemToAdd[0].char_id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.char_id === cartItemToAdd[0].char_id ? { ...cartItem } : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd[0] }];
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (Item) => Item.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((Item) => Item.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
