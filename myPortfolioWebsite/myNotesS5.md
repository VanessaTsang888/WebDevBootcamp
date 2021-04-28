SECTION 4: INTRODUCTION TO CSS:

L30. Intro to CSS: Cascading Style Sheets:

L31. Inline CSS:

index.html -> inject a little css into the open body tag, change its bg color.
https://developer.mozilla.org/en-US/docs/Web/CSS/background-color

Can also use hex values #
Color Palettes: https://colorhunt.co/

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

Change the style of the horizontal rules:

L33. Internal CSS:
How to apply css across my entire webpage (rather than in-line styling as per last lecture).

Search: browser default CSS:
https://www.w3schools.com/cssref/css_default_values.asp

All these elements has default css values applied by my browser. For the hr:
display: block;
margin-top: 0.5em;
margin-bottom: 0.5em;
margin-left: auto;
margin-right: auto;
border-style: inset;
border-width: 1px;

I can over-ride the default value by specifying that I want just a single line without a border that is white in color:

CHALLENGE:
Make my hr to just dots as per sean halpin website:
width is 10 of the page.

border-style: dotted;
When I specify the border style, when 2 values are specified, the first style applies to the top and bottom, the second to the left and right.
When 3 values are specified, the first style applies to the top, the second to the left and right, the third to the bottom.

Now that I have changed the background and hr to how I want it to look. The problem is that, its not done the same to my other pages, Achievements, Hobbies and Interests, and Contact Me. I need a single location where when I change some css there then everything gets reflected across my site in all my pages.

L34. External CSS:

<link rel="stylesheet" href="css/styles.css">
my styles.css is on same level as my index.html
this is why I dont needa a forward slash before the css: css/styles.css

  <link rel="stylesheet" href="css/styles.css">

This link tag must be on all subpages within the head element.

L35. How to Debug CSS Code:

I'm come back to this after my interview with one of our customers.

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


L42. What Are Favicons:
Favourit icon -> display next to my website title.
www.favicon.cc
index.html ->
    <link rel="icon" href="faviconVT.ico">


L43. HTML Divs:

Content division element that allows me to divide my content into separate containers or boxes so that I can affect the layout of each box.

https://colorhunt.co/palette/253137

by default the background-color don't go right up to the edge as it has margin of 8px:
 body { 
  display: block;
  margin: 8px
}

I need to override the default style - margins to all 0px.

L44. The Box Model of Website Styling:

This is the circle (clockwise) shorthand. We are going round in a circle starting from the top.
The border width of the box is: top: 0px, right: 10px, bottom: 20px, left: 30px.

{ border-width: 0px 10px 20px 30px; }

Let say we have some content in our div or box and we need some space around the box -> padding. This increases the size of cox.
The margin is the buffer zone giving space between each div or box to affect our layout for our site.
Can see this in developer tools -> Inspect -> Elements.

Can change the border to makes the box bigger without affecting the elements inside. Margin gives spaces away from the other elements (below).
  border: solid 10px;
  margin: 10px

The padding only pads the content not the background image etc.

https://markusvogl.com/web1/interactive_box_model/css_box_demo.html

L45. CSS Display Property:

Four different values: Block, Inline, Inline-Block, None.
  Block: 

2:55






