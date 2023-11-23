Readme

Requirements Met:
 1. Created and used three data collections in file named seed.js
 2. Utilized reasonable 
 3. Created and used GET routes for two of three data collections (Categories and Products)
 4. Created and used POST routes for two of three data collections (Categories and Products)
 5. Created and used PUT routes for two of three data collections (Categories and Products)
 6. Created and used DELETE routes for two of three data collections (Categories and Products)
 7. Used Mongoose data validation
 8. Utilized reasonable code organization practices
 9. Error Free
10. Commit Frequently
11. Readme 
12. Creativity, presentation, and UE
13. Submit Link in Canvas


*** EXECUTING THE PROGRAM
1. You have the choice of creating a .env file and entering your MongoDb connection string in that file, or hardcoding it into the two 
   mongoose.connect statements. Also, you can name the database anything you like or leave it blank. I think test will default in
   strings. The first is located in the seed.js file, and the second is located in index.js
2. Change to the associated directory
4. Type: node
5. Type: .load seed.js
6. Open a web browser and type: localhost:4000

About my MongoDB Database Application
It is a store with vendors, food categories, and food. There are no customers. Although I have created relationships between the three collections, I did not really have time to showcase those relationships. 

Time Permitting Over the Break:
1. Check to make sure that records can not be changed or deleted if its value is bound to another record.
2. Grab unit cost of the product from the vendors file to programmatically calculate the cost of the product based on its UOM
3. Learn about server-side validation and apply it.

Extras: 
1. I added links for easier navigation
2. Added buttons to handle POST, PUT, and DELETE requests
3. Created and used error-handling middleware
4. Created EJS files to create a front-end
5. Using EJS, I linked each product/:id to an anchor tag for easier navigation
6. I used Mongoose

Changed After Submission:
1. Added conditional to ensure an option had been selected before navigating to edit or delete a record
2. Changed verbiage and renamed views
3. I made the values on the delete pages readonly
4. Removed an res.send
5. Verify that the length of the _id's variable and the length of the value of the select both = 24 before attempting to navigate (Basically, I did not like 
   the Cannot GET page if you hit delete immediately upon returning from deleting the record.) An example of what I'm referring to can be seen in categoryView.ejs on lines 78 - 82.
6. 

GitHub Link:
    https://github.com/michelehobson/SBA319.git


