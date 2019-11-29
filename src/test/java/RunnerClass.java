import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
            features = {"src/test/resources"},
            plugin = {"pretty","html:target/cucumber","json:target/cucumber/jsonReport.json","junit:target/cucumber/xmlReport.xml"},
            glue = {"Steps"}
            //,dryRun = true
    )

public class RunnerClass {

    }

