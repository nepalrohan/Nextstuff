import mongoose from 'mongoose';

// mongoose.connect(process.env.DATABASE_URL)
// .then(()=>{console.log("DB connection successfull")})
// .catch(()=>{console.log("DB connection failed")})

 export const db = async () => {
  try {
    const res = await mongoose.connect(process.env.DATABASE_URL);
    if (res.connection.readyState === 1) { 
      console.log("Db connected successfully");
    } else {
      console.log("Database connection failed");
    }
  } catch (error) {
    console.error("Database connection error", error);
  }
};









