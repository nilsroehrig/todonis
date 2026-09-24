# Todonis

Todonis ist eine kleine Todo-Webanwendung mit Benutzerkonten. Angemeldete Personen können ihre eigenen Aufgaben erstellen, bearbeiten, abhaken und löschen. Sie basiert auf AdonisJS 7, Edge und SQLite.

## Lokal starten

Voraussetzungen: Node.js 24 oder neuer und pnpm.

```sh
pnpm install
cp .env.example .env
node ace generate:key
node ace migration:run
pnpm dev
```

Anschließend ist die Anwendung unter <http://localhost:3333> erreichbar. Die SQLite-Datenbank wird unter `tmp/db.sqlite3` angelegt.

## Aufbau

- `app/`: Controller, Modelle, Validierung und Middleware
- `start/`: Routen und Startkonfiguration
- `database/`: Datenbankschema und Migrationen
- `resources/`: Edge-Ansichten, CSS und JavaScript
- `config/`: Konfiguration von Datenbank, Anmeldung und Anwendung
