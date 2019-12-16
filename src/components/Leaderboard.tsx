import React from "react";

import LeaderboardRow from "./LeaderboardRow";

interface Leader {
  order: number;
  team: string;
  clicks: number;
}

interface Leaderboard {
  leaders: Array<Leader>;
  team?: string;
}

const Leaderboard: React.FC<Leaderboard> = ({ leaders, team }) => {
  const getFirstTen = () => leaders.slice(0, 10);

  const getAroundMe = () => {
    const myClicks = leaders.find(l => l.team === team);
    if (!myClicks) {
      return [
        {
          order: 0,
          team: "This team doesn't exist, click to create!",
          clicks: 0
        }
      ];
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
        getLeaders().map((leader: Leader, key) => (
          <LeaderboardRow
            key={key}
            order={leader.order}
            team={leader.team}
            clicks={leader.clicks}
            current={leader.team === team}
          />
        ))}
    </>
  );
};

export default Leaderboard;
