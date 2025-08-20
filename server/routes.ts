import { Router } from "express";
import { storage } from "./storage.js";
import { insertContactSchema } from "../shared/schema.js";

const router = Router();

// Contact form endpoint
router.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    res.json({ success: true, contact });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({ success: false, error: "Invalid contact data" });
  }
});

// Get contacts endpoint (for admin purposes)
router.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await storage.getContacts();
    res.json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({ error: "Failed to get contacts" });
  }
});

export default router;