import { FC } from "react";
import { FiledSet } from "./fieldSet";

type SwitchFieldProps = {
  value: TabType;
};

type TabType = "割引券" | "引換券" | "会員券" | null;

export const SwitchField: FC<SwitchFieldProps> = ({ value }) => {
  switch (value) {
    case "割引券":
      return <DiscountField />;
    case "引換券":
      return <ExchangeField />;
    case "会員券":
      return <MemberField />;
    default:
      return null;
  }
};

export const DiscountField = () => {
  return (
    <>
      <FiledSet title={"金額"} />
    </>
  );
};

export const ExchangeField = () => {
  return (
    <>
      <FiledSet title={"引換対象の商品・サービス"} />
    </>
  );
};

export const MemberField = () => {
  return (
    <>
      <FiledSet title={"引換対象"} />
    </>
  );
};
