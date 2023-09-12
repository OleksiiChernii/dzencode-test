import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrders, selectProducts } from "../../../redux/selectors";
import { getDate, getPrice } from "../../../utils/utils";
import { ButtonRemove } from "../../Buttons/Button";
import { Item, List, Smaller, Underlined } from "./Products.styled";
import { SectionTitle } from "../../Title/Title";
import { Select } from "../../Select/Select";
import { removeProduct } from "../../../redux/slice";
import { Modal } from "../../Modal/Modal";

export const Products = () => {
  const [type, setType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);
  const [productId, setProductId] = useState(null);

  const handler = () => {
    dispatch(removeProduct({ orderId, productId }));
    setShowModal(false);
    setProductId(null);
    setOrderId(null);
  };

  const [specification, setSpecification] = useState("");
  const products = useSelector(selectProducts);
  const filteredProducts = products.filter((product) => {
    if (type && specification) {
      return product.type === type && product.specification === specification;
    }
    if (type) {
      return product.type === type;
    }
    if (specification) {
      return product.specification === specification;
    }
    return true;
  });
  const orders = useSelector(selectOrders);

  const predicate = (value, index, array) => array.indexOf(value) === index;
  const types = [
    "",
    ...products.map((product) => product.type).filter(predicate),
  ];
  const specifications = [
    "",
    ...products.map((product) => product.specification).filter(predicate),
  ];

  const handlerType = (e) => setType(e.target.value);
  const handlerSpecification = (e) => setSpecification(e.target.value);

  return (
    <>
      {showModal && (
        <Modal handler={handler} handleClose={() => setShowModal(false)} />
      )}
      <SectionTitle title="Продукты" size={products.length}>
        <Select title="Тип" values={types} handler={handlerType} />
        <Select
          title="Спецификация"
          values={specifications}
          handler={handlerSpecification}
        />
      </SectionTitle>

      <List>
        {filteredProducts.map((product) => {
          const guaranteeFrom = getDate(product.guarantee.start);
          const guaranteeTo = getDate(product.guarantee.end);
          const priceUAH = getPrice([product], "UAH");
          const priceUSD = getPrice([product], "USD");
          const order = orders.find((order) => order.id === product.order);
          const productDate = getDate(product.date);
          return (
            <Item key={product.id} isnew={product.isNew}>
              <div>
                <img src={"../../" + product.photo} alt={product.title} />
              </div>
              <div>
                <div>
                  <Underlined>{product.title}</Underlined>
                  <Smaller>SN: {product.serialNumber}</Smaller>
                </div>
              </div>
              <div>Свободен</div>
              <div>
                <div>
                  <Smaller>
                    c{" "}
                    {guaranteeFrom.mounthDigit +
                      " / " +
                      guaranteeFrom.day +
                      " / " +
                      guaranteeFrom.year}
                  </Smaller>
                  <div>
                    по{" "}
                    {guaranteeTo.mounthDigit +
                      " / " +
                      guaranteeTo.day +
                      " / " +
                      guaranteeTo.year}
                  </div>
                </div>
              </div>
              <div>{product.isNew ? "новый" : "Б / У"}</div>
              <div>
                <div>
                  <Smaller>{priceUSD} $</Smaller>
                  <div>{priceUAH} UAH</div>
                </div>
              </div>
              {product.group ? (
                <Underlined>{product.group}</Underlined>
              ) : (
                <div>-</div>
              )}
              {product.group ? (
                <Underlined>{product.serve}</Underlined>
              ) : (
                <div>-</div>
              )}
              <Underlined>{order.title}</Underlined>
              <div>
                <div>
                  <Smaller>
                    {productDate.mounthDigit} / {productDate.day}
                  </Smaller>
                  <div>
                    {productDate.day} / {productDate.mounth} /{" "}
                    {productDate.year}
                  </div>
                </div>
              </div>
              <div>
                <ButtonRemove
                  handler={() => {
                    setShowModal(true);
                    setOrderId(product.order);
                    setProductId(product.id);
                  }}
                />
              </div>
            </Item>
          );
        })}
      </List>
    </>
  );
};
