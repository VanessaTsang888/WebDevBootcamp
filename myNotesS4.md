
SECTION 4: INTRO TO CSS:

30. Intro To CSS:

HTML: The problem with tables is that they are really wordy. You have to write a lot of code in order to do something very simple which is displaying that image next to my h1 and my paragraphs,
having it on the same horizonal level. The other problem with tables is that its very easy to make syntax errors i.e. i can forget a <td> I would end up with errors all over the place and very
difficult to debug as well. Also, if I get into more complex table layout I had to embed tables within tables in order to get more columns and more rows and more flexible layout and the whole thing just become this horrible mess. This is why CSS is used with HTML.

31. Inline CSS:

On my website, change background color. Go into the tag and change the style attribute: <body style="background-color: blue;">

Can also use the # hex values for a custom colour.
Colour Palette resource: colorhunt.co

<color> CSS MDN: developer.mozilla.org/en-US/docs/Web/CSS/color_value

Change the style of the horizonal rule.
<hr>

32. A Quick Note About the Next Lesson:

33. Internal CSS:
Implement CSS code across the entire web page. No need to copy & past the style attribute each time we want to change a particular element.

File: Index.html
<style>
	body { background-color: #EAF6F6; }
    hr { background-color: white; }
</style>

The keyword is white.
There is always browser default CSS. To find out what they are: w3 Schools: lots of elements have default CSS values: w3schools.com/cssref/css_default_values.asp
Change the border style to none:

    hr { 
        background-color: white;
        boarder-style: dotted none none;
        height: 2px;
        Boarder-color: grey;
	    Boarder-width: 8px;
        Width: 30%;
     }

Everything that exists on a webpage are essentially just boxes and make them appear using Pesticide plugin.
Now our box has a height of 2px. 
when three values are specified, the first style applies to the top and bottom, the second to the lf and right:  boarder-style: dotted none none;

34. External CSS:

Using external file (i.e. styles.css) for my css code which will apply the same styles consistenly across all pages within same site including my hobbies and contact pages. Just add the <link> tag into my index.html file.


1. create new folder called: css
2. new file: styles.css
3. move code from the style tag to the styles.css file
4. Inside of index.html create new link has a relationship with stylesheet. Change the href to point to my styles.css file. If href starts with a forward slash then its pointing to the route of
my website. I am saying that the styles.css file lives in a folder called css and its on the same level as the current file index.html

<link rel="stylesheet" href="css/styles.css">


35. How to Debug CSS Code:

Bugs: What is the cause and how to fix them?

Download the Debugging Problem Starting Files: Debugging Problem 1, Debugging Problem 2.

Challenge 01:
index.html -> delete all the code. Past-in all code from Debugging Problem 1 file.

How to approach debuging:

Use Chrom developer tools: Chrome -> Inspect -> Console:
Error: its trying to look for: /css/styles.css
I need to remove the first forward slash as the styles.css is not in the route but on same level as current file.


Challenge 02:
index.html -> delete all the code. Past-in all code from Debugging Problem 1 file.

How to approach debuging: identify the problem.
The background colour has gone from light green to white. Everything else if fine. So its not to do with the location of my stylesheet.
Use Chrom developer tools: Chrome -> Inspect -> Elements -> select the body element, in the Styles section on the right. Here I can see my green colour bg has been over-written by the white colour
bg. The lnline css rule inside the body tag has turn the body's bg color to white. To test, I can untick the first css rule, the background-color; white. Then the bg will change to red as it gose down to the next level. This Chrome tool is only for me to test locally as it don't change my code.

The priority is given to the inline elemeent and that is what is making my bg white. Delete the css rule fromt he body tag and save. Then it will go to the next most important css rule which is
the one inside our internal css and if I delete that and save, then will go to next important rule which is my extrnal css rule that has the green bg.
The importance of these css rules depend on where you write it. Best practice is to implement all of my styles inside my external css file.

L36. The Anathomy of CSS Syntax.
The grammar of the CSS language.

L37. CSS Selectors:

Tag Selectors:
  h1, img etc
    h1 { color: red; }

Class Selectors:
  .bacon { background-color: green; }

ID Selectors:
  #heading

L38. Classes vs. Ids:

Id is unquic and can only be used once per page: h1 -> we would only have x1 Heading 1 per page or one navbar per page.
I can have multiple classes per element, i.e. I want to make the broccoli image circular from a square:
  <img class="broccoli circular" src="">
    .broccoli { background-color: red; }
    .circular { border-radius: 100% }

This can't be done for IDs. Think very carefully before using IDs.

Pseudo Class Selector:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
  There are many Pseudo classes. They always start with a colon, i.e. :active or a:hover
  as HTML elements can have different states, i.e. when I hover over an element like an image, that's actually a different state. I can get
  the css to change based on the state i.e. hovering over or not hovering over by using these pseudo classes.

When img are hovered over or moused over, the background colour will change to yellow: using pseudo class of :hover
  img:hover {
    background-color: gold;
  }













