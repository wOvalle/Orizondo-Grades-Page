Orizondo-Grades-Page
====================
This is a simple js/bookmarklet to show the grades of all students in doc.orizondo.org/*subject*/notas.html (where *subject* is the current id of the subject you're taking with Orizondo).

# Usage
We have two files: *bookmarklet.js* and *src.js*

**Bookmarklet**

In order to use the bookmarlet you just have to create a new bookmark (Ctrl + D in Chrome, Firefox and IE6+), put any name and the content of *bookmarklet.js* in the URL. Now, when you consult your grade, hit the bookmark you just created and the grades of all your classmates will be shown.

**Javascript**

To run the javascript just go to consult your grade and then hit F12 (Developer options) and paste the content of the src.js file, hit enter and the grades should be shown.

# Notes

After I developed this script, I realized that if you change the url from */notas.html to */notas.js you can see the JSON object containing the grades from all the tasks and all the classmates. 

This script was made for personal use, but since I'll be taking no classes with that professor ever, I wanted to share it.
