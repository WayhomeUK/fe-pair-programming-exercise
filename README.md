# Frontend Pair Programming Exercise

### Feature

Credit check address component

### User Story

**As a** User  
**I want** to enter my residential addresses for the last 3 years  
**So that** I can get an accurate credit check report

### Acceptance Criteria

#### Scenario: All fields complete, current address is more than 3 years

**Given** I have filled in all the fields  
**When** I enter a move-in date greater than 3 years from today  
**Then** nothing should happen

#### Scenario: All fields complete, current address is equal to 3 years

**Given** I have filled in all the fields  
**When** I enter a move-in date equal to 3 years from today  
**Then** nothing should happen

#### Scenario: All fields complete, current address is equal to 3 years

**Given** I have filled in all the fields  
**When** I enter a move-in date equal to 3 years from today  
**Then** nothing should happen

#### Scenario: All fields complete, current address is less than to 3 years

**Given** I have filled in all the fields  
**When** I enter a move-in date which is less than 3 years from today  
**Then** I should see another address form appear beneath the current one  
**And** the title of the form should be '2nd Address'

#### Scenario: All fields complete, current and 2nd address is less than to 3 years

**Given** I have filled in all the fields  
**And** my current address move-in date is 1 year from today  
**When** I enter my 2nd address move-in date
**And** the move-in date is 2 years from today  
**Then** I should see another address form appear beneath the 2nd one  
**And** the title of the new form should be '3rd Address'
