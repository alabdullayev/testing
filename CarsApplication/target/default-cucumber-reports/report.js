$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Cars page selection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wp"
    }
  ]
});
formatter.scenario({
  "name": "Search by Make",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on cars page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDef.user_is_on_cars_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Used Cars",
  "keyword": "When "
});
formatter.match({
  "location": "TestStepDef.user_selects_Used_Cars()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Make as \"Honda\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.user_selects_Make_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Model as \"Pilot\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.user_selects_Model_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Price as 50000",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.user_selects_Price_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Distance 100 miles",
  "keyword": "And "
});
formatter.match({
  "location": "TestStepDef.user_selects_Distance_miles(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters zip code 60008",
  "keyword": "And "
});
formatter.match({
  "location": "TestStepDef.user_Enters_zip_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks search button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.user_clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that filters are displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User selected all fields and clicked search",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDef.user_selected_all_fields_and_clicked_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Price\" \"Make\" \"Model\" and \"Used\" are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.verify_that_and_are_displayed(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects New radio button from New/Used",
  "keyword": "When "
});
formatter.match({
  "location": "TestStepDef.user_selects_New_radio_button_from_New_Used()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate that New filter is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.validate_that_New_filter_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Used filter is not selected",
  "keyword": "And "
});
formatter.match({
  "location": "TestStepDef.used_filter_is_not_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Touring 8-Paasenger\" from Trim",
  "keyword": "When "
});
formatter.match({
  "location": "TestStepDef.user_selects_from_Trim(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate that the \"Touring 8-Passenger\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.validate_that_the_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the second available car",
  "keyword": "And "
});
formatter.match({
  "location": "TestStepDef.user_select_the_second_available_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that car title contains \"Honda Pilot 8-Passenger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.verify_that_car_title_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that check availability button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TestStepDef.verify_that_check_availability_button_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"Car\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestStepDef.user_enters_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters last name \"Owner\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.user_enters_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email \"carowner@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestStepDef.user_enters_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User takes screenshot of payment calculator",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.user_takes_screenshot_of_payment_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});