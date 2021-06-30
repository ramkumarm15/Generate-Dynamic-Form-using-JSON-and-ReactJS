import React from "react";

import { Form } from "react-bootstrap";

const Select = ({ type, id, placeholder, option, label }) => {
  
  return (
    <React.Fragment>
      <Form.Group className="my-4">
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" custom className="form-control">
          {option.map((item) => {
            return <option key={item.option}>{item.option}</option>;
          })}
        </Form.Control>
      </Form.Group>
    </React.Fragment>
  );
};

export default Select;
