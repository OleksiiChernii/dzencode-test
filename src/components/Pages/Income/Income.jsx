import React from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../../redux/selectors";
import { IncomeDescription } from "./IncomeDescription";
import { Item, List } from "./Income.styled";
import { SectionTitle } from "../../Title/Title";

export const Income = () => {
  const orders = useSelector(selectOrders);

  return (
    <>
      <SectionTitle title="Приходы" size={orders.length} add />
      <List>
        {orders.map((order) => (
          <Item key={order.id}>
            <IncomeDescription order={order} />
          </Item>
        ))}
      </List>
    </>
  );
};
