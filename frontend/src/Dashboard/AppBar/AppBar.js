import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import HostPageButton from "./HostPageButton";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "70px",
  borderBottom: "1px solid black",
  backgroundColor: "#CAE7D4",
  width: "calc(100% - 280px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const LeftContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const RightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
});

const Spacing = styled("div")({
  marginRight: "10px", // 添加右侧边距
});

const AppBar = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <DropdownMenu />
        <TextField
          label="Search"
          variant="outlined"
          style={{ width: '15vw',
          backgroundColor:"white",  
        }} 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </LeftContainer>
      <RightContainer>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </MenuItem>
        <Spacing /> {/* 这里添加一个空白的 div 来设置间距 */}
        <HostPageButton />
      </RightContainer>
    </MainContainer>
  );
};

export default AppBar;
