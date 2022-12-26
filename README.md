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

## generate model
    -   npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
## db migrate
    -   npx sequelize-cli db:migrate   
## For password hashing
-   password hashing is done using bcrypt npm package
## For creating and verifying token  
-   creating and verifying toekn is done using jwt npm package
## create seed file
    -   npx sequelize-cli seed:generate --name add-roles   
## run all seed files
    -   npx sequelize-cli db:seed:all
## run a seed file
    -   npx sequelize-cli db:seed --seed 20221224214029-add-roles     
## create migration file to add or remove columns
    -   npx sequelize-cli migration:generate --name add_new_fields_to_bookings  
    
    
