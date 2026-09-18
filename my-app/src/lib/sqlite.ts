import { Capacitor } from "@capacitor/core";
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

const sqlite = new SQLiteConnection(CapacitorSQLite);

let db: SQLiteDBConnection | null = null;

export async function getDB() {
  if (!Capacitor.isNativePlatform()) {
    throw new Error("SQLite requires a native platform");
  }

  if (db) {
    return db;
  }

  db = await sqlite.createConnection(
    "crypted",
    false,
    "no-encryption",
    1,
    false
  );

  await db.open();

  return db;
}