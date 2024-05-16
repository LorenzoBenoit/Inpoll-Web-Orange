import mongoose from "mongoose";

const DB_URL = 'mongodb://db-inpoll24:zV3C31bnGPeKl9ujsi6oGetiggQRV3jGQJJsNPa644kV3vsCxqTu1rbFatiW3qIw6G7sxuM1DH5XACDboLMNHg==@db-inpoll24.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@db-inpoll24@';

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connexion à MongoDB établie.');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });

export default mongoose.connection;
