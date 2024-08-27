import { NextApiRequest, NextApiResponse } from "next";
import { fetchFilteredCustomers } from "../lib/data";
// Example usage in an API route or another function
async function handleRequest(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query.q as string; // Get query parameter from request
    try {
      const customers = await fetchFilteredCustomers(query);
      return res.status(200).json(customers);
    } catch (error) {
      console.error("Error handling request:", error);
      return res.status(500).json({ error: "Failed to fetch customers." });
    }
  }
  