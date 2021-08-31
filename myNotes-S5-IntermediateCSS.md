
SECTION 5: INTERMEDIATE CSS:

L41. WHAT WE'LL MAKE - STYLISED PERSONAL SITE:
My Portfolio Website:

I aim to change my site to look like this: seanhalpin.io
Sean has drastically changed his website now. It did look like the screenshot I've done and now in the screenshots folder.

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

L45. CSS Display Property:

The <p> is a block element.
<p>A Programmer</p>
What is I want to style the 'Pro' part of the word 'Programmer' differently? How can I target one part of the <p> , i.e. underline the 'Pro' ?
We use the span HTML element and give it a class of 'pro'. Then in our sytles.css file we can target that 'pro' and style it:
index.html :
<p> A <span class="pro">Pro</span>grammer.</p>

styles.css:
  .pro {
    text-declaration: underline;
  }

  The span's like div's don't do every much unless used in conjunction with css.

Common Inline Elements:
They do not block other elements from appearing on the same line, they encourage them to.

1. Spans <span>
2. Images <img>
3. Anchors <a>

Spans can be nested inside <p> etc. They have them as stand alones and give it a bg colour.

We can make a block element inline, i.e. make <p> inline so the elements don't sit on top of each other. Can change its display value to be inline and that makes all the paragraph inline elements and allows everything to sit next to each other on the same line. But lost the ability to change its width.

<p>Hello</p>
<p>World</p>

p {
  background-color: red;
  width: 100%
  display: inline;
}

We can change block elements to inline elements. So which one should I choose?
The Inline Block gives us the best of both worlds. So instead of changing the paragraph element to inline I'm going to change it to inline-block: display: inline-block;

p {
  background-color: red;
  width: 100%
  display: inline-block;
}

Now, I can change the width and make both <p> elements on the same line. This is kind of what image elements do.


46. Learn More About Web Design:
https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/19655686/#questions

How to design website. So it looks so beautiful and it works so well.
You only have 3 seconds to make a good impression.
The Four Pillars of Good Web design:
1. Colour Theory.
2. Typeography.
3. User Interface.
4. User Experience Design.

47. CSS Static and Relative:
How things get rendered on screen just based on my HTML code:

Last lesson we looked at how we could change the display property using CSS in order to change the way that our elements stcked against each other. In this lesson we going to explore CSS
Positioning in more detail. 

1. We have to understand how things in HTML / CSS get positioned by default before we can go on to change it.
The rule is that content is everything. We know that inline elements only take up as much width and height as the content. This is without any css. 

2. The default layout order determined by my HTML code, i.e. 
<h1></h1>
<p></p>
<p></p>
<p></p>
<img>

It gets rendered in that order.

3. Children Sit On Parents:
The order is: the div sits on top of the h1 that sit on top of the span.
The Z-index. We have an X and a Y axis. There is also a Z axis and that determins which element will be displayed on the other one as if in this case the div was in front of the h1, then we wouldn't see the h1 at all. So by default our HTML elements that are children, they will sit on top of the parent element. So the span will sit ontop of the h1.
So we have the span, the h1 then the div, the get closer and closer to the viewer.

<div>
  <h1>a<span>Pro</span>grammer</h1>
</div>

A css property: postition:
We can set a css property the position property in order to position elements on screen the way that I want it to instead of going alone with the default layout.

to position the elements on screen the way that I want it to instea of going along with the default layout, in most cases I'm going to want to make changes to the default layout.
Some of the ways we can change this position property.

1. Static
2. Relative
3. Absolute

1. Static position: all HTML elements are static by default. 
2. Relative positioning: allows us to position the element that we select relative to how it would have been positioned had it been static.
4 coordinates properties: top, bottom, left, right to determine how we want to move our element, i.e. 

To push element down by 20px: 
img { bottom: 20px }

If we change the left property 20px, then it'll get pushed right 20px:
img { left: 20px }

If we change the right property 20px, It'll get pushed left 20px.
img { right: 20px }

If we change the bottom property 20px, It'll get pushed up 20px.
img { top: 20px }

