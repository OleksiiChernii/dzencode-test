import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrders, selectProducts } from "../../../redux/selectors";
import { getDate } from "../../../utils/utils";
import {
  GroupContainer,
  List,
  Item,
  AddProduct,
  IncomeContainer,
  Title,
  Add,
  ProductItem,
  ProductTitle,
  TitleContainer,
} from "./Groups.styled";
import { Smaller } from "../Income/IncomeDescription.styled";
import { SectionTitle } from "../../Title/Title";
import { useLocation } from "react-router-dom";
import { ButtonClose, ButtonList, ButtonRemove } from "../../Buttons/Button";
import { removeProduct } from "../../../redux/slice";
import { Modal } from "../../Modal/Modal";

export const Groups = () => {
  const orders = useSelector(selectOrders);
  const products = useSelector(selectProducts);
  const { state } = useLocation();
  const orderId = state ? state.id : 1;
  const [id, setId] = useState(orderId);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [remove, setRemove] = useState(null);

  const handleRemoveProduct = () => {
    dispatch(removeProduct(remove));
    setShowModal(false);
    setRemove(null);
  };

  const handler = (id) => {
    setId(id);
    setShow(true);
  };

  const handleClose = () => setShowModal(false);
  const order = orders.find((order) => order.id === id);
  const filteredProducts = products.filter((p) => p.order === id);

  return (
    <>
      {showModal && (
        <Modal
          handler={handleRemoveProduct}
          handleClose={handleClose}
        />
      )}
      <SectionTitle title="Продукты" size={products ? products.length : 0} />
      <GroupContainer>
        <List>
          {orders.map((order) => {
            const date = getDate(order.date);
            return (
              <Item
                onClick={() => handler(order.id)}
                key={order.id}
                className={order.id === id && show ? "activeOrder" : ""}
              >
                <ButtonList />
                <div>
                  {products.filter((p) => p.order === order.id).length}{" "}
                  <Smaller>Продукта</Smaller>
                </div>
                <div>
                  <Smaller>{date.mounthDigit + " / " + date.day}</Smaller>
                  <div>
                    {date.day + " / " + date.mounth + " / " + date.year}
                  </div>
                </div>
              </Item>
            );
          })}
        </List>
        {show && (
          <IncomeContainer>
            <ButtonClose handler={() => setShow(false)} />
            <div style={{ padding: 35 + "px" }}>
              <Title>{order.title}</Title>
              <AddProduct>
                <Add>+</Add> Добавить продукт
              </AddProduct>
            </div>
            <ul style={{ margin: 0, padding: 0, position: "relative" }}>
              {filteredProducts.map((product) => {
                return (
                  <ProductItem key={product.id} isnew={!!product.isNew}>
                    <img src={product.photo} alt={product.title} />
                    <TitleContainer>
                      <ProductTitle>{product.title}</ProductTitle>
                      <div>SN: {product.serialNumber}</div>
                    </TitleContainer>
                    <div style={{ color: "rgb(205,220,57)" }}>
                      {product.specification}
                    </div>
                    <ButtonRemove
                      handler={() => {
                        setShowModal(true);
                        setRemove({
                          orderId: product.order,
                          productId: product.id,
                        });
                      }}
                    />
                  </ProductItem>
                );
              })}
            </ul>
          </IncomeContainer>
        )}
      </GroupContainer>
    </>
  );
};
