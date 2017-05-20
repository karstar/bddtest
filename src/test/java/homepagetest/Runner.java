package homepagetest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags="@HomePageTest",format={"pretty","html:reports"})
public class Runner {

	
}
