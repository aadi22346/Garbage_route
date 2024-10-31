import express from "express";
const app = express();
import mongoose from "mongoose";
import axios from "axios";
app.use(express.json());

const mongoURL = "mongodb://localhost:27017/Mini_Project";
const apiKey = "AIzaSyB2SxNARqwP0A6aQ6zMCYcxlvDZelbeV1U";

const setType = (type) => {
  if (type === "establishment") {
    return "society";
  } else if (type === "health") {
    return "Hospital";
  }
};
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const userSchema = new mongoose.Schema({
  Employee_id: { type: Number, required: true },
  password: String,
  Name: String,
  Location: String,
  DOB: String,
  Vehicle_Num: String,
});

const User = mongoose.model("UserInfo", userSchema, "UserInfo");

app.post("/Login", async (req, res) => {
  console.log(req.body); // log the request body (credentials
  const { Employee_id, password } = req.body;
  try {
    console.log(`Employee_id: ${Employee_id}, password: ${password}`); // log the credentials from the request

    const user = await User.findOne({
      Employee_id: Employee_id,
      password: password,scecfef
    });

    console.log(user); // log the user document from the database

    if (user) {
      // User exists
      console.log("User exists");
      return res.send({ status: 200, message: "User exists",info: user}); // stop execution after sending response
    } 

    // This will only run if the user doesn't exist
    return res.send("No user found");
  } catch (error) {
    console.error(error);
    return res.send({ status: 404, message: "No user found" });
  }
});

app.post("/FindGarbagePoints", async (req, res) => {
  try {
    const { destination } = req.body;
    let keywords = ["hospital", "housing apartment"];
    let allGarbagePoints = [];
    console.log(destination);
    for (let i = 0; i < keywords.length; i++) {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
        {
          params: {
            key: apiKey,
            location: `${destination.latitude},${destination.longitude}`,
            radius: 250, // Specify radius in meters
            keyword: keywords[i], // Keyword to search for garbage points
          },
        }
      );
      const garbagePoints = response.data.results.map((result) => ({
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
        name: result.name,
        types: setType(result.types[1]),
      }));
      allGarbagePoints.push(...garbagePoints);
      console.log(garbagePoints);
    }
    res.send(allGarbagePoints);
  } catch (error) {
    console.error("Error fetching garbage points:", error);
    res.status(500).json({ error: "Failed to fetch garbage points" });
  }
});

app.post("/FindRouteInformation", async (req, res) => {
  try {
    console.log(req.body);
    const { source, destination } = req.body;
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/distancematrix/json",
      {
        params: {
          key: apiKey,
          origins: `${source.latitude},${source.longitude}`,
          destinations: `${destination.latitude},${destination.longitude}`,
        },
      }
    );
    const distance = response.data.rows[0].elements[0].distance.text;
    console.log(distance);
    const duration = response.data.rows[0].elements[0].duration.text;
    console.log(duration);
    res.send({ distance, duration });
  } catch (error) {
    console.error("Error fetching route information:", error);
    res.status(500).json({ error: "Failed to fetch route information" });
  }
});

app.post("/Profile", async (req, res) => {
  try {
    const { Employee_id } = req.body;
    const user = await User.findOne({ Employee_id });
    res.send(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
