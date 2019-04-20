import dotenv from "dotenv"; // 환경변수를 로드하기 위한 모듈 
import app from "./app";
import "./db";

dotenv.config(); 

const PORT = process.env.PORT; 

const handleListening = () => {
    console.log(`Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); 
