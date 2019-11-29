package Helper;

import gherkin.deps.com.google.gson.JsonObject;
import io.restassured.http.Header;
import io.restassured.http.Headers;

import static Steps.Steps.apiCallResponse;
import static io.restassured.RestAssured.baseURI;

public class APICall {

    public static String EMPTY_STRING="";
    public static Integer EMPTY_INT= 0;

    public static String NAME=EMPTY_STRING;
    public static String TYPE=EMPTY_STRING;

    public static Integer PRICE=EMPTY_INT;
    public static Integer SHIPPING=EMPTY_INT;

    public static String UPC=EMPTY_STRING;
    public static String DESCRIPTION=EMPTY_STRING;
    public static String MANUFACTURER=EMPTY_STRING;
    public static String MODEL=EMPTY_STRING;
    public static String URL=EMPTY_STRING;
    public static String IMAGE=EMPTY_STRING;
    public static Integer ID=null;


    public void set_name(String name)
    {
        NAME=name;
    }
    public void set_type(String type)
    {
        TYPE=type;
    }

    public void set_price(int price)
    {
        PRICE=price;
    }
    public void set_shipiing(int shipiing)
    {
        SHIPPING=shipiing;
    }

    public void set_upc(String upc)
    {
        UPC=upc;
    }
    public void set_description(String description)
    {
        DESCRIPTION=description;
    }
    public void set_manufacture(String manufacturer)
    {
        MANUFACTURER=manufacturer;
    }
    public void set_model(String model)
    {
        MODEL=model;
    }
    public void set_url(String url)
    {
        URL=url;
    }
    public void set_image(String image)
    {
        IMAGE=image;
    }

    public void set_Id(Integer id) {ID=id;}

    //URL End point
    public static String END_POINT="/products/";


    public Headers get_Headers(String service) {
        Header contentType = new Header("Content-Type", "application/json");
        Header contentControl = new Header("Content-Control", "no-cache");
        Header services = new Header("services", service);
        return new Headers(contentType, contentControl, services);
    }

    public String Post_url()
    {
        return baseURI + END_POINT;
    }

    public static Integer save_ID()
    {
        Integer iD = apiCallResponse.getResponse().path("id");
        return iD;
    }


    public JsonObject Get_Match_Request_String()
    {
        JsonObject matchrequest = new JsonObject();

        matchrequest.addProperty("name",NAME);
        matchrequest.addProperty("type",TYPE);
        matchrequest.addProperty("upc",UPC);
        matchrequest.addProperty("description",DESCRIPTION);
        matchrequest.addProperty("manufacturer",MANUFACTURER);
        matchrequest.addProperty("model",MODEL);
        matchrequest.addProperty("url",URL);
        matchrequest.addProperty("image",IMAGE);
        matchrequest.addProperty("price",PRICE);
        matchrequest.addProperty("shipping",SHIPPING);

        System.out.println(matchrequest);

        return matchrequest;
    }

    public JsonObject Get_Match_Request_Integer()
    {
        JsonObject matchrequest = new JsonObject();

        matchrequest.addProperty("price",PRICE);
        matchrequest.addProperty("shipping",SHIPPING);

        System.out.println(matchrequest);

        return matchrequest;
    }


}
