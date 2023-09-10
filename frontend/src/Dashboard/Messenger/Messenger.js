import React from "react";
import { styled } from "@mui/system";
import BasicTabs from "./TabButton";


const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "white",
  marginTop: "70px",
  display: "flex",
});

const Messenger = () => {
  return <MainContainer>
    <BasicTabs />
  </MainContainer>;
};

export default Messenger;
