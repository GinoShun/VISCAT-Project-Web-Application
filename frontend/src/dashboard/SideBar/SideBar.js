import React from "react";
import { styled } from "@mui/system";
import Title from "./NavTitle";
import BasicAccordion from "./NavContent";

const MainContainer = styled("div")({
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#dadada",
});

const SideBar = () => {
  return (
    <MainContainer>
      <Title title="Vis-Cat" />
      <BasicAccordion />
    </MainContainer>
  );
};

export default SideBar;