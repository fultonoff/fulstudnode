// WORK IN PROGRESS BELOW

$("document").ready(function () {
    // RESTYLE THE DROPDOWN MENU
    $("#google_translate_element").on("click", function () {
      // Change font family and color
      $("iframe")
        .contents()
        .find(
          ".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *"
        )
        .css({
          
          "font-family": "Roboto",
          width: "100%",
          
        });
      // Change menu's padding
      $("iframe")
        .contents()
        .find(".goog-te-menu2-item-selected")
        .css("display", "none");
  
      // Change menu's padding
      $("iframe").contents().find(".goog-te-menu2").css("padding", "0px");
  
      // Change the padding of the languages
      $("iframe")
        .contents()
        .find(".goog-te-menu2-item div")
        .css("padding", "18px");
  
      // Change the width of the languages
      $("iframe").contents().find(".goog-te-menu2-item").css("width", "100%");
      $("iframe").contents().find("td").css("width", "100%");
  
      // Change hover effects
      $("iframe")
        .contents()
        .find(".goog-te-menu2-item div")
        .hover(
          function () {
            $(this)
              .css("background-color", "purple")
              .find("span.text")
              .css("color", "white");
          },
          function () {
            $(this)
              .css("background-color", "white")
              .find("span.text")
              .css("color", "#544F4B");
          }
        );
  
      // Change Google's default blue border
      $("iframe").contents().find(".goog-te-menu2").css("border", "none");
  
      // Change the iframe's box shadow
      
  
      // Change the iframe's size and position?
      $(".goog-te-menu-frame").css({
        // 'height': '50%',
        // 'width': '150px',
        // 'left': '10px',
          'bottom': '-90px',
        posision: "relative",
      });
      // Change iframes's size
      $("iframe").contents().find(".goog-te-menu2").css({
        'height': '100%',
        'width': '100%',
        overflowY: "scroll",
      });
    });
  });
  