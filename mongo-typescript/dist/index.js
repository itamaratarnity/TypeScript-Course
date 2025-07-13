"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new mongodb_1.MongoClient(uri);
async function run() {
    try {
        await client.connect();
        const db = client.db("school");
        const students = db.collection("students");
        // Add student
        await students.insertOne({ name: "Alice", age: 17 });
        // Read students
        const allStudents = await students.find().toArray();
        console.log("Students:", allStudents);
        // Update student
        await students.updateOne({ name: "Alice" }, { $set: { age: 18 } });
        // Delete student
        await students.deleteOne({ name: "Alice" });
    }
    catch (err) {
        console.error("Error:", err);
    }
    finally {
        await client.close();
    }
}
run();
