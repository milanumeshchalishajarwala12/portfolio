import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MediaCarousel from "../MediaCarousel";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../../Contexts/FirebaseContext";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "../../Utils/firebaseUtils";
import Navbar from "../Navigation/Navbar";
const LandingScreen = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="landingScreen">
      <Navbar />
      <Grid container direction={"column"}>
        <Grid item className="carouselImageContainer">
          <MediaCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingScreen;
