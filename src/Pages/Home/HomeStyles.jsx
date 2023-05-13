import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    homeParent: {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(300deg, rgba(0, 0, 255, 1) 0%, rgba(238, 130, 238, 1) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutParent: {
        width: '70%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: '15px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutButtonParent: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        width: '40%'
    }
})
)

export default useStyles;