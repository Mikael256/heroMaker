class HeroMaker
{
  constructor($target, picture, position, height, effect)
  {
    this.$target = $target;
    this.picture = picture;
    this.position = position;
    this.height = height;
    this.effect = effect;
    this.setup();
  }
  setup()
  {
    if (this.effect.effect)
    {
      this.$target.css("position", "relative");
      let html = this.$target.html();
      let out = `<div class="heroMaker__back"></div><div class="heroMaker__content">${html}</div>`;
      this.$target.html(out);

      let $back = this.$target.find(".heroMaker__back");
      let $content = this.$target.find(".heroMaker__content");

      let backCss =
      {
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "opacity": this.effect.opacity
      };

      $content.css("z-index", "1");
      switch(this.effect.effect)
      {
        case "over":
          backCss.background = this.effect.color;
          break;
        case "gradient":
          let grad = `linear-gradient(${this.effect.angle}, ${this.effect.color}, ${this.effect.endColor})`;
          backCss.background = grad;
          break;
        case "blur":
          let blur = `blur(${this.effect.amount})`;
          this.$target.css({
             'filter'         : blur,
             '-webkit-filter' : blur,
             '-moz-filter'    : blur,
             '-o-filter'      : blur,
             '-ms-filter'     : blur
          });
          $content.css({
             'filter'         : "blur(0)",
             '-webkit-filter' : "blur(0)",
             '-moz-filter'    : "blur(0)",
             '-o-filter'      : "blur(0)",
             '-ms-filter'     : "blur(0)"
          });
          break;
      }
      $back.css(backCss);
    }
    let targetCss =
    {
      "background-image": `url("${this.picture}")`,
      "background-size": `cover`
    };
    // this.$target.css("background-image", `url("${this.picture}")`);
    // this.$target.css("background-size", `cover`);
    if(this.position)
    {
      if(this.position === "fixed")
        targetCss["background-attachment"] = "fixed";
      else
        targetCss["background-position"] = this.position;
    }

    if(this.height)
      targetCss.height = this.height;
    this.$target.css(targetCss);
  }
}

//autoload
var $body = $("body");
if($body.data("hero"))
{
  let $targets = $('[data-hero_target="true"]');
  $targets.each(function(i, target)
  {
    let $target = $(target);
    let picture = $target.data("hero_picture");
    let position = $target.data("hero_position");
    let height = $target.data("hero_height");
    let effectKind = $target.data("hero_effect");
    let effect = {};
    if (effectKind)
      effect =
      {
        effect: effectKind,
        color: $target.data("hero_color"),
        endColor: $target.data("hero_endcolor"),
        angle: $target.data("hero_angle"),
        opacity: $target.data("hero_opacity"),
        amount: $target.data("hero_amount")
      };

    let hero = new HeroMaker($target, picture, position, height, effect);
  });
}
