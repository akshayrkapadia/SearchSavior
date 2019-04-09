// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {
  var searchbar = document.getElementById('searchbar');
  var answers = document.getElementById("answers");
  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function() {
    var q = searchbar.value;
    chrome.storage.sync.set({
      "stored_q": q
    });
    answers.src = "https://ui.customsearch.ai/hosted-page?customconfig=d0014089-d8da-4575-aeaf-5a409ea341d1&version=latest&market=en-US&q=" + q;
  });
  searchbar.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
      searchButton.click();
    }
  });
});
chrome.tabs.executeScript({
  code: "window.getSelection().toString();"
}, function(selection) {
  var searchbar = document.getElementById("searchbar");
  var q = "";
  if ((selection != null) && (selection[0] != "")) {
    q = selection[0];
    chrome.storage.sync.set({
      "stored_q": q
    });
    searchbar.value = q;
    var searchbar = document.getElementById('searchbar');
    var answers = document.getElementById("answers");
    answers.src = "https://ui.customsearch.ai/hosted-page?customconfig=d0014089-d8da-4575-aeaf-5a409ea341d1&version=latest&market=en-US&q=" + q;
    searchbar.focus();
  } else {
    chrome.storage.sync.get("stored_q", function(result) {
      var searchbar = document.getElementById("searchbar");
      q = result.stored_q;
      searchbar.value = q;
      var searchbar = document.getElementById('searchbar');
      var answers = document.getElementById("answers");
      answers.src = "https://ui.customsearch.ai/hosted-page?customconfig=d0014089-d8da-4575-aeaf-5a409ea341d1&version=latest&market=en-US&q=" + q;
      searchbar.focus();
    });
  }
});
