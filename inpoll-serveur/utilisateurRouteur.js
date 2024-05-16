import { Router } from 'express';
const router = Router();

import Database from './database/connection.js';
const db = new Database();

const collection = 'utilisateurs';

router.get('/', async (req, res) => {
  try {
    await db.connect();
    const utilisateurs = await db.findAll(collection);
    res.json(utilisateurs);
  } catch (error) {
    console.log(error);
    res.status(500).send('Erreur lors de la récupération des utilisateurs');
  } finally {
    db.client.close();
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.connect();
    const utilisateur = await db.findById(collection, id);
    if (utilisateur) {
      res.json(utilisateur);
    } else {
      res.status(404).send(`Utilisateur avec l'identifiant ${id} non trouvé`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Erreur lors de la récupération de l'utilisateur avec l'identifiant ${id}`);
  } finally {
    db.client.close();
  }
});

router.post('/', async (req, res) => {
  const utilisateur = req.body;
  try {
    await db.connect();
    const result = await db.insertOne(collection, utilisateur);
    if (result.insertedCount === 1) {
      res.status(201).send(`Langage ${utilisateur.nom} créé avec succès`);
    } else {
      res.status(500).send(`Erreur lors de la création de l'utilisateur ${utilisateur.nom}`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Erreur lors de la création de l'utilisateur ${utilisateur.nom}`);
  } finally {
    db.client.close();
  }
});

export default router;
