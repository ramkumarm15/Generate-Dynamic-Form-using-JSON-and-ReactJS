import React, { useContext } from "react";

import { Form, Button } from "react-bootstrap";
import { Formcontext } from "../../Formcontext";

const ButtonInput = ({ type, id, value }) => {
     
  return (
    <React.Fragment>
      <Form.Group className="my-4">
        <Button as="input" type={type} className={id} value={value} />
        {""}
      </Form.Group>
    </React.Fragment>
  );
};

export default ButtonInput;
