import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Alert, AlertColor, Button, Grid, Snackbar, Typography,} from "@mui/material";
import FlexBetween from "../../components/flex-between";
import {useStyles} from "./styles";

const SingleAssetPage: FC = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [severity, setSeverity] = useState<AlertColor>("success");
    const navigate = useNavigate();
    const classes = useStyles();


    return (
        <>
            (
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.assetName}>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.card}>
                    <Grid className={classes.cardItem}>
                        <FlexBetween>

                            <Typography
                                variant="h2"
                                className={classes.assetSymbol}
                            >
                            </Typography>
                        </FlexBetween>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.card}>
                    <Grid className={classes.cardItem}>
                        <FlexBetween>


                        </FlexBetween>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.card}>
                    <Grid container className={classes.cardItem}>


                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.card}>
                    <Grid className={classes.cardItem}>
                        <Typography
                            variant="h2"
                            className={classes.cardTitle}
                        >
                        </Typography>

                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    className={classes.cardButtonBlock}
                >
                    <Button
                        color="success"
                        variant="outlined"
                        className={classes.cardButton}
                        onClick={() => navigate(-1)}
                    >
                        Назад
                    </Button>
                    <Button
                        color="success"
                        variant="outlined"
                        className={classes.cardButton}
                    >
                        Добавить в избраное
                    </Button>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000}>
                    <Alert severity={severity} sx={{width: "100%"}}>
                        {!error ? "Success!" : "Ooops"}
                    </Alert>
                </Snackbar>
            </Grid>

        </>
    );
};

export default SingleAssetPage;
