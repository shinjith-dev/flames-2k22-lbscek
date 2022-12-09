import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import data from "../data";
import { useEffect } from "react";

const list = data;

const EventsList = ({ type = "men" }) => {
  return (
    <>
      <h2 className="mb-2">{`Events - ${type === "men" ? "Men" : "Women"}`}</h2>
      <ListGroup>
        {list[type].map((item) => (
          <ListGroup.Item key={item.event}>{String(item.event)}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default EventsList;
