import React from 'react';
import ChooseNav from './ChooseNav';
import { styled } from "@mui/system";

const MainContainer = styled("div")({
    flexGrow: 1,
    backgroundColor: "white",
    marginTop: "70px",
    display: "flex",
  });
const Content = () => {
    return <MainContainer>
    <ChooseNav />
  </MainContainer>;
  };

export default Content;