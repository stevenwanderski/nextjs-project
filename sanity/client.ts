import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8e3iib07",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});