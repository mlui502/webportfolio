import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch  } from 'react-redux';

import { getPosts, deletePost } from '../../actions/posts';
import Posts from './../Posts/Posts';
import Form from './../Form/Form';
import useStyles from '../../styles';
import Page from '../Page/Page';


const App = () =>{
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    return(
            <Container maxwidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Anton Lui</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />  
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
    );
}

export default App;