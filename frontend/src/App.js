import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import SvgIcon from '@material-ui/core/SvgIcon';
import Popover from '@material-ui/core/Popover';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
}

function MyPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Filters
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <CheckboxesGroup />
      </Popover>
    </div>
  );
}

function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <body>
    <div style={{display: "flex"}}>
      <button style = {{filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.31))", borderRadius: "40px",
      color : "black", fontFamily: "Playfair Display", backgroundColor: "#F1F8FF", outline: "none", border: "none",
      cursor: "pointer", float: "left", height: "43px", width: "150px", margin: "30px", fontSize: "18px"}}>Add Post</button>

      <div style={{margin: "auto"}}>
        <h1 style={{textAlign: "center", fontFamily: "Playfair Display SC", fontWeight: "normal",
        fontStyle: "normal", fontSize: "48px", lineHeight: "64px", textTransform: "uppercase",
        margin:"15px"}}>Content Compiler</h1>
      </div>

      <div>

        <button style = {{filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.31))",
        borderRadius: "40px", color : "black", fontFamily: "Playfair Display", backgroundColor: "#C1DAFF", outline: "none", border: "none",
        cursor: "pointer", float: "right", height: "43px", width: "141px", margin: "30px 10px", fontSize: "18px" }}>Create Account</button>

        <button style = {{filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.31))",
        borderRadius: "40px", color : "black", fontFamily: "Playfair Display", backgroundColor: "white", outline: "none", border: "none",
        cursor: "pointer", float: "right", height: "43px", width: "97px", margin: "30px 10px", fontSize: "18px"}}>Log In</button>
      </div>
    </div>

    <div>
      <Grid
        container spacing={1}
        direction = "row"
        justify = "flex-end"
        alignItems="flex-end"
        >
          <Grid Item>
            <SearchIcon fontSize ="large"/>
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              placeholder = "Search:"
              variant = "outlined"
              // style = {{backgroundColor : "#ECE9F5"}}
              size = "small"
              />
          </Grid>
          <Grid item>
            <FilterListIcon fontSize = "large"/>
          </Grid>
          <Grid item>
            <MyPopover />
          </Grid>
      </Grid>
    </div>

    <div className="App-mostPopular">
      <div>
        <SvgIcon className="SvgIcon" fontSize = "large">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 20.9792L10.9375 22.3333C4.06251 16.1875 0.520844 12.9583 0.520844 9C0.520844 7.75 0.93751 6.60417 1.56251 5.66667V6.29167C1.56251 11.1875 5.62501 14.8333 12.5 20.9792ZM14.1667 16.7083C19.0625 12.2292 22.3958 9.3125 22.5 6.29167C22.5 4.20833 20.9375 2.64583 18.8542 2.64583C17.1875 2.64583 15.625 3.6875 15.1042 5.14583H13.125C12.5 3.6875 10.9375 2.64583 9.37501 2.64583C7.29168 2.64583 5.72918 4.20833 5.72918 6.29167C5.72918 9.3125 8.95834 12.2292 13.9583 16.7083L14.0625 16.8125L14.1667 16.7083ZM18.75 0.5625C21.9792 0.5625 24.4792 3.0625 24.4792 6.29167C24.4792 10.1458 20.9375 13.375 14.0625 19.625C7.18751 13.4792 3.64584 10.25 3.64584 6.29167C3.64584 3.0625 6.14584 0.5625 9.37501 0.5625C11.1458 0.5625 12.9167 1.39583 14.0625 2.75C15.2083 1.39583 16.9792 0.5625 18.75 0.5625Z" fill="black"/>
          </svg>
        </SvgIcon>
      </div>
      <div>
        <h1
          fontFamily = "Playfair Display"
          style ={{textDecoration : "underline"}}>
          Most Popular
        </h1>
      </div>
    </div>

    <div>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            POG
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </body>
  );
}

export default App;
