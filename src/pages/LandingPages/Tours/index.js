/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import {
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import TourCards from "./TourCards";
// import TourCards from "./TourCards";

const toursData = [
  { id: 1, name: "Tour 1", location: "Location 1", duration: "3 days", price: "$200" },
  { id: 2, name: "Tour 2", location: "Location 2", duration: "5 days", price: "$300" },
  // Add more tour data as needed
];

function ToursPage() {
  //   const [rememberMe, setRememberMe] = useState(false);

  //   const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [loading] = useState(true);
  const [filteredTours] = useState(toursData);
  const [sortOption] = useState("");
  const [tours, setTours] = useState(null);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        // const SERVER_URL = process.env.SERVER_URL; // Retrieve server URL from environment variables
        const response = await axios.get(`https://shy-tan-seagull-kilt.cyclic.app/tours`); // Make a GET request to the server
        setTours(response.data); // Store response data in state variable
        console.log("Response Data is ---", tours);
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
    };

    fetchServerData(); // Call the function to fetch server data when component mounts
  }, []);

  const handleFilterChange = () => {
    // Implement filtering logic based on checkboxes
  };

  const handleSortChange = () => {
    // Implement sorting logic based on selected option
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "youtube",
          color: "info",
        }}
      />

      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        ></Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
      <div style={{ backgroundColor: "#F0F8FF", minHeight: "100vh", padding: "16px" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" style={{ color: "#000000", marginBottom: "16px" }}>
            Explore Tours in North Eastern India
          </Typography>
          <FormControl component="fieldset">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={3}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="State 1"
                  onChange={handleFilterChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="State 2"
                  onChange={handleFilterChange}
                />
              </Grid>
              {/* Add more checkboxes for filtering */}
            </Grid>
          </FormControl>
          <FormControl variant="outlined" style={{ marginBottom: "16px" }}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              labelId="sort-label"
              value={sortOption}
              onChange={handleSortChange}
              label="Sort By"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="duration">Duration</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            {loading
              ? Array.from(Array(6).keys()).map((index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card style={{ marginBottom: "16px" }}>
                      <CardContent>
                        <Skeleton variant="rectangular" height={150} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : filteredTours.map((tour) => (
                  <Grid item xs={12} sm={6} md={4} key={tour.id}>
                    <Card style={{ marginBottom: "16px" }}>
                      <CardContent>
                        <Typography variant="h6">{tour.name}</Typography>
                        <Typography>{tour.location}</Typography>
                        <Typography>{tour.duration}</Typography>
                        <Typography>{tour.price}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </div>
      {tours?.length > 0 && <TourCards tours={tours} />}
    </>
  );
}

export default ToursPage;
