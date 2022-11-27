<p align='center'>
<h1 align='center'>Ringover Microservices Assignment</h1>
</p>

---

# Mail Microservice

Mail service contains the routes for adding new task and fetching the schedules for mailed tasks.

# Installation

1. Install the dependencies

```bash
yarn
```

2. Start the server

```bash
yarn run dev
```

**Note:** Before running the backend server, make sure that an instance of SQL server is up and running in your local machine and you have ran th following command,

1. Create a SQL database

```sql
CREATE DATABASE {{ db_name }};
```

2. Use the database

```sql
USE {{ db_name }};
```

3. Create a table

```sql
CREATE TABLE `tasks` (
  jobId INT,
  taskType VARCHAR(255) NOT NULL,
  dep VARCHAR(255) NOT NULL,
  prirority VARCHAR(255) NOT NULL,
  time_stamp VARCHAR(255) NOT NULL,
  PRIMARY KEY (jobId)
);
```

# Building the environment

To build the .env

```env
R_USER={{ db_username }}
PASSWORD={{ db_password }}
DATABASE={{ db_name }}
HOST={{ host_for_online_db }}
PORT={{ db_port }}
```
