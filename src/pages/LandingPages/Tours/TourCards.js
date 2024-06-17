import React from "react";
import PropTypes from "prop-types";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

const TourCards = ({ tours }) => {
  return (
    <Grid container spacing={2}>
      {tours.map((tour) => (
        <Grid item key={tour._id} xs={12} sm={6} md={4}>
          <Card
            style={{
              maxWidth: 300,
              margin: 16,
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
              borderRadius: 8,
            }}
          >
            <CardMedia
              style={{ height: 200, objectFit: "cover" }}
              image={tour.image}
              title={tour.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {tour.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {tour.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: ${tour.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: {tour.duration} days
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Available Spots: {tour.availableSpots}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Difficulty Level: {tour.difficultyLevel}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

TourCards.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TourCards;
