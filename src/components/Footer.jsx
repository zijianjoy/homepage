import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <a
          rel="noopener"
          href="https://github.com/zijianjoy"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            James Liu
          </span>
        </a>
        <p>
          <small className="text-muted">
            2024
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
