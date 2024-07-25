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

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import ToursPage from "pages/LandingPages/Tours";
const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "tours",
            route: "/pages/landing-pages/tours",
            component: <ToursPage />,
          },
          {
            name: "gallery",
            route: "/pages/landing-pages/tours",
            component: <ToursPage />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "adventure styles",
    icon: <Icon>hiking</Icon>,
    collapse: [
      {
        name: "Treks",
        description: "See all treks",
        dropdown: true,
        collapse: [
          {
            name: "dzukou valley trek",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "pindari glacier trek",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "hikes",
        description: "See all hikes",
        dropdown: true,
        collapse: [
          {
            name: "bamboo trail hike",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "sielkal peak hike",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "od-rngai falls hike",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
          {
            name: "thiyopani waterfall hike",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "camping",
        description: "See all camping activites",
        dropdown: true,
        collapse: [
          {
            name: "overnight camping at samviti",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "overnight camping at garbhanga",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "waterfall climbing/rappeling",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "rappeling at noonmati",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "waterfall climbing in basistha",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "chimney climbing in guwahati",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "vehicle hire",
    icon: <Icon>moped</Icon>,
    collapse: [
      {
        name: "hire a motorcycle",
        description: "Scooters, Motorcycle from 100-150cc available",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "hire a bicycle",
        description: "Geared and Non Geared bicycles available",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "hire a four wheeler",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "accommodation",
    icon: <Icon>house</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "package tours",
    icon: <Icon>luggage</Icon>,
    collapse: [
      {
        name: "assam",
        description: "All Tours of Assam",
        dropdown: true,
        collapse: [
          {
            name: "Tour of Kaziranga ",
            description: "(2D/1N)",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Upper Assam Tour",
            description: "(2D/1N)",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Tour of Majuli",
            description: "(2D/1N)",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Tour of Guwahati ",
            description: "(1D)",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Lower Assam Tour",
            description: "(2D/1N)",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "meghalaya",
        description: "See all hikes",
        dropdown: true,
        collapse: [
          {
            name: "Shillong - Mawlynnong - Dawki - Sohra - Laitlum",
            description: "(3D/2N)",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "Shillong - Dawki - Sohra - Nongriat - Dawki - Shnongpdeng",
            description: "(4D/3N)",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "od-rngai falls hike",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
          {
            name: "thiyopani waterfall hike",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "arunachal pradesh",
        description: "See all camping activites",
        dropdown: true,
        collapse: [
          {
            name: "overnight camping at samviti",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "overnight camping at garbhanga",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "nagaland",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "rappeling at noonmati",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "waterfall climbing in basistha",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "chimney climbing in guwahati",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "manipur",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
      {
        name: "sikkim",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
];

export default routes;
