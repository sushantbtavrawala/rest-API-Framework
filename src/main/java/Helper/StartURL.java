package Helper;

import io.restassured.RestAssured;

public class StartURL {


    public void initialise_Get_Request()
    {
        RestAssured.baseURI="http://localhost:3030/";
    }

    public String InitialiseEnvironment()
    {
        return System.getProperty("baseURL","http://localhost:3030");
    }


}
