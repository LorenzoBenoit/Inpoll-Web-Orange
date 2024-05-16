import { MongoClient } from "mongodb";

const url = "mongodb://db-inpoll24:*@db-inpoll24.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@db-inpoll24@"
const client = new MongoClient(url);

const dbName = "inpoll";

async function main() {
  await client.connect();
  console.log("Connexion OK");
  const db = client.db(dbName);
  await db.createCollection("utilisateurs");
}

main()
  .then()
  .catch((err) => {
    console.log(err);
  })
  .finally(() => client.close());