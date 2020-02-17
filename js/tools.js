$(document).ready(function () {


// ========= Page Transitions =========
    
// Handles page transitions using jQueryUI slide effects  
    
$("#foodLink").click(function(){
                    $("#homepage").toggle("slide", {direction: "left"}, 600 );
                    $("#foodcreator").toggle("slide", {direction: "right"}, 600);
                 });
    
$("#nutritionLink").click(function(){
                    $("#homepage").toggle("slide", {direction: "left"}, 600 );
                    $("#nutrition").toggle("slide", {direction: "right"}, 600);
                 });

//Clicking the company name at the top of each page will take user back to home page    
$(".bth").click(function(){
//                  Set a variable with the current visible page so we can transition it out
                    var currentPage = $(".page:visible");
//                  Only transition to homepage if we are not on homepage
                    if ($("#homepage").is(":hidden")){
                        $("#homepage").toggle("slide", {direction: "left"}, 600 );
                        currentPage.toggle("slide", {direction: "right"}, 600);
                    } 
                 });
    
// ========= Menu =========
    
// Check if selected page is already visible, if not close menu and transition to new page.
// if we are already on the page close the menu.
    
// Please note the menu is currently code heavy and needs to be optimized. Specific functions to handle page transitions would be ideal that take current page & next page as input variables.
    
    $(".navAbout").click(function(){
        // Check if page is hidden (in other words we are not already on that page)
        if ($("#about").is(":hidden")){
            // Get the id of the current visible page so we can slide it out
            var currentPage = $(".page:visible");
            // Close the menu
            $("#myNav").removeClass("active");
            // Transition in page
            $("#about").toggle("slide", {direction: "down"}, 600 );
            // Transition out previous page
            currentPage.toggle("slide", {direction: "up"}, 600);
            // Change menu icon back to default state
            $(".hamburger").attr("src", "images/menu.png");
        } else {
            // If we are already currently on the page, close menu and reset hamburger image
            $("#myNav").removeClass("active");
            $(".hamburger").attr("src", "images/menu.png");
        }
    });
    
    $(".navContact").click(function(){
        if ($("#contact").is(":hidden")){    
            var currentPage = $(".page:visible");
            $("#myNav").removeClass("active");$("#myNav").removeClass("active");
            $("#contact").toggle("slide", {direction: "down"}, 600 );
            currentPage.toggle("slide", {direction: "up"}, 600);
            $(".hamburger").attr("src", "images/menu.png");
        } else {
            $("#myNav").removeClass("active");
            $(".hamburger").attr("src", "images/menu.png");
        }  
    });
    
    $(".navNutrition").click(function(){
        if ($("#nutrition").is(":hidden")){
            var currentPage = $(".page:visible");
            $("#myNav").removeClass("active");
            $("#nutrition").toggle("slide", {direction: "down"}, 600 );
            currentPage.toggle("slide", {direction: "up"}, 600);
            $(".hamburger").attr("src", "images/menu.png");
        } else {
            $("#myNav").removeClass("active");
            $(".hamburger").attr("src", "images/menu.png");
        }   
    });
    
    $(".navHome").click(function(){
        if ($("#homepage").is(":hidden")){
            var currentPage = $(".page:visible");
            $("#myNav").removeClass("active");
            $("#homepage").toggle("slide", {direction: "down"}, 600 );
            currentPage.toggle("slide", {direction: "up"}, 600);
            $(".hamburger").attr("src", "images/menu.png");
        } else {
            $("#myNav").removeClass("active");
            $(".hamburger").attr("src", "images/menu.png");
        }
    });
    
    // Open/Close mechanics of the menu and manage hamburger image
    
    $(".hamburger").click(function() { 
        // Open the menu
        $("#myNav").toggleClass("active");
        
        if($("#myNav").hasClass("active")){
            // Change the menu icon to an X
            $(".hamburger").attr("src", "images/close.png");
            
            // Draw svgs in menu by calling plugin function
            var svg = $("svg").drawsvg({duration: 1300});
            
            // Santos, Leonardo. “jQuery Drawsvg plugin.”
	        //     http://leocs.me/jquery-drawsvg/
            
            
            svg.drawsvg("animate");
            }
    
        else {
            $(".hamburger").attr("src", "images/menu.png");
        }
    });


    
    
    // ========= Food Creator =========
    
    var currentFieldset, nextFieldset, previousFieldset; // Fieldsets    
    
    $(".next").click(function() {
        
        // Using a jQuery validate plugin for validating the form. 
        // Please note I have not validated every input as I am not using them
        // the only input I need to is the dog name, and it only validates that it has been
        // entered not the actual contents. (Proper input validation outside the scope of this project)
        
     	$("#multistep").validate({
			rules: {    
				dogName: {
   					required: true,
    			},
                breed: {
                    required: true,
                },
             	
    		},
    		messages: {
    			dogName: "Please enter your dogs name",
                breed: "Please enter your dogs breed",	
			}
	    });
        
        if ((!$('#multistep').valid())) {
       		return false;
    	}
            
        // Set the current and next fieldset variables
        currentFieldset = $(this).parent();
        nextFieldset = $(this).parent().next();
        
        //add next step on progress bar by adding class="active" to the html
        // at the specified index we set above (nextFieldset)
    
        $("#progress li").eq($("fieldset").index(nextFieldset)).addClass("active");
    
        // transitions    
        nextFieldset.toggle("slide", {direction: "right"}, 700 );
        currentFieldset.toggle("slide", {direction: "left"}, 700 );
   
    });
    
    // ========= Food Creator Form Elements and Logic =========
    
    // Dog type array for autocomplete dropdown
    $(function() {
    var dogBreeds = [ "Labrador Retriever", "German Shepherd", "Poodle", "Chihuahua", "Golden Retriever",
                        "Yorkshire Terrier", "Dachshund", "Beagle", "Boxer", "Miniature Schnauzer", "Shih Tzu",
                        "Bulldog", "German Spitz", "English Cocker Spaniel", "Cavalier King Charles Spaniel",
                         "French Bulldog", "Pug", "Rottweiler", "English Setter", "Maltese", "English Springer Spaniel",
                         "German Shorthaired Pointer", "Staffordshire Bull Terrier", "Border Collie", "Shetland Sheepdog",
                        "Dobermann", "West Highland White Terrier", "Bernese Mountain Dog", "Great Dane", "Brittany Spaniel", "Wolfhound"];
        
    $( "#tags" ).autocomplete({
      source: dogBreeds
    });
        
  } );
    
    
    // ========= Populate Dog Age dropdowns =========
    
    // This may be overkill but keeps the HTML cleaner without hardcoding dropdown options.
    $(function () {
        var years = $("#years");
        var months =$("#months");
        //Loop to add year values to dropdown.
        for (var i = 1; i <= 15; i++) {
            var option = $("<option />");
            option.html(i);
            option.val(i);
            years.append(option);
        }
         //Loop to add year month to dropdown.
        for (var i = 1; i <= 11; i++) {
            var option = $("<option />");
            option.html(i);
            option.val(i);
            months.append(option);
        }
    });
    
// Use dog name in form Step 2 - Pet Details
    // Input element
    $("#petName").on("change", function() {
        // Element we wanto append value to (paragraph)
        $(".appendName").append(this.value);
    });
    
  // On checkbox state change get the value of any other checkbox elements that are not the active one, and set checked to false.
    $('input[type="checkbox"]').on('change', function() {
        $('input[type="checkbox"]').not(this).prop('checked', false);
    });

    
//========= Final product from food creator form =========    

    $(".finish").click(function() {
    
        // Transition food creator section off screen
        $("#foodcreator").toggle("slide", {direction: "left"}, 600);
        // Transition final page onto screen
        $("#finalProduct").toggle("slide", {direction: "right"}, 600 );
        // Reset form
        $("#multistep").trigger("reset");
        // Note: while the form resets, more work needs to be done to actually reset
        // input windows and start from the start the beginning of the food creator. outside of my scope for this project.
    });

        // Accodrian containing product info
        // adapted from Vikas Verma, jQuery Accordian
        //       https://codepen.io/vikasverma93/pen/raxGaM/ 
    
        // Adapted to use local + and - images rather than fontawesome
    
    $(".set > a").on("click", function() {
         
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
            .siblings(".content")
                .slideUp(200);
            $(".set > a img")
                .attr("src", "images/plus.png");
        
        } else {
         $(".set > a img")
            .attr("src", "images/plus.png");
        
            $(this)
                .find("img")
                .attr("src", "images/minus.png");
        
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }         
    });

    
    // ========= Interactive Image using Interactive Image plugin =========
    
    // Chateau, Jean-Philippe. “jQuery interactive image plugin.”
    //      https://github.com/jpchateau/Interactive-Image/

    var options = {
    shareBox:false
    };

    // Array for image hotspots
    var notes = [
    {
      type: "text",
      title: "Healthy Teeth",
      description: "Integer rhoncus eros id nulla consectetur, at vulputate ligula vestibulum. Pellentesque suscipit pellentesque eleifend. Vivamus nec dignissim turpis, vulputate vestibulum lectus. Fusce eleifend fringilla sem.",
      position: {
        left: 80,
        top: 100
      },
    },
        
    {
      type: "text",
      title: "Cognitive Ability",
      description: "Integer rhoncus eros id nulla consectetur, at vulputate ligula vestibulum. Pellentesque suscipit pellentesque eleifend. Vivamus nec dignissim turpis, vulputate vestibulum lectus. Fusce eleifend fringilla sem.",
      position: {
        left: 100,
        top: 10
      },
    },
        
    {
      type: "text",
      title: "Healthy Joints",
      description: "Integer rhoncus eros id nulla consectetur, at vulputate ligula vestibulum. Pellentesque suscipit pellentesque eleifend. Vivamus nec dignissim turpis, vulputate vestibulum lectus. Fusce eleifend fringilla sem.",
      position: {
        left: 110,
        top: 290
      },
    },
     {
      type: "text",
      title: "Shiny Coat",
      description: "Integer rhoncus eros id nulla consectetur, at vulputate ligula vestibulum. Pellentesque suscipit pellentesque eleifend. Vivamus nec dignissim turpis, vulputate vestibulum lectus. Fusce eleifend fringilla sem.",
      position: {
        left: 250,
        top: 270
      },
    },
    ];
    
    // Initalize the plugin passing in variables we set.
    $('.interactive-image').interactiveImage(notes, options);

    
    
    // ========= About Page image slider =========
    
    
    $(function () {
       var slider = $("#slides");

        // Button click next 
        slider.parent().on("click", "a#btn-prev", function(e){
            e.preventDefault();
            
        var itemWidth = slider.parent().outerWidth();      
            
        slider.children("li:last").prependTo( slider );
            
        slider.css("left", -itemWidth);
        slider.animate({left: 0}, 400, "swing");
        });
        
        // Button click back
        slider.parent().on("click", "a#btn-next", function(e){
            e.preventDefault();
        var itemWidth = slider.parent().outerWidth();  
            
        slider.animate({left: -itemWidth}, 400, "swing", function(){
            slider.children("li:first").appendTo( slider );
            slider.css("left", 0);
            });
        });               
    });
    
    
});