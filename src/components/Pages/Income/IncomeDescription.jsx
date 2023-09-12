import React, { useState } from "react";
import { getPrice, getDate } from "../../../utils/utils.js";
import { IncomeItem, Smaller } from "./IncomeDescription.styled.js";
import { useNavigate } from "react-router-dom";
import { ButtonList, ButtonRemove } from "../../Buttons/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../../redux/slice.js";
import { Modal } from "../../Modal/Modal.jsx";
import { selectProducts } from "../../../redux/selectors.js";

export const IncomeDescription = ({ order }) => {
  const date = getDate(order.date);
  const products = useSelector(selectProducts).filter(product => product.order === order.id);
  const priceUSD = getPrice(products, "USD");
  const priceUAH = getPrice(products, "UAH");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleRemoveOrder = () => {
    dispatch(removeOrder(order.id));
    setShowModal(false);
  };
  const handlerListButton = () => {
    navigate("/groups", { state: { id: order.id }, replace: true });
  };

  return (
    <>
      {showModal && (
        <Modal
          handler={handleRemoveOrder}
          handleClose={() => setShowModal(false)}
        />
      )}
      <IncomeItem>
        <div style={{ width: 100 + "px" }}>{order.title}</div>
        <ButtonList handler={handlerListButton} />
        <div style={{ width: 50 + "px" }}>
          <div>{products.length}</div> <Smaller>Продукта</Smaller>
        </div>
        <div style={{ width: 200 + "px" }}>
          <Smaller>{date.mounthDigit + " / " + date.day}</Smaller>
          <div>{date.day + " / " + date.mounth + " / " + date.year}</div>
        </div>
        <div style={{ width: 200 + "px" }}>
          <Smaller>{priceUSD + " $"}</Smaller>
          <div>{priceUAH + " UAH"}</div>
        </div>
        <ButtonRemove
          style={{ width: 100 + "px" }}
          handler={() => setShowModal(true)}
        />
      </IncomeItem>
    </>
  );
};
