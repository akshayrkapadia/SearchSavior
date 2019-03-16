// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.runtime.onInstalled.addListener(function() {
  var contextMenuItem = {
  "id": "SearchSavior",
  "title": "SearchSavior",
  "contexts": ["selection"]
  };
  chrome.contextMenus.create(contextMenuItem);
  chrome.contextMenus.onClicked.addListener(function(click) {
    var q = click.selectionText;
    var url ='https://akshayrkapadia.github.io/SearchSavior/?q=' + q;
    chrome.tabs.create({"url":url})
  });
});

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.executeScript({code: "window.getSelection().toString();"}, function(selection) {
    if (selection != null) {
      var q = selection[0];
      var url ='https://akshayrkapadia.github.io/SearchSavior/?q=' + q;
      chrome.tabs.create({"url":url})
    } else {
      alert("NULL");
    }
  });
});
