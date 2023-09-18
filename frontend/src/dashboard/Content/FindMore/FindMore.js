import React, { useState } from 'react';
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import QRCodeGenerator from './QRCodeGenerator';
import DownloadCSV from './DownloadCSV';
import ResetPass from './ResetPass';

const FindMore = () => {
    const [openQRCode, setOpenQRCode] = useState(false); // 用于控制 Dialog 显示/隐藏的状态

    const handleQrCodeIconClick = () => {
        setOpenQRCode(true); // 点击图标时打开 Dialog
    };

    const handleCloseQRCode = () => {
        setOpenQRCode(false); // 关闭 Dialog
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MenuItem>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={handleQrCodeIconClick}
                    >
                        <Badge badgeContent={''} color="error">
                            <QrCode2Icon
                                sx={{
                                    width: 150,
                                    height: 150,
                                }}
                            />
                        </Badge>
                    </IconButton>
                </MenuItem>

                {/* 使用 Dialog 来显示 QRCodeGenerator 组件 */}
                <Dialog open={openQRCode} onClose={handleCloseQRCode}>
                    <DialogTitle>QR Code</DialogTitle>
                    <DialogContent>
                        <QRCodeGenerator text="Bob,12345" />
                    </DialogContent>
                    <DialogActions>
                        <CustomPrimaryButton onClick={handleCloseQRCode}>Close</CustomPrimaryButton>
                    </DialogActions>
                </Dialog>

                <DownloadCSV />

            </div>
            <ResetPass />

        </>
    );
};

export default FindMore;