import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import Cart from './Cart';

export default function NavMenu() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ borderBottom: 'solid thin #000000' }}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/logo.png"
            alt="Indie Bubba Logo"
            width="280px"
            height="70px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavStyles>
            <Link href="/products">Marketplace</Link>
            {user && (
              <>
                <Link href="/sell">Selling</Link>
                <Link href="/orders">Buying</Link>
                <Link href="/account">Account</Link>
                <Link href="/contact">Contact</Link>
                <SignOut />

                <a type="button" onClick={openCart}>
                  🛒
                  <CartCount
                    count={user.cart.reduce(
                      (tally, cartItem) =>
                        tally + (cartItem.product ? cartItem.quantity : 0),
                      0
                    )}
                  />
                </a>
              </>
            )}
            {!user && (
              <>
                <Link href="/SignIn">Login</Link>
                <Link href="/Register">Register</Link>
                <Link href="/contact">Contact</Link>
              </>
            )}
            <Cart />
          </NavStyles>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
