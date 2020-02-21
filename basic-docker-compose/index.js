const hapi = require("@hapi/hapi");
const { MongoClient } = require("mongodb");
const url = process.env.MONGODB_URL || "mongodb://localhost:27017";
const dbName = "dbNode"; //db name
const collectionName = "count";

async function start() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const server = hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 3000
  });

  server.route({
    method: "GET",
    path: "/",
    async handler() {
      const count = await collection.count();
      return { success: true, count };
    }
  });

  server.route({
    method: "GET",
    path: "/insert",
    async handler() {
      const res = await collection.insertOne({});
      return { inserted: res.insertedCount };
    }
  });

  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true
    }
  });

  await server.start();

  return server;
}

start().catch(err => {
  console.log(err);
  process.exit(1);
});