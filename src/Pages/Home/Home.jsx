import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './HomeStyles';
import { logout } from '../../slice/login';
import { useNavigate } from 'react-router-dom';
import LoadingModal from '../../Components/LoadingModal';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLgModal, setShowLgModal] = useState(false)
  const userRole = localStorage.getItem("userRole")

  const handleLogout = () => {
    setShowLgModal(true)
    dispatch(logout())
    setTimeout(() => {
      setShowLgModal(false)
      navigate('/')
    }, 2000);
  }
  
  return (
    <>
      <Box className={classes.homeParent}>
        <Box className={classes.logoutParent}>
          <Typography variant="h4" textAlign={'center'} color={'#893dff'} gutterBottom>
            Homepage
          </Typography>
          <Typography variant="h6" textAlign={'center'} gutterBottom>
            !!!...Welcome to the Homepage...!!!
          </Typography>
          <Typography variant="h6" textAlign={'center'} gutterBottom>
            User Role: {userRole}
          </Typography>
          <Box className={classes.logoutButtonParent} sx={{ mt: 6 }}>
            <Typography variant="h6" textAlign={'center'} gutterBottom>
              Click the button below to logout
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
      {
        showLgModal ? <LoadingModal open={showLgModal} modalText="Logging out..." /> : ''
      }
    </>
  )
}

export default Home