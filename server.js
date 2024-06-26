import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT: ${process.env.PORT}`);
})