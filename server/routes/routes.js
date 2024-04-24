import { createRequire } from "module";
const require = createRequire(import.meta.url);
import Table from "../model/table.js";

const express = require("express");

const router = express.Router();

router.post("/tables", async (req, res) => {
  const data = new Table({
    league: req.body.league,
    standings: req.body.standings,
    lastUpdated: new Date(),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/tables/:id", async (req, res) => {
  try {
    // this returns an array
    const data = await Table.find({ league: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/tables/:id", async (req, res) => {
  try {
    const result = await Table.findOneAndUpdate(
      { league: req.params.id },
      { ...req.body, lastUpdated: new Date() },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
