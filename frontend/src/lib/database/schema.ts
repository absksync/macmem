export const MEMORY_TABLE = `
CREATE TABLE IF NOT EXISTS memories (
  id TEXT PRIMARY KEY,
  source TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  tags TEXT,
  file_path TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
`;