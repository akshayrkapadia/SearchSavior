// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search');
    searchButton.addEventListener('click', function() {
        var q = document.getElementById("searchbar").value;
        var url ='https://akshayrkapadia.github.io/SearchSavior/?q=' + q;
        document.getElementById("search").href = url;
    });
    var searchbar = document.getElementById('searchbar');
    searchbar.addEventListener("keyup", function(e) {
    	if (e.keyCode == 13) {
      	searchButton.click();
    	}
  	});
});

chrome.tabs.executeScript({code: "window.getSelection().toString();"}, function(selection) {
  var searchbar = document.getElementById("searchbar");
  if (selection != null) {
  	searchbar.value = selection[0];
  }
  searchbar.focus();
});