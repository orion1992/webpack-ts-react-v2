import React from 'react';
import {Grid} from '@material-ui/core';
import {LEL, lol} from '../../utils';

export const Main = () => (
    <Grid container spacing={3}>
        <Grid item xs={6}>
            Hi
        </Grid>
        <Grid item xs={6}>
            Hi Hi Hi
            {lol}
            {LEL}
        </Grid>
    </Grid>
);
