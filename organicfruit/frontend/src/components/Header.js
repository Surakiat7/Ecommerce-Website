import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">Organic Fruit</Link>
      </div>
    </header>
  );
}

export default Header;
