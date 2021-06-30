import React, { useContext } from "react";

import { Form } from "react-bootstrap";
import { Formcontext } from "../../Formcontext";

const Input = ({ type, id, placeholder, value, label }) => {
  const { handleChange } = useContext(Formcontext);
  return (
    <React.Fragment>
      <Form.Group className="my-4">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          className={id}
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(id, e);
          }}
          required
        />
      </Form.Group>
    </React.Fragment>
  );
};

export default Input;
