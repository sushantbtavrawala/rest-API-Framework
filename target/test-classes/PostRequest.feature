Feature: 1.POST test scenarios

  Scenario Outline: 1- POST request to add the product

    Given service is running
    When "<name>","<type>","<price>","<shipping>","<upc>","<description>","<manufacturer>","<model>","<url>","<image>" information entered
    Then the post request response send with "<service>"
    And the matching service returns a "<statusCode>"

    Examples:
      | service  | name | type    | price | shipping | upc    | description  | manufacturer | model | url    | image  | statusCode |
      | products | MAC  | MACBOOK | 2000  | 100      | String | Work Macbook | APPLE        | APPLE | String | String | 201        |

  Scenario Outline: 2- GET request to capture the product

    Given service is running
    Then get request send to view the product with "<service>"
    And the matching service returns a "<statusCode>"

    Examples:
      | service  | statusCode |
      | products | 200        |

  Scenario Outline: 3- UPDATE request to capture the product

    Given service is running
    And get request send to view the product with "<service>"
    When "<name>","<type>","<price>","<shipping>","<upc>","<description>","<manufacturer>","<model>","<url>","<image>" information entered
    Then the update response send with "<service>"
    And the matching service returns a "<statusCode>"

    Examples:
      | service  | name | type    | price | shipping | upc    | description  | manufacturer | model | url    | image  | statusCode |
      | products | DELL | WINDOWS | 399   | 50       | String | Work Macbook | DELL         | DELL  | String | String | 200        |

  Scenario Outline: 4- DELETE request of capture product

    Given service is running
    And get request send to view the product with "<service>"
    Then Delete request with product "<service>"
    And the matching service returns a "<statusCode>"

    Examples:
      | service  | statusCode |
      | products | 200        |