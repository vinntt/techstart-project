import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent, CardHeader, Avatar } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AlarmIcon from "@mui/icons-material/Alarm";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function Overview() {
  return (
    <Container id="overview" maxWidth="xl" style={{ padding: "4rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Program Overview
      </Typography>
      <Grid
        container
        xs={6}
        spacing={2}
        sx={{
          rowGap: "1rem",
          margin: "auto",
        }}
      >
        {/* Card 1 */}
        <Grid item xs={6} md={6}>
          <Card
            sx={{
              height: 230,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "2px solid #0A1025",
                    width: 70,
                    height: 70,
                  }}
                >
                  <CalendarMonthIcon fontSize="large"/>
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              subheaderTypographyProps={{ variant: "body2" }}
              title="Duration"
              subheader="How long /when does it start"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="left">
                <b>Program time</b>: July 2022 – June 2023
                <br />
                <b>Fall semester</b>: study at CODE
                <br />
                <b>Spring semester</b>: 6 months integrated internship
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Card 2 */}
        <Grid item xs={6} md={6}>
          <Card
            sx={{
              height: 230,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "2px solid #0A1025",
                    width: 70,
                    height: 70,
                  }}
                >
                  <TerminalIcon fontSize="large"/>
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="Classes"
              subheader="Your learning opportunities"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="justify">
                Learn about <b>Software Engineering</b>,{" "}
                <b>Interaction Design</b>, <b>AI & Data Science</b>, or{" "}
                <b>Product Management</b>, depending on your interest and prior
                knowledge.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Card 3 */}
        <Grid
          container
          xs={6}
          md={6}
          style={{
            alignContent: "space-evenly",
            gap: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Card
            sx={{
              height: 230,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "2px solid #0A1025",
                    width: 70,
                    height: 70,
                  }}
                >
                  <EmojiEventsIcon fontSize="large"/>
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="Objective"
              subheader="What we want to achieve"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="left">
                At the end of this program, you will be ready for an{" "}
                <b>internship</b> or <b>entry-level position</b> in tech in
                Berlin.
              </Typography>
            </CardContent>
          </Card>
          {/* Card 4 */}
          <Card
            sx={{
              height: 250,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #F8F9FF",
              borderRadius: "16px",
              backgroundColor: "#3A3F56",
              color: "whitesmoke",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "2px solid #0A1025",
                    width: 70,
                    height: 70,
                  }}
                >
                  <AlarmIcon fontSize="large"/>
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="Deadlines"
              subheaderTypographyProps={{ color: "whitesmoke" }}
              subheader="Important dates to remember!"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="left">
                <b>Applications</b>: from 15 March/ 15 April 2022
                <br />
                <b>Interviews</b>: May 2nd-13th We will notify those who get
                into the program by the end of May.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Card 5 */}
        <Grid item xs={6} md={6} style={{ paddingTop: 0 }}>
          <Card
            sx={{
              height: 490,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "2px solid #0A1025",
                    width: 70,
                    height: 70,
                  }}
                >
                  <AccountBalanceIcon fontSize="large"/>
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="Tuition Fees"
              subheader="Techstart is FREE of charge!"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="justify">
                There are <b>no tuition fees</b> as the costs are covered by our
                funders. However, if you finish the program successfully and
                start working, we will ask you to make a voluntary income-based
                donation to support our program.
                <br />
                <br />
                Your donation will enable future participants to learn with us
                and to find a job in tech, just like you did. Don’t worry: If
                you don’t complete the program or have not found a job yet, we
                won’t expect you to donate anything.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Overview;
