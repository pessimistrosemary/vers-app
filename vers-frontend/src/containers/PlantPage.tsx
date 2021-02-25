import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { getData, getSession } from "src/selectors";
import { Plant } from "src/kernel";
import PlantCard from "src/components/cards/PlantCard";
import { selPlant, saveData, delData } from "src/slices/data";
import MyDialog from "src/components/commons/Dialog";
import PlantForm from "src/components/forms/PlantForm";
import { logout } from "src/slices/session";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  settings: {
    marginLeft: "auto",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  addCircleIcon: {
    width: "40%",
    height: "40%",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    height: "15%",
  },
  form: {},
  formTitle: {
    height: "15%",
  },
  formContent: {
    height: "85%",
  },
}));

interface IPlantPageProps {}

const PlantPage: React.FunctionComponent<IPlantPageProps> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { plants: lst, newPlant } = useSelector(getData);
  const { user, feedback } = useSelector(getSession);

  const handlePlantSelect = (id: number) => {
    dispatch(selPlant(id));
    history.push("/dashboard");
  };

  const handleDeleteOnClick = (id: number) => {
    dispatch(delData(lst[id]));
  };

  const [formOpen, setFormOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(newPlant);
  React.useEffect(() => {
    setFormData(newPlant);
  }, [newPlant]);
  React.useEffect(() => {
    setFormOpen(!!feedback);
  }, [feedback]);

  const handleSubmit = (data: Plant) => {
    dispatch(saveData(data));
    setFormOpen(false);
  };
  const handleEditOnClick = (id: number) => {
    setFormData(lst[id]);
    setFormOpen(true);
  };
  const handleFormClose = () => {
    setFormOpen(false);
    //onReset();
  };

  const handleCreateOnClick = () => {
    setFormData(newPlant);
    setFormOpen(true);
  };

  const canEdit = () => {
    return user?.is_superuser ? true : user?.vers_user.plant_group === 1;
  };

  const [
    settingsAnchorEl,
    setSettingsAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleViewProfile = () => {
    history.push("/user");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Plants
          </Typography>
          <div className={classes.settings}>
              <Typography variant="caption">
                {user ? user.username : "Guest"}
              </Typography>
              <IconButton color="inherit" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Object.values(lst).map((p: Plant, idx: number) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <PlantCard
                  p={p}
                  onClick={() => handlePlantSelect(p.id)}
                  onDelete={
                    canEdit() ? () => handleDeleteOnClick(p.id) : undefined
                  }
                  onEditClick={
                    canEdit() ? () => handleEditOnClick(p.id) : undefined
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  className={classes.cardContent}
                  onClick={handleCreateOnClick}
                >
                  <AddCircleOutlineIcon className={classes.addCircleIcon} />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Schneider Electric
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Life is On!
        </Typography>
      </footer>
      {/* End footer */}
      <Menu
        id="simple-menu"
        anchorEl={settingsAnchorEl}
        keepMounted
        open={Boolean(settingsAnchorEl)}
        onClose={handleSettingsClose}
      >
        <MenuItem onClick={handleViewProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <MyDialog open={formOpen} onClose={handleFormClose}>
        <div className={classes.form}>
          <div className={classes.formTitle}>
            <Typography
              className={classes.title}
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {formData && formData.id === -1
                ? "Create New Plant"
                : "Edit Plant"}
            </Typography>
          </div>
          <div className={classes.formContent}>
            {formData ? (
              <PlantForm
                data={formData}
                feedback={feedback}
                onSubmit={handleSubmit}
                onCancel={handleFormClose}
              />
            ) : null}
          </div>
        </div>
      </MyDialog>
    </React.Fragment>
  );
};

export default PlantPage;
