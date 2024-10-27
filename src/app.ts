import express, { Express, Request, Response } from "express";
import http from "http";
import dotenv from "dotenv";
import fs from "fs";
const app = express();
const server = http.createServer(app);
const PORT = 8700;
import data from "../../aws-node-user/data.json";

import bodyParser from "body-parser";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

app.use(bodyParser.json());
let todos: Todo[] = [
  { id: 1, task: "Take out trash", completed: false },
  { id: 2, task: "Do laundry", completed: true },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
})
app.get("/todos", (req: Request, res: Response) => {
  res.send(todos);
});

app.get("/godos", (req: Request, res: Response) => {
  res.send(todos);
});

app.post("/todos", (req: Request, res: Response) => {
  const newTodo: Todo = req.body;
  todos.push(newTodo);
  res.send(newTodo);
});

//streaming in node js

//createwritestream

// const file = fs.createWriteStream('./big.file');
// let newdata = JSON.stringify(data);
// file.write(newdata)
// file.end()

// server.on('request',(req:Request, res:Response)=>{
//     fs.readFile('./big.file',(data, err)=>{
//         console.log(data)
//         if (err) throw err;
//         res.end(data)
//     })
// })

// server.emit('request')

// server.on('request', (req, res)=>{
//     const src = fs.createWriteStream('./big.file');
//     src.pipe(res)
// })

server.listen(PORT, () => {
  console.log(`server listen to the port: ${PORT}`);
});

//implementing a writable stream
// const {writable} = require('stream');
// let newdata = JSON.stringify(data)
// const readeable = fs.createReadStream(newdata)
// const writable = fs.createWriteStream('./output.txt');
// readeable.pipe(writable);
// console.log('program end');
// const {rateLimit} = require('express-rate-limit')
// let newdata = JSON.stringify(data)
// const readeable = fs.createReadStream(newdata)
// const writable = fs.createWriteStream('./output1.txt');
// readeable.pipe(writable)

// let file = fs.createWriteStream('./data1.txt');
// let datas = fs.readFile(newdata,(data,err)=>{
//     console.log(data)
// })
// interface Shape{
//     getArea():number
// }
// interface Shaping{
//     height:number,
//     width:number
// }
// class Rectangle implements Shape{

//     constructor(protected readonly height:number, protected readonly width:number){

//     }
//     public getArea(): number {
//             return 3
//     }
//     public createRectangle(data:Shaping):string{
//         return ""
//     }
// }
// class Rectangle<T=string>{
//     protected readonly res:number|undefined
//     constructor(protected readonly height:number, protected readonly width:number){
//         this.res= height * width
//     }

//     public perimeter(data:Rectangle){
//        return (data.height + data.height)
//     }

// }

// class Square extends Rectangle{
//     constructor(protected readonly height:number, protected readonly width:number){
//         super(height, height)
//     }
// }

// abstract class Polygon{

//     public abstract getArea():number;

// }

// class Rectangle extends Polygon{
//     constructor(){
//         super()
//     }

//     public getArea(): number {
//         return 78
//     }
// }
// const cluster = require("cluster");
// const rabbitMq = require("amqplib");
// import redis from 'redis'
// const os = require('os')
// let core = os.cpus.length()
// if(cluster.isMaster){
//     console.log(process.pid)
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
//     cluster.fork()
// }
// else{
//     console.log(process.pid)

// }

// let data = rabbitMq({
//     host:15672
// })

// data.createChannel()
// assertQueue()
// data.consume()

// type userType = { name: string; lastName: string };
// const users: userType[] = [
//   { name: "Mario", lastName: "Gomes" },
//   { name: "Maria", lastName: "Alves" },
// ];
// const getFullName = async (user: userType) => {
//   console.log("A");
//   return new Promise((resolve, _) => {
//     setTimeout(() => {
//       console.log("B");
//       resolve(`${user.name} ${user.lastName}`);
//     }, 10);
//   });
// };
// const greetUser = async (user: userType) => {
//   console.log("C");
//   const fullName = await getFullName(user);
//   return `Hello, ${fullName}`;
// };
// const greetAllUsers = (users: userType[]) => {
//   console.log("D");
//   users.forEach(greetUser);
//   console.log("E");
// };
// greetAllUsers(users);

// type userType = { name: string; lastName: string };
// const users: userType[] = [
//   { name: "Mario", lastName: "Gomes" },
//   { name: "Maria", lastName: "Alves" },
// ];
// const getFullName = (user: userType) => {
//   console.log("A");
//   return ` ${user.name} ${user.lastName}`;
// };
// const greetUser = (user: userType) => {
//   console.log("B");
//   return `Hello, ${getFullName(user)}`;
// };
// const greetAllUsers = (users: userType[]) => {
//   console.log("C");
//   users.forEach(greetUser);
//   console.log("D");
// };
// greetAllUsers(users);
// console.log("E");
