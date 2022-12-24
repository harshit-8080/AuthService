# AuthService
-   auth service for airline booking system

## Authentication
-   process using which we can identify user and tells us about who is the user.
-   example -> signup and signin feature

## Authorization
-   process using which we check if user is authorize for certain resource or not.

##  JWT (json web token)
-   JWT helps us to create token using client credentials.
-   We can use user "email" which is unique to create token.
-   And later we can use the generated token to identify email (which we used earlier)

## initialize sequelize
    -   npx sequelize-cli init
## create database
    -   npx sequelize-cli db:create
