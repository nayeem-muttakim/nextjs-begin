"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const path = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          NextJS Begin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/static" active={path === "/static"}>
              Static
            </Nav.Link>
            <Nav.Link as={Link} href="/dynamic" active={path === "/dynamic"}>
              Dynamic
            </Nav.Link>
            <Nav.Link as={Link} href="/isr" active={path === "/isr"}>
              ISR
            </Nav.Link>
            <NavDropdown title="Topics" id="topic-dropdown">
              <NavDropdown.Item as={Link} href="/topics/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/fitness">
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/coding">
                Coding
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/search" active={path === "/search"}>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
