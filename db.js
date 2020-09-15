import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  // 아래 있는 명령문은 이것들을 사용해, 이것들은 사용안해 그리고 새 버전에서는
  // 이것들이 기본으로 되어있을 거야 같은 역할을 한다.
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
