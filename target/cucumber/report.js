$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PostRequest.feature");
formatter.feature({
  "line": 1,
  "name": "1. POST test scenarios",
  "description": "",
  "id": "1.-post-test-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "1- POST request to add the product",
  "description": "",
  "id": "1.-post-test-scenarios;1--post-request-to-add-the-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "service is running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"\u003cname\u003e\",\"\u003ctype\u003e\",\"\u003cprice\u003e\",\"\u003cshipping\u003e\",\"\u003cupc\u003e\",\"\u003cdescription\u003e\",\"\u003cmanufacturer\u003e\",\"\u003cmodel\u003e\",\"\u003curl\u003e\",\"\u003cimage\u003e\" information entered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the post request response send with \"\u003cservice\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the matching service returns a \"\u003cstatusCode\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "1.-post-test-scenarios;1--post-request-to-add-the-product;",
  "rows": [
    {
      "cells": [
        "service",
        "name",
        "type",
        "price",
        "shipping",
        "upc",
        "description",
        "manufacturer",
        "model",
        "url",
        "image",
        "statusCode"
      ],
      "line": 11,
      "id": "1.-post-test-scenarios;1--post-request-to-add-the-product;;1"
    },
    {
      "cells": [
        "products",
        "MAC",
        "MACBOOK",
        "2000",
        "100",
        "String",
        "Work Macbook",
        "APPLE",
        "APPLE",
        "String",
        "String",
        "201"
      ],
      "line": 12,
      "id": "1.-post-test-scenarios;1--post-request-to-add-the-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "1- POST request to add the product",
  "description": "",
  "id": "1.-post-test-scenarios;1--post-request-to-add-the-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "service is running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"MAC\",\"MACBOOK\",\"2000\",\"100\",\"String\",\"Work Macbook\",\"APPLE\",\"APPLE\",\"String\",\"String\" information entered",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the post request response send with \"products\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the matching service returns a \"201\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.matching_service_is_running_with_something()"
});
formatter.result({
  "duration": 666071545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAC",
      "offset": 1
    },
    {
      "val": "MACBOOK",
      "offset": 7
    },
    {
      "val": "2000",
      "offset": 17
    },
    {
      "val": "100",
      "offset": 24
    },
    {
      "val": "String",
      "offset": 30
    },
    {
      "val": "Work Macbook",
      "offset": 39
    },
    {
      "val": "APPLE",
      "offset": 54
    },
    {
      "val": "APPLE",
      "offset": 62
    },
    {
      "val": "String",
      "offset": 70
    },
    {
      "val": "String",
      "offset": 79
    }
  ],
  "location": "Steps.somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething_information_entered(String,String,Integer,Integer,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5303649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "products",
      "offset": 37
    }
  ],
  "location": "Steps.the_post_request_response_send_with_something(String)"
});
formatter.result({
  "duration": 704637608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 32
    }
  ],
  "location": "Steps.the_matching_service_returns_a_something(int)"
});
formatter.result({
  "duration": 12541331,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "2- GET request to capture the product",
  "description": "",
  "id": "1.-post-test-scenarios;2--get-request-to-capture-the-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "service is running",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"\u003cname\u003e\",\"\u003ctype\u003e\",\"\u003cprice\u003e\",\"\u003cshipping\u003e\",\"\u003cupc\u003e\",\"\u003cdescription\u003e\",\"\u003cmanufacturer\u003e\",\"\u003cmodel\u003e\",\"\u003curl\u003e\",\"\u003cimage\u003e\" information entered",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "capture new generated id with get \"\u003cservice\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the matching service returns a \"\u003cstatusCode\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "1.-post-test-scenarios;2--get-request-to-capture-the-product;",
  "rows": [
    {
      "cells": [
        "service",
        "name",
        "type",
        "price",
        "shipping",
        "upc",
        "description",
        "manufacturer",
        "model",
        "url",
        "image",
        "statusCode"
      ],
      "line": 22,
      "id": "1.-post-test-scenarios;2--get-request-to-capture-the-product;;1"
    },
    {
      "cells": [
        "products",
        "MAC",
        "MACBOOK",
        "2000",
        "100",
        "String",
        "Work Macbook",
        "APPLE",
        "APPLE",
        "String",
        "String",
        "200"
      ],
      "line": 23,
      "id": "1.-post-test-scenarios;2--get-request-to-capture-the-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "2- GET request to capture the product",
  "description": "",
  "id": "1.-post-test-scenarios;2--get-request-to-capture-the-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "service is running",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"MAC\",\"MACBOOK\",\"2000\",\"100\",\"String\",\"Work Macbook\",\"APPLE\",\"APPLE\",\"String\",\"String\" information entered",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "capture new generated id with get \"products\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the matching service returns a \"200\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.matching_service_is_running_with_something()"
});
formatter.result({
  "duration": 927144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAC",
      "offset": 1
    },
    {
      "val": "MACBOOK",
      "offset": 7
    },
    {
      "val": "2000",
      "offset": 17
    },
    {
      "val": "100",
      "offset": 24
    },
    {
      "val": "String",
      "offset": 30
    },
    {
      "val": "Work Macbook",
      "offset": 39
    },
    {
      "val": "APPLE",
      "offset": 54
    },
    {
      "val": "APPLE",
      "offset": 62
    },
    {
      "val": "String",
      "offset": 70
    },
    {
      "val": "String",
      "offset": 79
    }
  ],
  "location": "Steps.somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething_information_entered(String,String,Integer,Integer,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 700764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "products",
      "offset": 35
    }
  ],
  "location": "Steps.capture_new_generated_id_with_get_something(String)"
});
formatter.result({
  "duration": 387721272,
  "error_message": "java.lang.AssertionError: expected:\u003c9999703\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat Steps.Steps.capture_new_generated_id_with_get_something(Steps.java:82)\n\tat ✽.Then capture new generated id with get \"products\"(PostRequest.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "Steps.the_matching_service_returns_a_something(int)"
});
formatter.result({
  "status": "skipped"
});
});