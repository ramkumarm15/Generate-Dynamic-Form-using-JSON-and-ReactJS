import React from "react";

import Input from "./Fields/Input";
import Select from "./Fields/Select";
import Checkbox from "./Fields/Checkbox";
import ButtonInput from "./Fields/Button";

const Formfield = ({ form, click }) => {
  const {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_options,
  } = form;

  switch (field_type) {
    case "text":
      return (
        <React.Fragment>
          <Input
            type={field_type}
            id={field_id}
            placeholder={field_placeholder}
            value={field_value}
            label={field_label}
          />
        </React.Fragment>
      );
    case "email":
      return (
        <React.Fragment>
          <Input
            type={field_type}
            id={field_id}
            placeholder={field_placeholder}
            value={field_value}
            label={field_label}
          />
        </React.Fragment>
      );
    case "password":
      return (
        <React.Fragment>
          <Input
            type={field_type}
            id={field_id}
            placeholder={field_placeholder}
            value={field_value}
            label={field_label}
          />
        </React.Fragment>
      );
    case "submit":
      return (
        <React.Fragment>
          <ButtonInput
            type={field_type}
            id={field_id}
            value={field_value}
          />
        </React.Fragment>
      );
    case "select":
      return (
        <React.Fragment>
          <Select
            type={field_type}
            id={field_id}
            placeholder={field_placeholder}
            value={field_value}
            label={field_label}
            option={field_options}
          />
        </React.Fragment>
      );
    case "checkbox":
      return (
        <React.Fragment>
          <Checkbox
            type={field_type}
            id={field_id}
            placeholder={field_placeholder}
            value={field_value}
            label={field_label}
            option={field_options}
            click={click}
          />
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <div></div>
        </React.Fragment>
      );
  }
};

export default Formfield;
