import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import uuidv4 from "uuid";
import _ from "lodash";

import Header from "../layout/Header";
import HeaderRow from "../layout/HeaderRow";
import Background from "../layout/Background";
import PageContainer from "../layout/PageContainer";
import Content from "../layout/Content";
import Leaderboard from "../Leaderboard";
import { Button } from "../Button";
import { increment } from "../../actions/clickActions";
import { setSession } from "../../actions/sessionActions";
import { fetchData } from "../../actions/leadersActions";
import { appliftingBlue } from "../../constants";
import Footer from "../layout/Footer";
import ContentHeading from "../layout/ContentHeading";

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Counter = styled.div`
  font-size: 3.8rem;
  color: ${appliftingBlue};
`;

const ClickPage = ({
  leaders,
  clicks,
  fetchData,
  increment,
  setSession,
  session
}) => {
  const { team } = useParams();

  useEffect(() => {
    setSession(uuidv4());
  }, [setSession]);

  useEffect(() => {
    fetchData();
  }, [clicks, fetchData]);

  const handleClick = e => {
    e.preventDefault();
    fetchData();
    increment(team, session);
  };

  const getClicks = () => {
    const myTeam = leaders && leaders.find(l => l.team === team);
    return myTeam && myTeam.clicks;
  };

  return (
    <>
      <Background>
        <PageContainer>
          <Header>
            <Button onClick={e => handleClick(e)} />
            <HeaderRow>
              <Box>
                <div>Your clicks:</div>
                <Counter>{!_.isEmpty(clicks) ? clicks.your_clicks : 0}</Counter>
              </Box>
              <Box>
                <div>Team clicks:</div>{" "}
                <Counter>
                  {!_.isEmpty(clicks) ? clicks.team_clicks : getClicks()}
                </Counter>
              </Box>
            </HeaderRow>
          </Header>
          <ContentHeading />
          <Content>
            <Leaderboard leaders={leaders} team={team} />
          </Content>
          <Footer>{"Want to be top? STFU and click!"}</Footer>
        </PageContainer>
      </Background>
    </>
  );
};

const mapStateToProps = ({ leaders, clicks, session }) => ({
  leaders,
  clicks,
  session
});

export default connect(mapStateToProps, { increment, fetchData, setSession })(
  ClickPage
);
