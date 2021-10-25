import express from "express";
import "dotenv/config"
import { router } from './routes'
import { Server } from "socket.io"
import http from "http";

const app = express();
const serverHTTP = http.createServer(app)
const io = new Server(serverHTTP, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log(socket.id)
})
app.use(express.json());
app.use(router)
app.get('/', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
})

app.get('/signin/callback', (req, res) => {
  const { code } = req.query;
  return res.json(code)
})


export { serverHTTP, io }
