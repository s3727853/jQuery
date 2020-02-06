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
$("#bth").click(function(){
    
//                  Set a variable with the current visible page so we can transition it out
                    var currentPage = $(".page:visible");
    
                  
//                  Only transition to homepage of we are not on homepage
                    if ($("#homepage").is(":hidden")){

                        $("#homepage").toggle("slide", {direction: "left"}, 600 );
                        
                        currentPage.toggle("slide", {direction: "right"}, 600);
                    } 
    
                 });
    


    
    
    // ========= Food Creator =========
    

    var currentFieldset, nextFieldset, previousFieldset; // Fieldsets
    var transitioning // use this to check that an animation isn't already underway
    
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
        
        
        
        console.log("Next clicked");
                     
//        if(transitioning) return false;
//        transitioning = true;
    
  
        // Set the current and next fieldset variables
        currentFieldset = $(this).parent();
        
        
        nextFieldset = $(this).parent().next();
        
        console.log("Next FS ");
        console.log(nextFieldset);
    
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
        for (var i = 1; i <= 12; i++) {
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
    
  // On checkbox state change get the value of any other checkbox elements that are not the selected one and set checked to false.
    $('input[type="checkbox"]').on('change', function() {
        $('input[type="checkbox"]').not(this).prop('checked', false);
    });

    
//========= Final product from food creator form =========    

$(".finish").click(function() {
    
    // Transition food creator section off screen
    $("#foodcreator").toggle("slide", {direction: "left"}, 600);
    // Transition final page onto screen
    $("#finalProduct").toggle("slide", {direction: "right"}, 600 );
    
    $(".fa").addClass("animate");
    // Draw svg
    var svg = $("svg").drawsvg({duration: 3500});
    svg.drawsvg("animate");
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
    
// ======= Menu ======
    

// simple if/else to open close
    
$(".hamburger").click(function() { 
    if($("#myNav").hasClass("active")) {
        $("#myNav")
            .css("height", "0%")
            .removeClass("active");
    }
    
  else {
        $("#myNav")
            .css("height", "100%")
            .addClass("active");
    }
  
});


    
});