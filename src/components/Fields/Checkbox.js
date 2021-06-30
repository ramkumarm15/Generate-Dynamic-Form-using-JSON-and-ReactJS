import React, { useContext } from "react";

import { Form } from "react-bootstrap";
import { Formcontext } from "../../Formcontext";

const Checkbox = ({ type, id, placeholder, option, label, click }) => {
  const { handleChange } = useContext(Formcontext);

  return (
    <React.Fragment>
      <Form.Group className="my-4">
        <Form.Check
          type={type}
          id={id}
          label={label}
          onClick={(e) => {
            handleChange(id, e);
          }}
        />
      </Form.Group>
    </React.Fragment>
  );
};

export default Checkbox;
