const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all origins

app.use(express.json()); // Parse JSON bodies

let cars = [];

const fetchCarsFromRemote = async () => {
  try {
    const response = await axios.get(
      "https://bootcamp.projectcodex.co/cars.json"
    );
    cars = response.data;

    console.log(cars)
  } catch (error) {
    console.error("Error fetching car data:", error);
  }
};

// Initial fetch of car data
fetchCarsFromRemote();

// app.get('/cars', async (req, res) => {
//   try {
//     const response = await axios.get('https://bootcamp.projectcodex.co/cars.json');
//     const cars = response.data;
//     res.json(cars);
//   } catch (error) {
//     console.error('Error fetching car data:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the data.' });
//   }
// });

//fecth all cars
app.get("/cars", (req, res) => {
  res.json(cars);
});

//Add a car
app.post("/cars", (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  res.status(201).json(newCar);
});

//Update a car
app.put("/cars/:reg_number", (req, res) => {
  const { reg_number } = req.params;
  const updatedCar = req.body;
  const index = cars.findIndex((car) => car.reg_number === reg_number);

  if (index !== -1) {
    cars[index] = { ...cars[index], ...updatedCar };
    res.json(cars[index]);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

//Delete a car
app.delete("/cars/:reg_number", (req, res) => {
  const { reg_number } = req.params;
  cars = cars.filter((car) => car.reg_number !== reg_number);
  res.status(204).end();
});

// Add this route to fetch a specific car by reg_number
app.get("/cars/:reg_number", (req, res) => {
  const { reg_number } = req.params;
  const car = cars.find((car) => car.reg_number === reg_number);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
