// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InvestmentRow = ({ investment }: { investment: any }) => {
  const { label, code, quantity, valuation, last_update, unitvalue } =
    investment;

  return (
    <div className="w-full flex border-b-2 mb-2 text-muted-foreground text-sm">
      <div className="w-1/2">
        <p className="font-bold text-primary">{label}</p>
        <p>{last_update}</p>
      </div>
      <div className="w-1/6">
        <p>q : {quantity}</p>
        <p>€ : {valuation}</p>
      </div>
      <div className="w-1/6">
        <p>{(valuation / quantity).toFixed(2)}</p>
        <p>{unitvalue}</p>
      </div>
    </div>
  );
};
