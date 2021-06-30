import React, { useContext } from "react";

import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Formfield from "./Formfield";

import { Formcontext } from "../Formcontext";
import "./Wrapper.css";

const Wrapper = () => {
  const { data } = useContext(Formcontext);
  const formdata = data.map((item, index) => {
    return (
      <div key={index}>
        <h4 className="text-center">{data[0].Form_label}</h4>
        <Form method="POST">
          {item.fields.map((item, index) => (
            <Formfield form={item} key={index} />
          ))}
        </Form>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5}>
              <Card className="border-0 shadow">
                <Card.Header className="text-center border-0 bg-light p-4">
                  <h3>Dynamic Form</h3>
                  <p className="text-muted">ReactJS</p>
                </Card.Header>
                <Card.Body className="p-5">{formdata}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Wrapper;
