import { makeStyles } from '@mui/styles';
import bannerImg from './loginBanner.png'

const useStyles = makeStyles((theme) => ({
    pageBackground: {
        width: '100vw',
        height: '100vh',
        background: `radial-gradient(circle at 68% 10%, rgba(255, 255, 255, 1) 28%, rgba(168, 125, 238, 1) 70%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat',
    },
    loginParent: {
        width: '80vw',
        height: '80vh',
        backgroundColor: '#fff',
        border: '1px solid rgba(168, 125, 238, 1)',
        padding: '45px',
        display: 'flex'
    },
    loginForm: {
        width: '40%',
        height: '100%',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-evenly'

    },
    signupText: {
        color: '#8e6ed5', 
        textDecoration: 'underline', 
        cursor: 'pointer' 
    },
    bannerImageParent: {
        width: '60%',
        height: '100%',
    },
    bannerImage: {
        background: `url(${bannerImg}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
    }
})
)

export default useStyles;