# Shopify Backend Developer Intern Challenge

## Links

[Github Repo](https://github.com/andrew-bradt/shopify-backend-internship-challenge)

[Replit - Live Application](https://shopify-backend-internship-challenge--andrewbradt.repl.co/)
## Features

1. Basic CRUD Functionality
2. When deleting, allow deletion comments and undeletion
3. Persistent Storage using the Replit Database

## Instructions

### Viewing a List of Items
1. [Visit the index page](https://shopify-backend-internship-challenge--andrewbradt.repl.co/) on Replit
2. Observe the table of items

### Adding an Item
1. Click on the "Add Item" button to unhide a form for submitting a new item
2. Fill out the "Name", "Description", and "Image URL" fields
3. Click "Save"
4. After the page has reloaded, verify that the new item appears in the table

### Modifying an Item
1. Click on the "Edit" button next to the item you wish to modify.
2. Modify the "Name", "Description", and "Image URL" fields of interest
3. Click "Save"
4. After being redirected to the index page, view the table and verify that the selected item was modified successfully

### Deleting an Item
1. Click on the "Edit" button next to the item you wish to delete
2. Enter some text in the "Comment" field
3. Click the "Confirm Deletion" button
4. Click the "Home" link.
5. After being redirected to the index page, view the table and verify that the deleted item no longer appears in the table.

### Undoing a Delete
1. Click on the "Edit" button next to the item you wish to delete
2. Enter some text in the "Comment" field
3. Click the "Confirm Deletion" button
4. Click the "Undo Delete" button
5. After being redirected to the index page, verify that the select item appears in the table

### Viewing the Deletion Log
The delete log contains a list of entries with an item id (UUID v4) and a deletion comment.  Reverted deletions are represented with a comment of "Undo Delete".
1. On any page, click the "Deletion Log" link
2. View the deletion log