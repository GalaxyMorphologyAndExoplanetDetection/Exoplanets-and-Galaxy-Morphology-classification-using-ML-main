// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "AI in Space Science",
    image: logoCT,
    route: "/",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/CreativeTim/",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/creativetim",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "Sandesh Bhat",
      items: [
        {
          name: <GitHubIcon />,
          href: "https://github.com/San411",
        },
        { name: <LinkedIcon />, href: "https://www.linkedin.com/in/sandesh-bhat-0243241aa/" },
      ],
    },
    {
      name: "Rahul Noronha",
      items: [
        { name: <GitHubIcon />, href: "https://github.com/rahulnoronha" },
        { name: <LinkedIcon />, href: "https://www.linkedin.com/in/rahul-noronha-77a020189/" },
      ],
    },
    {
      name: "Sahana M",
      items: [
        { name: <GitHubIcon />, href: "https://www.linkedin.com/in/sahanamohan7/" },
        { name: <LinkedIcon />, href: "https://www.linkedin.com/in/sahanamohan7/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://github.com/GalaxyMorphologyAndExoplanetDetection?view_as=public"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        DSU
      </MKTypography>
      .
    </MKTypography>
  ),
};
