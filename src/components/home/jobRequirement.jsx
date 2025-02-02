
import { Button, Grid, Typography } from "@mui/material";
import { SectionCardStyle } from "../assets/MUIstyles/homeStyle";
import {
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
} from "../assets/Berenia/FlatCard";
import JoinUs from "../static/images/jpg/joinus.jpg";

const classes = SectionCardStyle;

const JobRequirement = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={classes.main}
    >
      
      <Grid item xs={12} md={6} sx={classes.imageArea}>
        <img
          src={JoinUs}
          style={classes.image}
        />
      </Grid>
      <Grid item xs={12} md={6} data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-duration="600">
        <Typography
          component="div"
          variant="h3"
          sx={classes.textArea}
        >
          Easy Way To Meet <br/>The job requirement
        </Typography>
        <Typography
          sx={classes.text}
        >
          We have Created System that will help you proficient in your skills
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat...
          <Button variant="outlined">Read more</Button>
        </Typography>
      </Grid>
     
    </Grid>
  );
};

export default JobRequirement;
