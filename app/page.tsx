import React from "react";
import DashBoardHeader from "@/components/dashBoard/dashBoardHeader/DashBoardHeader";
import { Graph } from "@/components/dashBoard/dashBoardGraph/Graph";

const Home = () => {
  return (
    <div>
      {/* ダッシュボードヘッダー */}
      <DashBoardHeader />
      {/* ダッシュボードグラフ */}
      <Graph />
    </div>
  );
};

export default Home;
