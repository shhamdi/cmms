"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import "/home/anis/Desktop/PFA/cmms/src/app/(dashboard)/asset/style.css";

const Forms = () => {
  const [randomValue, setRandomValue] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    model: "",
    category: "",
    area: "",
    barchoice: "",
    barCode: 0,
    randombar: randomValue,
    image: "",
    purchasePrice: 0,
    purchaseDate: "",
    residualValue: 0,
    usefulLife: 0,
    time: "",
    receipt: "",
    worker: "",
    additionalWorker: "",
    teams: "",
    vendors: "",
    customers: "",
    placedInService: "",
    warranty: "",
    additionalInformation: "",
    uploadWarranty: "",
    file1: "",
    file2: "",
  });

  const [isRandom, setIsRandom] = useState(false);
  function israndom() {
    setIsRandom(!isRandom);
  }
  function random() {
    setRandomValue((prev) => Math.floor(Math.random() * 1000000000) + 1);
  }
  function toDo() {
    israndom();
    random();
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <Form onSubmit={handleSubmit} className="form">
      <h1>Asset Information</h1>
      <Form.Group>
        <Form.Label for="name">Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="description">Description</Form.Label>
        <Form.Control
          type="text"
          id="description"
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="model">Model</Form.Label>
        <Form.Control
          type="text"
          id="model"
          onChange={handleChange}
          value={formData.model}
          name="model"
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label for="category">Category</Form.Label>
            <Form.Control
              type="text"
              id="category"
              onChange={handleChange}
              value={formData.category}
              name="category"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label for="area">Area</Form.Label>
            <Form.Control
              type="text"
              id="area"
              onChange={handleChange}
              value={formData.area}
              name="area"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Check
          type="radio"
          value="Enter custom barcode"
          id="custom"
          checked={formData.barchoice === "Enter custom barcode"}
          onChange={handleChange}
          name="barchoice"
          label="Enter custom barcode"
          inline
          onClick={israndom}
        />
        <Form.Check
          type="radio"
          value="Generate random barcode"
          id="random"
          checked={formData.barchoice === "Generate random barcode"}
          onChange={handleChange}
          name="barchoice"
          label="Generate random barcode"
          inline
          onClick={toDo}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label for="barcode">Barcode</Form.Label>
        <Form.Control
          type="text"
          id="barcode"
          onChange={handleChange}
          value={isRandom ? formData.randombar : formData.barCode}
          name="barcode"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="image">Image</Form.Label>
        <Form.Control
          type="file"
          id="image"
          accept="image/*"
          onChange={handleChange}
          value={formData.image}
          name="image"
        />
      </Form.Group>
      <h2>Depreciation</h2>

      <p>
        Depreciation data helps you track the asset value over time and at the
        end of its life cycle
      </p>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label for="purchaseprice ">Purchase Price</Form.Label>

            <div className="currency-wrap">
              <span className="currency-code">TND</span>
              <Form.Control
                type="number"
                className="text-currency"
                id="purchaseprice"
                onChange={handleChange}
                value={formData.purchasePrice}
                name="purchasePrice"
              />
            </div>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label for="purchasedate">Purchase Date</Form.Label>
            <Form.Control
              type="date"
              id="purchasedate"
              onChange={handleChange}
              value={formData.purchaseDate}
              name="purchaseDate"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label for="residualvalue">Residual Value</Form.Label>
            <div className="currency-wrap">
              <span className="currency-code">TND</span>
              <Form.Control
                type="number"
                className="text-currency"
                id="residualvalue"
                onChange={handleChange}
                value={formData.residualValue}
                name="residualValue"
              />
            </div>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label for="useFullife">Useful Life</Form.Label>
            <Form.Control
              type="number"
              id="useFullife"
              onChange={handleChange}
              value={formData.usefulLife}
              name="usefulLife"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={formData.time}
              name="time"
            >
              <option value="year">years</option>
              <option value="month">months</option>
              <option value="week">weeks</option>
              <option value="day">days</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label for="receipt">Upload purchase receipt</Form.Label>
        <Form.Control
          type="file"
          id="receipt"
          onChange={handleChange}
          value={formData.receipt}
          name="receipt"
        ></Form.Control>
      </Form.Group>
      <h2>Assigned To</h2>
      <div className="assign">
        <Form.Group>
          <Form.Label for="worker">Worker</Form.Label>
          <Form.Control
            type="text"
            id="worker"
            onChange={handleChange}
            value={formData.worker}
            name="worker"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="additionalworkers">Additional Workers</Form.Label>
          <Form.Control
            type="text"
            id="additionalworkers"
            onChange={handleChange}
            value={formData.additionalWorker}
            name="additionalWorker"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label for="teams">Teams</Form.Label>
          <Form.Control
            type="text"
            id="teams"
            onChange={handleChange}
            value={formData.teams}
            name="teams"
          />
        </Form.Group>
      </div>

      <h2>More Information</h2>
      <div className="moreInformation">
        <Form.Group>
          <Form.Label for="vendors">Vendors</Form.Label>
          <Form.Control
            type="text"
            id="vendors"
            onChange={handleChange}
            value={formData.vendors}
            name="vendors"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="customers">Customers</Form.Label>
          <Form.Control
            type="text"
            id="customers"
            onChange={handleChange}
            value={formData.customers}
            name="customers"
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label for="placedInServiceDate">
                Placed in Service Date
              </Form.Label>
              <Form.Control
                type="text"
                id="placedInServiceDate"
                onChange={handleChange}
                value={formData.placedInService}
                name="placedInService"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label for="WarrantyExpirationDate">
                Warranty Expiration Date
              </Form.Label>
              <Form.Control
                type="date"
                id="WarrantyExpirationDate"
                onChange={handleChange}
                value={formData.warranty}
                name="warranty"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label for="additionalInformation">
            Additional Information
          </Form.Label>
          <Form.Control
            type="text"
            id="additionalInformation"
            onChange={handleChange}
            value={formData.additionalInformation}
            name="additionalInformation"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="warranty">Upload warranty file </Form.Label>
          <Form.Control
            type="file"
            id="warranty"
            onChange={handleChange}
            value={formData.uploadWarranty}
            name="uploadWarranty"
          />
        </Form.Group>
      </div>
      <h2>Parts </h2>
      <Form.Group>
        <Form.Control
          type="file"
          onChange={handleChange}
          value={formData.file1}
          name="file1"
        />
      </Form.Group>
      <h2>Files</h2>

      <Form.Group>
        <Form.Control
          type="file"
          onChange={handleChange}
          value={formData.file2}
          name="file2"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control type="submit" />
      </Form.Group>
    </Form>
  );
};

export default Forms;
