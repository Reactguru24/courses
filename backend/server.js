const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware to parse JSON data and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://nyandikodenis7:aGYKD9bYbm7EHEZg@cluster1.xvjf0.mongodb.net/courses?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Admin Schema and Model
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

// Course Schema and Model
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  lessons: {
    type: Number,
    required: true,
  },
  weeks: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["Paid", "Free"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Admin Registration Route
app.post("/api/admin/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.status(500).json({ error: "Failed to register admin" });
  }
});

// Admin Login Route
app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ error: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      "your_jwt_secret",
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    console.error("Error logging in admin:", error);
    res.status(500).json({ error: "Failed to login" });
  }
});

// Course Creation Route (Admin only)
app.post("/api/courses", async (req, res) => {
  const { title, description, price, lessons, weeks, type } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      price,
      lessons,
      weeks,
      type,
    });
    await newCourse.save();
    res.status(201).json({ message: "Course created successfully" });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Failed to create course" });
  }
});

// Get All Courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// User Registration Route
app.post("/api/users/register", async (req, res) => {
  let { username, email, password } = req.body;

  // Trim any leading or trailing spaces
  password = password.trim();

  // Log the password value to debug
  console.log("Password:", password);

  // Validation checks
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// User Login Route
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "your_jwt_secret",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Failed to login" });
  }
});

// Middleware to authenticate JWT token
const authenticateJWT = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) return res.sendStatus(403); // No token, deny access

  jwt.verify(token, "your_jwt_secret", (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token, deny access
    req.user = user;
    next();
  });
};

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
