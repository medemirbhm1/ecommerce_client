import React from "react";

interface CurrencyProps {
  value: string | number;
}
const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{value} DA</div>;
};

export default Currency;
