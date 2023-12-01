export default function List() {
  let 상품 = ["맥북 에어", "맥북 프로", "맥 스튜디오"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((product) => {
        return (
          <div className="food">
            <h4>{product} ₩1,300,000</h4>
          </div>
        );
      })}
    </div>
  );
}
