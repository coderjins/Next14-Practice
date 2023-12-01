import { age, name, hi } from "./data.js";

export default function Cart() {
  let 장바구니 = ["맥북 AIR", "맥북 PRO", "맥 STUDIO"];
  return (
    <div>
      {hi}
      <h4 className="title">Cart</h4>
      {장바구니.map((product) => {
        return <CartItem 상품명={product} />;
      })}

      <BasicButton color="blue" />
    </div>
  );
}
const BasicButton = ({ color }) => {
  return <button className={`basicButton ${color}`}>버튼</button>;
};
const CartItem = ({ 상품명 }) => {
  return (
    <div className="cart-item">
      <p>{상품명}</p>
      <p>$40</p>
      <p>1개</p>
      <p>
        {age}
        {name}
      </p>
    </div>
  );
};
