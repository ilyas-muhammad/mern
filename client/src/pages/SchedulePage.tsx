import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

import apiService from "../api/api-service";

const SchedulePage: React.FC = () => {
  const [schedules, setSchedules] = useState<any[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  useEffect(() => {
    fetchSchedules();
  }, []);

  // Fetch schedules from the server
  const fetchSchedules = async () => {
    try {
      const response = await apiService.get("/schedules");
      setSchedules(response?.data?.data);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await apiService.get(
        `/schedules/search?keyword=${searchKeyword}`
      );
      setSchedules(response?.data?.data);
    } catch (error) {
      console.error("Error searching schedules:", error);
    }
  };

  const handleResetSearch = async () => {
    setSearchKeyword(""); // Clear the search keyword
    fetchSchedules(); // Fetch all schedules again
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Schedules
      </Typography>
      <Box display="flex" alignItems="center" marginBottom="1rem">
        <TextField
          label="Search by keyword"
          variant="outlined"
          size="small"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginLeft: "1rem" }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleResetSearch}
          style={{ marginLeft: "1rem" }}
        >
          Reset Search
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Due Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(schedules) && schedules.length > 0 ? (
              schedules.map((schedule) => (
                <TableRow key={schedule._id}>
                  <TableCell>{schedule.name}</TableCell>
                  <TableCell>{schedule.description}</TableCell>
                  <TableCell>{schedule.dueAt}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No schedules available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SchedulePage;
