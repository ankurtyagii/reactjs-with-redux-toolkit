import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { login, logout  } from '../features/auth/authSlice';

const Header = () => {
  const loginState = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(login())
  }
  const logoutUser = () => {
    dispatch(logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginState.auth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutUser}>Logout</button>
          </li>
        </ul>
      </nav>}
      {!loginState.auth && <nav>
        <ul>
        <li>
            <button onClick={loginUser}>Login</button>
          </li>
        </ul>
        </nav>}
    </header>
  );
};

export default Header;
