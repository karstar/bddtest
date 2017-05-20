@HomePageTest
Feature: validating the NTL Application
Scenario: validating the application with positive data
#Given Open Browser as firefox
#Then Enter URL as http://www.ntltaxi.com/
#Then Enter Username as Vmetry
#Then Enter mobilenumber as 9790706015
#And Enter PickupAddress as ADYAR
#And Enter DropAddress as ADYAR
#Then Select VehicleType as Sedan
#And click Booklater checkbox
#But Dont click book button

Scenario: validating the application with positive data
Given Open Browser as <BROWSER>
Then Enter URL as <URL>
Then Enter Username as <USERNAME>
Then Enter mobilenumber as <MOBILENUMBER>
And Enter PickupAddress as <PICKUPADDRESS>
And Enter DropAddress as <DropADDRESS>
Then Select VehicleType <VEHICLE>
And click Booklater checkbox
But Dont click back button
Examples:
|BROWSER|URL|USERNAME|MOBILENUMBER|PICKUPPLACE|DROPADDRESS|VEHICLE
|Firefox|http://www.ntltaxi.com/|VMETRY|9790706015|ADYAR|ADYAR|Sedan
|Firefox|http://www.ntltaxi.com/|VMETRYA|9790706014|ADYAR|ADYAR|Sedan
|Firefox|http://www.ntltaxi.com/|VMETRYB|9790706013|ADYAR|ADYAR|Sedan