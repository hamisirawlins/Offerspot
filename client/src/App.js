import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import offers from './img/Offers.png';

import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

import useStyles from './styles';

const App = ()=> {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={offers} alt="offers" height="60"/>
                <Typography className={classes.heading} variant="h2" align="center">
                    The Ultimate Offers Spot            
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;