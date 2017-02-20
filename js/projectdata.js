$(function() {

  // Project Data

  var project1_data = {
    title: "Audition Revolution",
    tech: "HTML(Bootstrap), Javascript(JQuery), PHP(Laravel), SQL(MySQL)",
    desc: "This was created with a team as a senior design project for an actual client. Audition revolution is a start-up which seeks to streamline the casting and audition process for theatrical productions, which is still heavily reliant on pen-and-paper resumes and folders. My role on the team was UI design as well as project organization.",
    highlights: ["Utilizes MVC model afforded by the laravel API", "MySQL database for user profile storage", "Front-end utilizes bootstrap responsive elements"],
    imageFolder: "./images/projects/ar/",
    images: ["ar_01.png", "ar_02.png", "ar_03.png"],
    sourcelink: "https://www.github.com/jrodonnell909/Audition-Revolution"
  };

  var project2_data = {
    title: "Argon Vuforia Prototype",
    tech: "HTML, Javascript(Three.js, Argon, Vuforia)",
    desc: "A project I completed in the Spring of 2015 with another classmate in my augmented reality course. The challenge was to create a prototype for an augmented reality app to help tourism for Atlanta's historic Auburn avenue. It gives the user 'a view to the past' by generating an image of what a building looked like in the past, and projecting it onto a panorama. The user would scan a QR code on the side of the building in order to view the image.",
    highlights: ["Designed to run in the Argon augmented-reality browser", "Javascript backend with three.js for displaying 3D objects and Vuforia for reading QR codes."],
    imageFolder: "./images/projects/etp/",
    images: ["etp_01.png", "etp_02.png", "etp_03.png"],
    sourcelink: "https://www.github.com/jrodonnell909/argon-project"
  };

  var project3_data = {
    title: "Hello World",
    tech: "Javascript, HTML",
    desc: "Hi, I am a lorem ipsum. Watch me lorem ipsum all over this modal!",
    highlights: ["foo", "bar", "bas", "bob"],
    images: [],
    sourcelink: ""
  };

  var project4_data = {
    title: "Hello World",
    tech: "Javascript, HTML",
    desc: "Hi, I am a lorem ipsum. Watch me lorem ipsum all over this modal!",
    highlights: ["foo", "bar", "bas", "bob"],
    images: [],
    sourcelink: ""
  };

  makeImageString = function(file, alt) {
    return '<div class="row">' + '<img src="' + file + '" id="screenshot1" alt="' + alt + '" width="256px" height="128px"' + '<//div>';
  };

  $('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    var whichData;
    switch (recipient) {
      case "@project1":
        whichData = project1_data;
        break;
      case "@project2":
        whichData = project2_data;
        break;
      case "@project3":
        whichData = project3_data;
        break;
      case "@project4":
        whichData = project4_data;
        break;
      default:
        alert("No data set for this button!");
    }
    modal.find('.modal-title').text(whichData.title);
    modal.find('.modal-tech').text("Technology Used: " + whichData.tech);
    modal.find('.modal-desc').text(whichData.desc);
    modal.find('.modal-highlights').empty()
    for (string in whichData.highlights) {
      modal.find('.modal-highlights').append('<li>' + whichData.highlights[string] + '</li>')
    }
    modal.find('.image-column').empty()
    for (string in whichData.images) {
      modal.find('.image-column').append(makeImageString(whichData.imageFolder + whichData.images[string], "image"));
    }
    modal.find('.github-link').attr("href", whichData.sourcelink)
  });

});
