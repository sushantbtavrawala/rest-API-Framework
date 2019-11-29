package Steps;

import Helper.APICall;
import Helper.APICallResponse;
import Helper.StartURL;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.deps.com.google.gson.JsonObject;
import io.restassured.RestAssured;
import io.restassured.config.HttpClientConfig;
import io.restassured.config.RestAssuredConfig;
import io.restassured.http.Headers;
import org.apache.http.params.CoreConnectionPNames;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;


public class Steps {

    private static final StartURL starturl = new StartURL();
    private static Helper.APICall apiCall;
    public static Helper.APICallResponse apiCallResponse;
    private static JsonObject PostJsonRequestString = new JsonObject();
    public static JsonObject PostJsonRequestInt=new JsonObject();
    private final RestAssuredConfig config;

    public Steps(APICall apiCall, APICallResponse apiCallResponse) {
        this.apiCall = apiCall;
        this.apiCallResponse = apiCallResponse;

        config = RestAssured.config()
                .httpClient(HttpClientConfig.httpClientConfig()
                        .setParam(CoreConnectionPNames.CONNECTION_TIMEOUT, 20000)
                        .setParam(CoreConnectionPNames.SO_TIMEOUT, 20000));
    }

     @Given("service is running")
     public void matching_service_is_running_with_something() throws Throwable {
         RestAssured.baseURI = starturl.InitialiseEnvironment();        }

    @When("^\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" information entered$")
    public void somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething_information_entered(String name, String type, Integer price, Integer shipping, String upc, String description, String manufacture, String model, String url, String image) throws Throwable {
         apiCall.set_name(name);
         apiCall.set_type(type);
         apiCall.set_price(price);
         apiCall.set_shipiing(shipping);
         apiCall.set_upc(upc);
         apiCall.set_description(description);
         apiCall.set_manufacture(manufacture);
         apiCall.set_model(model);
         apiCall.set_url(url);
         apiCall.set_image(image);
    }

    @Then("^the matching service returns a \"([^\"]*)\"$")
    public void the_matching_service_returns_a_something(int statuscode)  {
        assertEquals(statuscode,apiCallResponse.getResponse().getStatusCode());
        System.out.println("StatusCode: "+apiCallResponse.getResponse().getStatusCode());
    }

    @Given("^the information is received for the new created ID$")
    public void the_information_is_received_for_the_new_created_id()  {
        api_Get_ID(apiCall.Post_url(), APICall.ID);
    }

    @Then("^the post request response send with \"([^\"]*)\"$")
    public void the_post_request_response_send_with_something(String service)  {
        PostJsonRequestString = apiCall.Get_Match_Request_String();
        api_Post_Request(apiCall.get_Headers(service),apiCall.Post_url());

        //Store ID in ID variable

        var id = apiCallResponse.getResponse().path("id");
        apiCall.set_Id((Integer)id);
        System.out.println("New-ID: "+id);
    }

    @Then("^get request send to view the product with \"([^\"]*)\"$")
    public void get_request_send_to_view_the_product_with_something(String service) throws Throwable {
        api_Get_ID(apiCall.Post_url(), APICall.ID);
        assertEquals(Integer.valueOf(apiCall.ID),apiCallResponse.getResponse().path("id"));
    }

    @Then("^the update response send with \"([^\"]*)\"$")
    public void the_update_response_send_with_something(String service) throws Throwable {
        PostJsonRequestString = apiCall.Get_Match_Request_String();
        api_Update_ID(apiCall.get_Headers(service),apiCall.Post_url(),apiCall.save_ID());
    }

    @Then("^Delete request with product \"([^\"]*)\"$")
    public void delete_request_with_product_something(String service){
       api_Delete_ID(apiCall.Post_url(), APICall.save_ID());
    }
    //Post Request
    private void api_Post_Request(Headers headers, String url)
    {
        System.out.println("Headers: " + headers);

        apiCallResponse.setResponse(given()
                .config(config)
                .relaxedHTTPSValidation()
                .headers(headers)
                .body(apiCall.Get_Match_Request_String().toString())
                .when()
                .post(url)
        );
    }

    private void api_Get_ID(String url, int id)
    {
        String get_ID_Detail = url + id;
        System.out.println("GET " + get_ID_Detail);
        apiCallResponse.setResponse(given()
                .get(get_ID_Detail)
        );
    }

    private void api_Update_ID(Headers headers, String url, int id)
    {
        apiCallResponse.setResponse(given()
                .headers(headers)
                .body(apiCall.Get_Match_Request_String().toString())
                .when()
                .patch(url + id)
        );
    }

    private void api_Delete_ID(String url, int id)
    {
        String get_ID_Detail = url + id;
        System.out.println("GET " + get_ID_Detail);
        apiCallResponse.setResponse(given()
                .delete(get_ID_Detail)
        );
    }
}
