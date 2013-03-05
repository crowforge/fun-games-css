(function($){

  // Keep track of where we are in the story
  var counter = 0;

  // Story contains all the actions that bring the slides to life
  // It contains the narrative in both directions: forward and reverse.
  // - feel free to explain to me how this could be accomplished with only one array
  // - or to avoid eval?
  var story = {
    'forward': [

      // Title
      "scrollTo('#s-title'); ",

      // Intro
      "scrollTo('#s-intro'); ",
      "$('#s-intro .word').toggleClass('show'); ",
      "$('#s-intro .word').toggleClass('big'); ",
      "$('#s-intro .word').toggleClass('bigger'); ",
      "$('#s-intro .word').toggleClass('bold'); ",
      "$('#s-intro .word').toggleClass('italic'); ",
      "$('#s-intro .word').toggleClass('font'); ",
      "$('#s-intro p.intro').text('CSS used to be defined in huge chunks (CSS 1, CSS 2, CSS 2.1)'); ",
      "$('#s-intro .word').toggleClass('border'); ",
      "$('#s-intro .word').toggleClass('padding'); ",
      "$('#s-intro .word').toggleClass('margin'); ",
      "$('#s-intro .word').toggleClass('bgcolor'); ",
      "$('#s-intro p:not(.intro)').toggleClass('show'); ",
      "$('#s-intro .word').toggleClass('float-l'); ",
      "$('#s-intro .word').toggleClass('float-r'); ",
      "$('#s-intro .word').toggleClass('pos-y'); ",
      "$('#s-intro .word').toggleClass('pos-y'); ",
      "$('#s-intro .word').toggleClass('pos-x'); ",
      "$('#s-intro .word').toggleClass('pos-x'); ",
      "$('#s-intro p.intro').text('This is about where IE6 gave up.'); ",
      "$('#s-intro p.intro').text('After CSS 2.1, CSS was broken up into modules, known collectively as...'); "+
      "$('#s-intro .word').text('CSS3'); ",
      "$('#s-intro .word').toggleClass('borderradius'); ",
      "$('#s-intro .word').toggleClass('boxshadow'); ",
      "$('#s-intro .word').toggleClass('textshadow'); ",
      "$('#s-intro .word').toggleClass('gradient transition'); ", // sneak transition in there too
      "$('#s-intro .word').toggleClass('webfont'); ",
      "$('#s-intro .word').toggleClass('rotate'); ",
      "$('#s-intro .word').toggleClass('blur'); ",

      // Slinky
      "scrollTo('#s-slinky'); ",
      "$('#s-slinky .slinky').toggleClass('hide'); ",
      "$('#s-slinky .slinky').toggleClass('half'); ",
      "$('#s-slinky p.slinky-desc').toggleClass('hide'); "+
      "$('#s-slinky p.intro').toggleClass('dim'); ",
      "$('#s-slinky .slinky').toggleClass('move half full'); ",

      // the beginning
      "scrollTo('#die-undliche-gesichte'); "

    ],
    'reverse': [

      // Title
      "",

      // Intro
      "scrollTo('#s-title'); ",
      "$('#s-intro .word').toggleClass('show'); ",
      "$('#s-intro .word').toggleClass('big'); ",
      "$('#s-intro .word').toggleClass('bigger'); ",
      "$('#s-intro .word').toggleClass('bold'); ",
      "$('#s-intro .word').toggleClass('italic'); ",
      "$('#s-intro .word').toggleClass('font'); ",
      "$('#s-intro p.intro').text('Web design had pretty humble beginnings.'); ",
      "$('#s-intro .word').toggleClass('border'); ",
      "$('#s-intro .word').toggleClass('padding'); ",
      "$('#s-intro .word').toggleClass('margin'); ",
      "$('#s-intro .word').toggleClass('bgcolor'); ",
      "$('#s-intro p:not(.intro)').toggleClass('show'); ",
      "$('#s-intro .word').toggleClass('float-l'); ",
      "$('#s-intro .word').toggleClass('float-r'); ",
      "$('#s-intro .word').toggleClass('pos-y'); ",
      "$('#s-intro .word').toggleClass('pos-y'); ",
      "$('#s-intro .word').toggleClass('pos-x'); ",
      "$('#s-intro .word').toggleClass('pos-x'); ",
      "$('#s-intro p.intro').text('CSS used to be defined in huge chunks (CSS 1, CSS 2, CSS 2.1)'); ",
      "$('#s-intro p.intro').text('This is about where IE6 gave up.'); "+
      "$('#s-intro .word').text('CSS'); ",
      "$('#s-intro .word').toggleClass('borderradius'); ",
      "$('#s-intro .word').toggleClass('boxshadow'); ",
      "$('#s-intro .word').toggleClass('textshadow'); ",
      "$('#s-intro .word').toggleClass('gradient transition'); ", // sneak transition in there too
      "$('#s-intro .word').toggleClass('webfont'); ",
      "$('#s-intro .word').toggleClass('rotate'); ",
      "$('#s-intro .word').toggleClass('blur'); ",

      // Slinky
      "scrollTo('#s-intro'); ",
      "$('#s-slinky .slinky').toggleClass('hide'); ",
      "$('#s-slinky .slinky').toggleClass('half'); ",
      "$('#s-slinky p.slinky-desc').toggleClass('hide'); "+
      "$('#s-slinky p.intro').toggleClass('dim'); ",
      "$('#s-slinky .slinky').toggleClass('move half full'); ",

      // the beginning
      "scrollTo('#s-slinky'); "

    ]
  };

  // Set up the arrow keys to progress through the story
  $(document).keyup(function(e) {
    // counter is incremented differently depending on direction
    // so that the two arrays with forward/reverse steps can be
    // kept in sync and maintained in the most sane fashion.
    if (e.keyCode == 37) { storyBack(); }
    if (e.keyCode == 39) { storyNext(); }
  });

  // Set up touch nav to progress through the story
  $('.touch nav .back').bind('touchstart', function() { storyBack(); });
  $('.touch nav .next').bind('touchstart', function() { storyNext(); });

  /**
   * Advances story one step
   */
  function storyNext() {
    eval(story.forward[++counter]);
  }

  /**
   * Advances story *back* one step
   */
  function storyBack() {
    eval(story.reverse[counter--]);
  }

  /**
   * Scrolls to a particular anchor
   */
  function scrollTo(target){
    var element = $(target);
    $('html,body').animate({scrollTop: element.offset().top - 25}, 'fast');
  }

})(jQuery);
