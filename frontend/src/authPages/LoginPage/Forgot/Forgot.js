import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import ForgotInputs from './ForgotInputs';
import ForgotFooter from './ForgotFooter';
import { connect } from "react-redux";
import { getActions } from '../../../store/actions/authActions';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import axios from 'axios';


const Forgot = ({ sendEmail }) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 3000);
    }
  };




  const history = useNavigate();
  const [mail, setMail] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubscribe = () => {
  //   const userDetails = {
  //     mail,
  //   }
  //   sendEmail( userDetails, history );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClick();
    axios.post(`http://localhost:5002/api/auth/send-email`, { mail }, { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "Success") {
          history('/login');
          handleClose();
        }
      })
      .catch((err) => console.log(err));
  }


  return (
    <div>
      <Button
        onClick={handleClickOpen}
        style={{
          background: 'transparent',
          color: 'black',
          border: 'none',
        }}
      >
        Forgor your password?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <ForgotInputs
            mail={mail}
            setMail={setMail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleSubscribe}>Subscribe</Button> */}
          <Box sx={{ m: 1, position: 'relative' }}>
            <ForgotFooter
              handleSubscribe={handleSubmit}
              sx={buttonSx}
              disabled={loading}
            />
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(Forgot);