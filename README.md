<p align='center'>
<h1 align='center'>Ringover Microservices Assignment</h1>
</p>

---

# Introduction

This repository is for the solution of Microservices assignment by [Ringover](https://ringover.com).

# Project Description

## Mail microservice (producer)

Mail service contains the routes for adding new task and fetching the schedules for mailed tasks.

For more info: [Click Here](./mail/README.md)

## Scheduler microservice (consumer)

The Scheduler fetched the tasks from the stream and schedule them for the given time.

For more info: [Click Here](./scheduler/README.md)

## SMS microservice (producer)

SMS service contains the routes for adding new task and fetching the schedules for mailed tasks.

For more info: [Click Here](./sms/README.md)

## Postman Collection

Here is postman collection link to test my endpoints of microservices.

For more info: [Click Here](https://elements.getpostman.com/redirect?entityId=15879313-9330652d-3af9-49bd-8373-6e13a3b4d070&entityType=collection)
# Folder Structure

The root directory is structured to contained subdirectories for all microservices.

```
mail/
    src/
        controller/
        lib/
        middleware/
        routes/
        schema/
    tsconfig.json
    package.json

scheduler/
    src/
        controller/
        lib/
        middleware/
        model/
        repo/
        routes/
        service/
    tsconfig.json
    package.json

sms/
    src/
        controller/
        lib/
        middleware/
        routes/
        schema/
    tsconfig.json
    package.json
```

# Author

[Akshat Khosya](https://github.com/akshat-khosya)
