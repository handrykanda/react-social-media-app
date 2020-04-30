import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  rootph: {
    margin: theme.spacing(2),
    maxWidth: "100%",
    position: "relative",
    marginBottom: 20,
    paddingBottom: 20,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  const content = Array.from({ length: 4 }).map((item, index) => (
    <Card className={classes.rootph}>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="30%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="50%" />}
      />
      <CardContent>
        <Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </Fragment>
      </CardContent>
      <CardActions disableSpacing>
        <Skeleton animation="wave" variant="circle" width={10} height={10} />
        <Skeleton
          animation="wave"
          height={10}
          width="15%"
          style={{ marginLeft: 30 }}
        />
        <Skeleton
          animation="wave"
          variant="circle"
          width={10}
          height={10}
          style={{ marginLeft: 300 }}
        />
      </CardActions>
    </Card>
  ));

  return <Fragment>{content}</Fragment>;
}
