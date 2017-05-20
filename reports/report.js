$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepagetest/home.feature");
formatter.feature({
  "id": "validating-the-ntl-application",
  "tags": [
    {
      "name": "@HomeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "validating the NTL Application",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "validating-the-ntl-application;validating-the-application-with-positive-data",
  "description": "",
  "name": "validating the application with positive data",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "Open Browser",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Enter URL",
  "keyword": "Then ",
  "line": 5
});
formatter.step({
  "name": "Enter Username",
  "keyword": "Then ",
  "line": 6
});
formatter.step({
  "name": "Enter mobilenumber",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "Enter Pickup Address",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "Enter Drop Address",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Select Vehicle Type",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "click Booklater checkbox",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Dont click book button",
  "keyword": "But ",
  "line": 12
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "HomePageTest.EnterURL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "HomePageTest.Entermobilenumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});