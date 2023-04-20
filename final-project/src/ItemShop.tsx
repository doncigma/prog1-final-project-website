import { useState } from "react";
import { ShoppingCartItem } from "./ItemShopData";
import { CatalogItem } from "./ItemShopData";
import { catalog } from "./ItemShopData";


function ItemShop() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  function computeTotalAmount(shoppingCart: ShoppingCartItem[]): number {
    let sum: number = 0;
    for (const item of shoppingCart) {
      sum += item.quantity * item.cost;
    }
    return sum;
  }

  function onAddItem(item: CatalogItem) {
    let existingCartItem = null;
    
    for (const cartItem of shoppingCart) {
      if (cartItem.name === item.name) {
        existingCartItem = cartItem;
        break;
      }
    }

    if (existingCartItem != null) {
      existingCartItem.quantity++;
    } 
    else {
      const newShoppingCartItem: ShoppingCartItem = {
        name: item.name,
        quantity: 1,
        cost: item.cost
      }
      shoppingCart.push(newShoppingCartItem);
    }

    setTotalAmount(computeTotalAmount(shoppingCart));
    setShoppingCart([...shoppingCart]);
  }

  function onRemoveItem(item: ShoppingCartItem) {    
    if (item.quantity === 1) {
      const index = shoppingCart.indexOf(item);
      shoppingCart.splice(index, 1);
    } 
    else {
      item.quantity--;
    }

    setTotalAmount(computeTotalAmount(shoppingCart));
    setShoppingCart([...shoppingCart]);
  }

  const CatalogTableRows = catalog.map((item: CatalogItem) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>${item.cost.toFixed(2)}</td>
        <td>{item.description}</td>
        <td>
          <button onClick={() => {onAddItem(item)}}>+</button>
        </td>
      </tr>
    );
  });

  const ShoppingCartTableRows = shoppingCart.map((item: ShoppingCartItem) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>
          <button onClick={() => {onRemoveItem(item)}}>-</button>
        </td>
      </tr>
    );
  });

  return (
    <div className='App-mainsection'>
      <h2>Item Shop</h2>
      
      <h3>Catalog</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {CatalogTableRows}
        </tbody>
      </table>

      <h3>Shopping Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ShoppingCartTableRows}
        </tbody>
      </table>

      <p>Total Amount:${totalAmount.toFixed(2)}</p>
    </div>);
}

export default ItemShop