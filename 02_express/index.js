import express from 'express'

const app = express()

const port = 3001
console.log("Script is running...");
app.listen(port, () => {
console.log(`Server is running at port: ${port}...`);
}
)
