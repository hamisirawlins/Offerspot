import React,{useState,useEffect} from 'react';
import {AppBar, Button, Avatar, Typography,Toolbar} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';


import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const dispatch= useDispatch();
    const history = useHistory();
    const location= useLocation();

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = ()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
        setUser(null);
    };

    useEffect(()=>{
        const token = user?.token;
        if (token) {
            const decodedToken= decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        };

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location ]);

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >Offerspot</Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="container" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
            </Toolbar>    
</AppBar>
);
}
export default Navbar;