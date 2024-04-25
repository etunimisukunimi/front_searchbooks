import { useState, useEffect } from "react";

export function Amount({ totalAmount }) {
  return (
    <div className="amount_block" >
      <h4>Found {totalAmount.totalItems} results</h4>
    </div>
  );
}
