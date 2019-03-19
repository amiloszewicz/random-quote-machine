$(document).ready(function() {
    allDesignChange();
    $("#next-quote").click(allDesignChange);
    $(".twitter-share-button").click(shareQuoteOnTwitter());
  });
  
  var quotes = [
    {
      quote: "a journey of a thousand miles begins with a single step",
      author: "Laozi"
    },
    {
      quote:
        "Do not take life too seriously. You will never get out of it alive.",
      author: "Elbert Hubbard"
    },
    {
      quote:
        "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
      author: "Reba McEntire"
    },
    {
      quote:
        "There are only three things women need in life: food, water, and compliments.",
      author: "Chris Rock"
    },
    {
      quote:
        "Always remember that you are absolutely unique. Just like everyone else.",
      author: "Margaret Mead"
    },
    {
      quote: "Behind every great man is a woman rolling her eyes.",
      author: "Jim Carrey"
    },
    {
      quote: "Age is something that doesn't matter, unless you are a cheese.",
      author: "Luis Bunuel"
    },
    {
      quote: "A day without sunshine is like, you know, night.",
      author: "Steve Martin"
    },
    {
      quote:
        "I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party.",
      author: "Ron White"
    },
    {
      quote:
        "By all means let's be open-minded, but not so open-minded that our brains drop out.",
      author: "Richard Dawkins"
    },
    {
      quote: "Man cannot live by bread alone, he must have peanut butter.",
      author: "James A. Garfield"
    },
    {
      quote:
        "They say marriages are made in Heaven. But so is thunder and lightning.",
      author: "Clint Eastwood"
    },
    {
      quote: "I'm writing a book. I've got the page numbers done.",
      author: "Steven Wright"
    },
    {
      quote: "Never have more children than you have car windows.",
      author: "Erma Bombeck"
    }
  ];
  var newColor;
  var quotesCopy = getQuotes();
  var elements = [
    "body",
    ".fa-quote-left",
    ".quote-content",
    ".quote-author",
    ".fa-share-alt",
    ".fa-forward"
  ];
  
  function shareQuoteOnTwitter(quote, author) {
    $(".twitter-share-button").attr(
      "href",
      "https://twitter.com/intent/tweet?text=" + quote + " -" + author
    );
  }
  
  function fadeOutContent() {
    $(".quote-content").fadeOut(1000);
    $(".quote-author").fadeOut(1000);
    $(".fa-quote-left").fadeOut(1000);
  }
  
  function changeColorsForSeparatorsOnClick() {
    return elements.forEach(changeColorsOnClick);
  }
  
  function allDesignChange() {
    fadeOutContent();
    setTimeout(changeQuote, 1000);
    newColor = randomColor();
    changeColorsForSeparatorsOnClick();
  }
  
  function getQuotes() {
    return quotes.slice(0);
  }
  
  function changeQuote() {
    if (quotesCopy.length === 0) {
      quotesCopy = getQuotes();
    }
    var result = quotesCopy[Math.floor(Math.random() * quotesCopy.length)];
    var quote = result.quote;
    var author = result.author;
  
    if (quote && author) {
      $(".quote-content").html(quote);
      $(".quote-author").html("-" + author);
      shareQuoteOnTwitter(quote, author);
    }
    var quoteIndex = quotesCopy.indexOf(result);
    quotesCopy.splice(quoteIndex, 1);
  
    return quote, author;
  }
  
  function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
  
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function handlerInButtonsShadow() {
    $(this).css("box-shadow", "1px 1px 2px" + newColor);
  }
  
  function handlerOutButtonsShadow() {
    $(this).css("box-shadow", "none");
  }
  
  function changeColorsOnClick(element) {
    if (element === "body") {
      $(element).css({
        "background-color": newColor,
        transition: "background-color 2s"
      });
    } else if (element === ".fa-share-alt" || element === ".fa-forward") {
      $(element).css({
        color: newColor,
        border: "2px solid" + newColor,
        transition: "color 2s, border-color 2s"
      });
      $(element).hover(handlerInButtonsShadow, handlerOutButtonsShadow);
    } else {
      $(element).css({
        color: newColor,
        transition: "color 2s"
      });
      $(element).fadeIn(1000);
    }
  }
  