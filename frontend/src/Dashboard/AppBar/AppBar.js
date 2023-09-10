import React, { useState } from "react";
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
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import QRCodeGenerator from './QRCodeGenerator';

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
  const [openQRCode, setOpenQRCode] = useState(false); // 用于控制 Dialog 显示/隐藏的状态

  const handleQrCodeIconClick = () => {
    setOpenQRCode(true); // 点击图标时打开 Dialog
  };

  const handleCloseQRCode = () => {
    setOpenQRCode(false); // 关闭 Dialog
  };

  return (
    <MainContainer>
      <LeftContainer>
        <DropdownMenu />
        <TextField
          label="Search"
          variant="outlined"
          style={{
            width: '15vw',
            backgroundColor: "white",
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
            color="inherit"
            onClick={handleQrCodeIconClick} // 点击图标时打开 Dialog
          >
            <Badge badgeContent={''} color="error">
              <QrCode2Icon />
            </Badge>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </MenuItem>
        <Spacing />
        <HostPageButton />
      </RightContainer>

      {/* 使用 Dialog 来显示 QRCodeGenerator 组件 */}
      <Dialog open={openQRCode} onClose={handleCloseQRCode}>
        <DialogTitle>QR Code</DialogTitle>
        <DialogContent>
          <QRCodeGenerator />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton onClick={handleCloseQRCode}>Close</CustomPrimaryButton>
        </DialogActions>
      </Dialog>
    </MainContainer>

  );
};

export default AppBar;
