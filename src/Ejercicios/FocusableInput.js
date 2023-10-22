import React, { useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <Form.Control
        ref={inputRef}
        type="text"
        placeholder="Focusable Input"
      />
    </Container>
  );
};

export default FocusableInput;
