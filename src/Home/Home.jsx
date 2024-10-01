import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../components/HeroSlider/HeroSlider.jsx";
import SearchHospital from "../components/SearchHospitals/SearchHospitals.jsx";
import FAQs from "../components/Sections/FAQs/FAQs.jsx";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies.jsx";
import Blogs from "../components/Sections/Blogs/Blogs.jsx";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring.jsx";
import Specialists from "../components/Sections/Specialists/Specialists.jsx";
import Specialization from "../components/Sections/Specialization/Specialization.jsx";
import Offers from "../components/Sections/Offers/Offers.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import HeroServices from "../components/IconLayout/HeroServices.jsx";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />

      <FAQs />
    </Box>
  );
}
