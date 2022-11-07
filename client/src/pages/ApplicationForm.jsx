import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Commitments from "../components/Form/Commitments";
import MotivationQuestions from "../components/Form/MotivationQuestions";
import ScreeningQuestions from "../components/Form/ScreeningQuestions";

export default function ApplicationForm() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" style={{ backgroundColor: "white" }}>
        <ScreeningQuestions/>
        <MotivationQuestions/>
        <Commitments/>
      </Container>
    </Box>
  );
}
