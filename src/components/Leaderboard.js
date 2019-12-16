import React from "react";

import LeaderboardRow from "./LeaderboardRow";

const Leaderboard = ({ leaders, team }) => {
  const getFirstTen = () => leaders.slice(0, 10);

  const getAroundMe = () => {
    const myClicks = leaders.find(l => l.team === team);
    if (!myClicks) {
      return [{ team: "This team doesn't exist, click to create!" }];
    }
    const myOrder = myClicks && myClicks.order;
    if (myOrder < 4) {
      return leaders.slice(0, 7);
    } else if (myOrder > leaders.length - 3) {
      return leaders.slice(leaders.length - 7, leaders.length);
    } else {
      return leaders.slice(myOrder - 4, myOrder + 3);
    }
  };

  const getLeaders = () => {
    return team ? getAroundMe() : getFirstTen();
  };

  return (
    <>
      {leaders &&
        getLeaders().map((leader, key) => (
          <LeaderboardRow
            key={key}
            {...leader}
            current={leader.team === team}
          />
        ))}
    </>
  );
};

export default Leaderboard;
