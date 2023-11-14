
import { MongoClient } from 'mongodb';
import myKey from './key.js';


const uri = "mongodb+srv://benhaswell:" + myKey + "@apps.90xed2d.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Returns an array of all apps in glue apps collection
async function getAllApps() {
  try {

    // Connect to client
    await client.connect();

    // Connect to database collection
    const database = client.db('glue');
    const collection = database.collection('apps');

    // Find all documents in the "apps" collection
    const cursor = collection.find({});

    // Convert cursor to array
    const results = await cursor.toArray();

    // Return array
    return results;

  } catch (error) {
    console.error('Error in getAllApps:', error.message);
    throw error; // Re-throw the error for higher-level error handling
  } finally {
    await client.close();
  }
}

// For debugging purposes:
const data = await getAllApps().catch(console.dir);
console.log(data);

// export default getAllApps();