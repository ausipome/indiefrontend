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
          <Nav className="me-auto">
            <NavStyles>
              <li>
                <Link href="/products">Marketplace</Link>
              </li>

              {user && (
                <>
                  <li>
                    <Link href="/sell">Selling</Link>
                  </li>
                  <li>
                    <Link href="/orders">Buying</Link>
                  </li>
                  <li>
                    <Link href="/account">Account</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
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
                  <li>
                    <Link href="/SignIn">Login</Link>
                  </li>
                  <li>
                    <Link href="/Register">Register</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </>
              )}
              <Cart />
            </NavStyles>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
