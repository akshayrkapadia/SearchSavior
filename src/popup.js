// Global variables
var searchButton = document.getElementById("searchButton");
var searchbar = document.getElementById('searchbar');
searchbar.focus();

// Button click to feed search term to webpage
searchButton.addEventListener("click", function() {
  var q = searchbar.value;
  if (q != 'undefined') {
		chrome.storage.sync.set({
			"stored_q": q
		});
		answers.src = "https://akshayrkapadia.github.io/SearchSaviorCustomSearch/?q=" + q;
	} else {
		searchbar.focus();
	}
});

// Clicks button when enter is pressed
document.addEventListener('DOMContentLoaded', function() {
  var searchbar = document.getElementById('searchbar');
  var searchButton = document.getElementById("searchButton");
  searchbar.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
      searchButton.click();
    }
  });
});

// Checks if text is selected and pastes it into the search box
chrome.tabs.executeScript({
  code: "window.getSelection().toString();"
	}, function(selection) {
  var searchbar = document.getElementById("searchbar");
  var q = "";
  // If the selection is valid then paste it into the search box and click button
  if ((selection != null) && (selection[0] != "")) {
    q = selection[0];
    chrome.storage.sync.set({
      "stored_q": q
    });
    searchbar.value = q;
  	var searchButton = document.getElementById("searchButton");
    searchButton.click();
    searchbar.focus();
  } else {
    // Get the previous saved search term and paste it into the search box and click button
    chrome.storage.sync.get("stored_q", function(result) {
      var searchbar = document.getElementById("searchbar");
      q = result.stored_q;
      if ((q != null) && (q != 'undefined')) {
      	searchbar.value = q;
      	var searchButton = document.getElementById("searchButton");
      	searchButton.click();
      	searchbar.focus();
  		}
    });
  }
});
