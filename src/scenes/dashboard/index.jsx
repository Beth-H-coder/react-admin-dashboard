import { Box, Button, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colours.blueAccent[700],
              color: colours.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS  */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="11,600"
            subtitle="Emails Sent"
            progress="0.66"
            increase="+19%"
            icon={
              <EmailIcon
                sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="387,600"
            subtitle="Sales"
            progress="0.46"
            increase="+23%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="34,600"
            subtitle="New Business"
            progress="0.26"
            increase="+10%"
            icon={
              <PersonAddIcon
                sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,234,600"
            subtitle="Inbound Traffic"
            progress="0.75"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                colour={colours.grey[100]}
              >
                Generated Revenue
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colours.greenAccent[500]}
              >
                £56,809.210
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colours.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* -- TRANSACTIONS --  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space between"
            alignItems="center"
            borderBottom={`4px solid ${colours.primary[500]} `}
            colors={colours.grey[100]}
            p="15px"
          >
            <Typography variant="h5" fontWeight="600" color={colours.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colours.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colours.greenAccent[500]}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colours.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colours.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colours.greenAccent[500]}
                p="5px 10px"
                borderRadius="5px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* -- ROW 3 --  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colours.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              £52,896 Generated Revenue
            </Typography>
            <Typography>Includes extra misc expenditure/costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Vol
          </Typography>
          <Box height="250px" mt="-25px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography-based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
