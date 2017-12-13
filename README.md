# hero Maker

## what is hero Maker?
Hero Maker is a super easy to use hero screen maker for your web pages.

----
## How to
1. join jquery plugin in your html just before </body>
example:
```
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

2. Add just after <script type="text/javascript" src="js/heroMaker.min.js"></script> (make sure your heroMaker.min.js is in the js folder of your website or change your src attribute accordingly.

3. add data-hero="auto" to your body markup.
example:
```
<body data-hero="auto">
```

4. put data-hero_target="true" in your markup attributes to make it targeted by the plugin and add data-hero_picture="url of your picture".

5. add secondary attributes according to the attributes section

----
## Attributes

- **data-hero_target="true"**
makes your markup active in the plugin.
- **data-hero_picture="url"**
set the background image according to the given address.
- **data-hero_position="position"**
set the position of the background picture (fixed, center, top, bottom, ...)
- **data-hero_height="height"**
set the height of the hero.
Can be indicates in pixels (100px) or full screen (100vh)
- **data-hero_effect="effect"**
set the kind of effect that will be active( over, gradient or blur)
- **data-hero_color="color"**
set the color of the effect or the first color of the gradient
data-hero_endcolor="color"
set the second color in the gradient (if there is any)
data-hero_angle="angle"
set the angle of the gradient, should be expressed in degrees or radiant (ex: 45deg)
- **data-hero_opacity="opacity"**
whole opacity of the effect applied (between 0 and 1).
- **data-hero_amount="amount"**
amount of blur applied (ex: 10px)

Warning: blur still not functionnal for now!

for more convenience, check the demo in the index.html file or [here](http://cepegra-labs.be/webdesign/2017/mvani/heroMaker/), the different attributes will be displayed.


Enjoy!

----
## credit

Made in december 2017 by Mikaël Van Isterdael for educationnal purposes.
