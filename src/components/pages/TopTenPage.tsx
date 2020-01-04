import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import uuidv4 from "uuid";
import styled from "styled-components";

import Header from "../layout/Header";
import HeaderRow from "../layout/HeaderRow";
import Background from "../layout/Background";
import PageContainer from "../layout/PageContainer";
import { Button } from "../Button";
import { Input } from "../Input";
import { increment } from "../../actions/clickActions";
import { fetchData } from "../../actions/leadersActions";
import { appliftingBlue, globalWhite } from "../../constants";
import Content from "../layout/Content";
import Leaderboard from "../Leaderboard";
import Footer from "../layout/Footer";
import ContentHeading from "../layout/ContentHeading";
import { Leader, Clicks } from "../../common/types";

const TopTen = styled.div`
  font-size: 1.8rem;
  margin-top: 1.6rem;
  padding: 0.6rem 1.8rem;
  background-color: ${appliftingBlue};
  color: ${globalWhite};
`;

const AlignedRow = styled(HeaderRow)`
  align-items: flex-end;
`;

interface TopTenPage {
  leaders: Array<Leader>;
  fetchData: () => void;
  increment: (team: string, session: string) => void;
}

const TopTenPage: React.FC<TopTenPage> = ({
  leaders,
  fetchData,
  increment
}) => {
  const [inputText, setInputText] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputText.length < 1) {
      alert("Fill some team name!");
      return;
    }
    history.push(`/${inputText}`);
    increment(inputText, uuidv4());
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <Background>
      <PageContainer>
        <Header>
          <AlignedRow>
            <Input value={inputText} onChange={e => onChange(e)} />
            <Button onClick={e => handleClick(e)} small={true} />
          </AlignedRow>
          <HeaderRow>
            <TopTen>{"TOP 10 CLICKERS:"}</TopTen>
          </HeaderRow>
        </Header>
        <ContentHeading />
        <Content>
          <Leaderboard leaders={leaders} />
        </Content>
        <Footer>{"Want to be top? STFU and click!"}</Footer>
      </PageContainer>
    </Background>
  );
};

interface StateFromProps {
  leaders: Leader[];
  clicks: Clicks;
}

const mapStateToProps = ({ leaders, clicks }: StateFromProps) => ({
  leaders,
  clicks
});

export default connect(mapStateToProps, { fetchData, increment })(TopTenPage);
