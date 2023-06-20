EXERCISES:

1) You are going to create an album card component that you are going to reuse in the page. Bootstrap will give you pre-made components for cards and images.
 You can choose to start with one of them and customize it or create your CSS styles from scratch for a card with these elements:

the card element 
the album cover image
the album title
the album group / artist / dj
the album genre
the album duration
NB: make sure to apply the same rules to every album component you display in the page to have them looking consistently similar. ---------

 

2)  Implement a navigation bar using the bootstrap component.

This navigation bar must link every section in your page. 

 

3) Create a responsive section for your favourite albums.

In this section you should have:

4 albums per line when the screen is very large
3 albums per line on a tablet view (or a smaller viewport)
2 albums per line on a small screen
4)  Create a section for the album reviews.

Pick one of your favourite albums, and create a section with:

A big cover Image
Title
Band
Duration
Genre
Tracklist ( in a table, check the bootstrap component for it )
… And whatever you think it’s interesting about it!
5) Worst album list! Choose the albums you dislike or some you think are overrated and list it in this “hall of shame” chart!

6) Do you have any musician / band you admire or you are a fan of?
This section is dedicated to him / her / them!
Feel free to experiment in this part of the page.

7) Just covers! Create a tapestry of album pictures. Just images in a grid layout without any space between them (make sure every image has the same height). 
Put at least 20 cover images to have a nice tapestry effect and see how Bootstrap handles it.

8) Implement a footer with some information / social links.

EXTRA 9) Create an album details area which will be toggled on and off by clicking on the album image.

EXTRA 10) Add a button to each section. By clicking on it, the section body appears (if hidden), or disappears (if visible).

hint: look for a bootstrap component that can handle the job for you. You can always rely on DOM manipulation if you can’t find it

EXTRA 11) Add in the footer the number of how many ALBUMS are present on the page.
Create the JavaScript logic that runs when the page finished loading and
counts the albums and applies the number in the area of the footer you’ve previously decided.


EXERCISES:

1) Create a Jumbotron section with a quick explanation / image of the website.

Make it appear with a fade-in animation effect when the page loads.

 

2) Use a Bootstrap Card to contain every album in the favorite list you previously created.

Use the elements of a card bootstrap gives you, to display nicely the album information such as: album title, artist, year, etc..

 

3) For every album in the favorite list, attach a badge on the top-left corner of the album with the genre of the music.

 

4) Create a new section with an album tracklist inside a Bootstrap table. The row colors of the table must be alternated. There should be a column for the track 
order number, one for the title, one for the artist name and one for the track duration. (you can also add extra columns)

 

5) Add a DELETE button (bootstrap btn danger) at the end of each row of the tracklist. Attach the functionality to remove its row when it gets clicked. (Requires DOM manipulation)

 

6) Add an “Add Track” button under the tracklist of the album.

It should have a nice shadow transition when it gets hovered (with the box-shadow property) to look as if the button was elevating itself up. (you can search for more effects and add more)



 

7) On the click of “Add Track” button, a modal should appear.
(check in the documentation the modal + button example)
The modal shall contain single input fields (avoid using a <form> to wrap the inputs) with:

Track number
Track title
Artist Name
Track duration
The fields should be inside an Input Group and divided in 2 columns.



 

EXTRA 8)

The modal should contain 2 buttons at the bottom:

Add => Adds a new track in the tracklist with the data from the input fields. (requires DOM manipulation)
Close => closes the modal
When a new track is added, notify the user with an alert message containing the name of the track

 

CSS EXTRA

For the delete buttons you’ve created on EX 5 make only one visible at a time, the delete button should become 
visible only when its row gets hovered. Animate it with a fade-in effect upon the user hovering and fade-out when he/she goes away from it.
\



 
           