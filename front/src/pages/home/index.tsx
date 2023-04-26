import React, {FC} from "react";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";

const HomePage: FC = (): JSX.Element => {

    const classes = useStyles();

return (
    <Box className={classes.root}>
        <Grid container spacing={2} className={classes.areaChart}>
        </Grid>
        <Grid container className={classes.lineChartBlock}>
            <Grid item xs={12} sm={12} lg={12}>
            </Grid>
        </Grid>
        <Grid container className={classes.topPriceRoot}>
            <Grid item xs={12} sm={12} lg={12}>
                )
            </Grid>
        </Grid>
    </Box>
);
}

export default HomePage;
