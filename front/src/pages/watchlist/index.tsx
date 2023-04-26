import React, { FC } from 'react'

import { Grid, Typography } from '@mui/material'
import { useStyles } from './styles'

const WatchlistPage: FC = (): JSX.Element => {
    const classes = useStyles()




    return (
        <Grid className={classes.root}>
            <Grid className={classes.watchlistHeading}>
                <Typography variant="h2" className={classes.heading}>
                    Избранное
                </Typography>
            </Grid>

        </Grid>
    )
}

export default WatchlistPage
