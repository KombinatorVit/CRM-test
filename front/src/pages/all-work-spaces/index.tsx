import React, {FC} from "react";
import {Grid, Typography} from "@mui/material";
import {useStyles} from "./styles";

const AllWorkSpaces: FC = (): JSX.Element => {
    const classes = useStyles();


    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant="h2">All Workspaces

                </Typography>
            </Grid>
        </Grid>
    );
};

export default AllWorkSpaces;
