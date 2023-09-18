import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import QRCodeGenerator from './FindMore/QRCodeGenerator';
import FindMore from "./FindMore/FindMore";



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ChooseNav() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        label="Data Visualization"
                        {...a11yProps(0)}
                        sx={{
                            color: '#013923',
                            fontWeight: value === 0 ? 'bold' : 'normal', // 设置字体加粗
                        }}
                    />
                    <Tab
                        label="Raw Data"
                        {...a11yProps(1)}
                        sx={{
                            color: '#013923',
                            fontWeight: value === 1 ? 'bold' : 'normal', // 设置字体加粗
                        }}
                    />
                    <Tab
                        label="Setting"
                        {...a11yProps(2)}
                        sx={{
                            color: '#013923',
                            fontWeight: value === 2 ? 'bold' : 'normal', // 设置字体加粗
                        }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Raw Data
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <FindMore />
            </CustomTabPanel>
        </Box>
    );
}