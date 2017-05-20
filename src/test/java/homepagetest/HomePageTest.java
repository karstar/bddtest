package homepagetest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageTest {
@Given("^Open Browser as (.*) $")//special characters for start and stop
public void OpenBrowser(String Browser){
	System.out.println("Opening the browser" + Browser);
}
@Then("^Enter URL as (.*)$")
public void EnterURL(String URL){
	System.out.println("Entering URL"+ URL);
}
@Then ("^Enter Username as (.*)$")
public void EnterUsername(String Username){
	System.out.println("Entering Username" + Username);
}
@Then ("^Enter mobilenumber as (.*)$")
public void Entermobilenumber(String mobilenumber){
	System.out.println("Enter mobilenumber"+ mobilenumber);
}
@And ("^Enter PickupAddress as (.*)$")
public void EnterPickupAddress(String PickupAddress){
	System.out.println("Entering Pickup Address" + PickupAddress);
}
@And("^Enter DropAddress as (.*)$")
public void DropAddress(String DropAddress){
	System.out.println("Entering Drop Address" + DropAddress);
}
@Then("^Select VehicleType as (.*)$")
public void VehicleType(String Vehicle){
	System.out.println("VehicleType");
}
@And("^Click Booklater checkbox as (.*)$")
public void booklater(String Booklater){
	System.out.println("Booklater");
}
@But("^Dont click back button as (.*)$")
public void dontclick(){
	System.out.println("Dontclick");
}
}