All of this don't affect anything else on the screen as everything else just flows around it as if it was never moved.

Margins: what is it top relative to? 

position: relative; by itself do nothing but with: left: 20px, it will move the element 20px from the left, i.e. for box 1:

.red {
  height: 100px;
  width: 100px
  background-color: red;
  postition: relative;
  left: 20px
}

Challenge:
Change the display property of the blue and the yellow squres so that they will show in a row where we've got the red square, the blue square and the yellwo squre.
Then move the red square to the right of the yellow square: I should end up with -> blue, yellow and red squares.

1. change the display property for all 3 elements: change its inline-block so we can still change its width but also have them show up inline:
display: inline-block;

.red {
  height: 100px;
  width: 100px
  background-color: red;
  postition: relative;
  display: inline-block;
}

.blue {
  height: 100px;
  width: 100px
  background-color: red;
  postition: relative;
  display: inline-block;
}

.yellow {
  height: 100px;
  width: 100px
  background-color: red;
  postition: relative;
  display: inline-block;
}

Now I need to move the blue square to the position of the red square:

.blue {
  height: 100px;
  width: 100px
  background-color: red;
  display: inline-block;
  postition: relative;
  position: relative;
  right: 100px;
}

Move the blue square to the position of the red square:
  Give it postition of relative where it used to be. Then a right margin of 100px:
  position: relative;
  right: 100px;

Move the red square to the right by 200px:
.red {
  height: 100px;
  width: 100px
  background-color: red;
  display: inline-block;
  postition: relative;
  position: relative;
  left: 200px;
}

48. Absolute Positioning:

Another way how we can position our elements. 
We are positioning the element, relative to its parent and in this cases its parent is that red div. We are adding a margin to its parent parent element.
The parent element is normally the body element. 
Absolute positioning do affect the flow of my HTML, I'm taking the element of of the flow of the document, no longer a part of the natural flow of the doc.

49. The Dark of Centering Elements with CSS:

The easiest way to centre elements is: text-align and has to be set inside the parent container, i.e:
    text-align: center;

Another way to center element:
If its a block element and has a width set then will need to center it using the auto value within the maargin:
 margin: 0 auto 0 auto;

Take the bottom cloud element out of the HTML flow by changing one particular CSS position property so that the mountain is in the middle of the screen.
Change its current value of static to absolute.

Challenge:
Move the top-cloud to the right of the h1.

50. Font Styling in Our Personal Site:

font-family: ?????:
Web safe fonts: should get rendered properly.

www.cssfontstack.com
fonts that are commonly used.

What if I want to use a font but don't know if most users can render it? Use a set of fall backs.

 body {
     margin: 0;
     text-align: center;
     font-family: Arial, Helvetica, sans-serif;
 }

What if I want the user to see what ever font i have installed? I can use fonts embedding:
https://fonts.google.com/
Choose from a whole bunch of font families. Free for commerical use that I can embed into my site.
I want:

body: Merriweather;
h1: Sacramento;
Main heading font: Montserrat

https://fonts.google.com/specimen/Merriweather?query=Merriweather#standard-styles

See results:
file:///Users/vanessatsanguk/Documents/code02/WebDevBootcamp/myPortfolioWebsite/index.html


51. Learn More About Typeography:
Head Over to Design School 101 - Typography.


52. Adding Conent to Our Website.

Search for free icons for commerical use with adequate attribution:
https://www.flaticon.com/

53. CSS Sizing:

Can use:
em, pt, px.
css3: rem -> font-size: 5.62rem

Dynamic font sizing.

54. Font Properties Challenge 1 - Change the Font Color:


55. Font Properties Challenge 1 - Change the Font Weight:


58. CSS Float and Clear:

Only use float when really need to, wrap text around certain element, don't use it for positioning. 

59. CSS Challenge:

60. Stylised Personal Site Solution Walkthrough:

I have changed text style and positioning.
Created a button using the css button creator site:
https://cssbuttoncreator.com/

Added a footer and styled the links inside it to add on-hover etc.












































