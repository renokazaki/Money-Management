"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";

import { Transaction } from "@/types/type";
import CalenderHeader from "./header/CalenderHeader";
import Days from "./contents/Days";

const Calender = ({ transactions }: { transactions: Transaction[] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Card>
      <CalenderHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <Days currentDate={currentDate} transactions={transactions} />
    </Card>
  );
};

export default Calender;
