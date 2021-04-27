SECTION 3: INTERMEDIATE HTML:

L20. HTML Tables:

For Employment History:
personalSite/CV

I am looking to achieve this type of layout: http://www.pascalvangemert.nl/#/experiences
Create a table - mdn site: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
a Simple Table:

table -> table rows -> table data which are cells.
Tables also have header, body, footer.

Table -> table head -> table row -> table heading.

We have different sections of our table i.e. having table heading <th> inside the table head, and the table row with table data inside of the table
body is because sometimes we might want to select and isolate the table header and the table body in order to style it differently or make it function
in a different way. We can make the table header a fixed header so when users scroll up and down the table the header don't move.

Can see from the mdn site, many of the attributes are Deprecated (no longer recommend us using).
There isn't any columns just defining the table rows and cells which effectively the columns. Each cell gets places horizontally, one after another.
Job of tables is to display structured data I can use it to affect my layout.

L21. Using HTML Tables for Layout:

To create a gap between img and text I need to add some cellspacing to the table element.

List some of my skills:
Create a table of 2 columns. Left col: the skill, Right col: the emoji of stars to show how familiar I am with each skill 1-5 stars.

L24. HTML Tables Solution Walkthrough:

1. Table with <tr> and <td>
2. Table Layout -> A Nested Tables:
I want a table with 2 table data cells (2 cols). In each cell I have a separate table which itslef has 2 rows (or 2 cols).
This is not a great idea but ok for learning tables, table rows, table data...

L25. HTML Forms:
Add to my webpage to collect data from my users.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
    To allow users to provide their contact details to me. I can design the form and can structure it.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input  
    There are lots of different types of inputs: text, submit, button, checkbox, label etc
    Password input: use a input label before it. The user's input will be masked with dots.

Summary:

We use a form tag to define what should go in our form. For it to do anything, you need two important elements, the <lable> and the <input>
Define the input type by using the type attribut, i.e. text for text box. Other types include: file which allows the user to upload a file,
date picker, radio button, or a range (slider).

L26. Forms in Practice - Create a Contact Me Form:

<form class="" action="mailto:info@vantaidesign8@gmail.com" method="post">
When user pres submit button, "mailto:info" part will open up the user's default mail client, puts in the email address I specify after the colon.
The post means its going to transfer what the user types into the email client.

input elements: I must fill-in the name attribute within each input element so it knows how to classify each bit of the data i.e. yourName,
yourEmail, yourMessage etc


The below dose some basic validation:
    <label>Your Email:</label>
    <input type="email" name="yourEmail" value=""><br>

Popup box with this message will appear if user don't include @ symbol:
! Please include an '@' in the email address.








