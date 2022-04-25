import * as React from 'react';
import ProjectCard from '../Projects/ProjectCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const Invest = () => {
    const classes = useStyles();

    return (
        <div style={{display : "flex" }} >
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} sm={4}>
                <ProjectCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <ProjectCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <ProjectCard />
            </Grid>
        </Grid>
        </div>
    )
}

export default Invest;