# Wayhome Frontend PP Exercise

### Feature
Add sorting to property list

### User story
**As a** property moderator  
**I want** to sort property lists by different criteria  
**So that** I can choose the best properties more efficiently

### Summary
We currently have a list of properties which a moderator will review and decide which ones to push through the pipeline to buy. They now want the ability to sort this list so that it is easier for them to work with.

### Acceptance Criteria

#### Scenario: Sorting is available
**Given** I am on the property list page  
**When** the page has loaded  
**Then** I should see a label with the text "Sort by"  
**And** a select drop-down  
**And** the drop-down should have the following options:
* price, high to low
* price, low to high
* bedrooms, high to low
* bedrooms, low to high
* floor area, high to low
* floor area, low to high
* date, newest to oldest
* date, oldest to newest  

**And** the default sort option is price, high to low

#### Scenario: I can sort by my selected criteria
**Given** I am on the property list page  
**When** I select an option from the sort by drop-down  
**Then** the property list is sorted by the option I chose
