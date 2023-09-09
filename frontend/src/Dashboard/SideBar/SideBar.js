import React from "react";
import { styled } from "@mui/system";
import FriendsTitle from "./NavTitle";
import BasicAccordion from "./NavContent";

const MainContainer = styled("div")({
  width: "250px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#c9f0d8",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <FriendsTitle title="Vis-Cat" />
      <BasicAccordion />
    </MainContainer>
  );
};

export default FriendsSideBar;
