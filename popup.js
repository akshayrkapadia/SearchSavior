// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {
    var searchbar = document.getElementById('searchbar');
    var answers = document.getElementById("answers");
    var videos = document.getElementById("videos");
    var research = document.getElementById("research");
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function() {
      var q = searchbar.value;
      answers.src = "https://ui.customsearch.ai/hosted-page?customconfig=d0014089-d8da-4575-aeaf-5a409ea341d1&version=latest&market=en-US&q=" + q;
      videos.src = "https://ui.customsearch.ai/hosted-page?customconfig=388666c7-6da9-42e4-8e81-1680895c47a2&version=latest&market=en-US&q=" + q;
      research.src = "https://ui.customsearch.ai/hosted-page?customconfig=1a1b1a72-9fcc-4c78-b8d3-8cf67d6e695c&version=latest&market=en-US&q=" + q;
    });
    searchbar.addEventListener("keyup", function(e) {
    	if (e.keyCode == 13) {
        searchButton.click();
      }
  	});
    var answersButton = document.getElementById('answers_button');
    var q = searchbar.value;
    answersButton.addEventListener('click', function() {
        answers.width = 750;
        answers.height = 1100;
        videos.width = 0;
        videos.height = 0;
        research.width = 0;
        research.height = 0;
        answers.src = "https://ui.customsearch.ai/hosted-page?customconfig=d0014089-d8da-4575-aeaf-5a409ea341d1&version=latest&market=en-US&q=" + q;
        searchButton.click();
        searchbar.focus();
    });
    var videosButton = document.getElementById('videos_button');
    videosButton.addEventListener('click', function() {
        answers.width = 0;
        answers.height = 0;
        videos.width = 750;
        videos.height = 1100;
        research.width = 0;
        research.height = 0;
        videos.src = "https://ui.customsearch.ai/hosted-page?customconfig=388666c7-6da9-42e4-8e81-1680895c47a2&version=latest&market=en-US&q=" + q;
        searchButton.click();
        searchbar.focus();
    });
    var researchButton = document.getElementById('research_button');
    researchButton.addEventListener('click', function() {
        answers.width = 0;
        answers.height = 0;
        videos.width = 0;
        videos.height = 0;
        research.width = 750;
        research.height = 1100;
        research.src = "https://ui.customsearch.ai/hosted-page?customconfig=1a1b1a72-9fcc-4c78-b8d3-8cf67d6e695c&version=latest&market=en-US&q=" + q;
        searchButton.click();
        searchbar.focus();
    });
});

chrome.tabs.executeScript({code: "window.getSelection().toString();"}, function(selection) {
  var searchbar = document.getElementById("searchbar");
  var q = "";
  if (selection != null) {
  	q = selection[0];
  }
  searchbar.value = q;
  var searchbar = document.getElementById('searchbar');
  var answers = document.getElementById("answers");
  if (answers.width != 0) {
      answers.src = "https://ui.customsearch.ai/hosted-page?customconfig=d0014089-d8da-4575-aeaf-5a409ea341d1&version=latest&market=en-US&q=" + q;
  }
  var videos = document.getElementById("videos");
  if (videos.width != 0) {
    videos.src = "https://ui.customsearch.ai/hosted-page?customconfig=388666c7-6da9-42e4-8e81-1680895c47a2&version=latest&market=en-US&q=" + q;
  }
  var research = document.getElementById("research");
  if (research.width != 0) {
    research.src = "https://ui.customsearch.ai/hosted-page?customconfig=1a1b1a72-9fcc-4c78-b8d3-8cf67d6e695c&version=latest&market=en-US&q=" + q;
  }
  searchbar.focus();
});