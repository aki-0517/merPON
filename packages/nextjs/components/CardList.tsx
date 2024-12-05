import React from "react";
import { Card } from "~~/components/Card";

type CardData = {
  title: string;
  issueDate: string;
  amount: number;
  expiryDate: string;
  usageScope: string;
};

type CardListProps = {
  cards: CardData[];
};

export const CardList = ({ cards }: CardListProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        margin: "50px auto",
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          issueDate={card.issueDate}
          amount={card.amount}
          expiryDate={card.expiryDate}
          usageScope={card.usageScope}
        />
      ))}
    </div>
  );
};
