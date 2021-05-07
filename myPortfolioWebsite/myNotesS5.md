
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














