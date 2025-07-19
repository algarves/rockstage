import { HomePageStarredEntities } from "@backstage/plugin-home";
import { HomePageSearchBar } from "@backstage/plugin-search";
import { Container, Grid } from "@material-ui/core";

export const HomePage = () => {
  return (
    <Container>
        <h1>Welcome to the Rockstage 🤘🏻</h1>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <HomePageStarredEntities />
            </Grid>
            <Grid item xs={6}>
                <HomePageSearchBar placeholder="Search" />
            </Grid>
        </Grid>
    </Container>
  );
}
export default HomePage;