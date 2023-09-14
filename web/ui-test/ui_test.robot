*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BROWSER}       chrome
${SELENIUM HUB}  http://10.9.50.224:4444
${URL}           http://localhost
${EXPECTED TITLE}    ProductApp

*** Test Cases ***
Open Browser And Visit Website
    Open Browser    ${URL}    browser=${BROWSER}    remote_url=${SELENIUM HUB}
    Title Should Be    ${EXPECTED TITLE}
    Read Table Data

Close Browser
    Close Browser

*** Keywords ***
Read Table Data
    # Wait for the table to load (adjust the timeout as needed)
    Wait Until Page Contains Element    xpath=//table[@class="table"]    timeout=10s

    # Get the number of rows in the table
    ${row_count}    Get Table Row Count    xpath=//table[@class="table"]

    # Get the number of columns in the table (assuming all rows have the same number of columns)
    ${column_count}    Get Table Column Count    xpath=//table[@class="table"]//tr[1]

    Log    Number of Rows in the Table: ${row_count}
    Log    Number of Columns in the Table: ${column_count}

    # Loop through the rows and columns to read data
    : FOR    ${row_index}    IN RANGE    1    ${row_count}+1
    \    : FOR    ${col_index}    IN RANGE    1    ${column_count}+1
    \    \    ${cell_value}    Get Table Cell    xpath=//table[@class="table"]//tr[${row_index}]//td[${col_index}]
    \    \    Log    Row: ${row_index}, Column: ${col_index} - Value: ${cell_value}