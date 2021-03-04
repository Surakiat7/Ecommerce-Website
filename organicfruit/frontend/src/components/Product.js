import { Link } from 'react-router-dom';

import './Product.css';

function Product(props) {
    const p = props.product;
    return (
    <div className="product">
      <img className="product-image" src={p.url} alt="product" />
      <div className="product-day">
        <Link to={`/product/${p._id}`} >{p.day}</Link>
      </div>
      <div className="product-name">{p.name}</div>
      <div className="product-amount">จำนวน {p.amount} ลูก</div>
    </div>
    );
}

export default Product;
