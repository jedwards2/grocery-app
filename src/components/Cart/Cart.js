import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { purchaseCart } from "../../store/cart";
import { getAllCartItems } from "../../store/cart";
function Cart() {
  let dispatch = useDispatch();

  const cartItems = useSelector(getAllCartItems);

  if (!cartItems || !cartItems.length)
    return (
      <div className="cart">
        No items in the cart. Start selecting items to purchase.
      </div>
    );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(purchaseCart());
    window.alert(
      "Purchased the following:\n" +
        `${cartItems.map((item) => `${item.count} of ${item.name}`).join("\n")}`
    );
  };

  return (
    <div className="cart">
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
}

export default Cart;
