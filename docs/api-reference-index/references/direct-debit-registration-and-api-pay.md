---
source_url: "https://developer.scb/#/documents/api-reference-index/references/direct-debit-registration-and-api-pay.html"
source_route: "#/documents/api-reference-index/references/direct-debit-registration-and-api-pay.html"
source: SCB Developer Portal
content_hash: 3a0c271259c4e0504da28e3a60377ac77a272733cda8e4a66f16c3604f5dda75
---

# DIRECT DEBIT REGISTRATION RESPONSE CODE

| HTTP Status Code | Business Code | Status Code | Error Code | Description | Remarks | Registration Status |
| :-: | :-: | :-: | :-: | --- | --- | :-: |
| 200 | 1000 | 0 |  | Success |  | Success |
| 200 | 1000 | 0001 |  | Initiated | (Only for inquiry API) | Pending |
| 200 | 1000 | 0002 |  | Verified Passed | (Only for inquiry API) | Fail |
| 200 | 1000 | 0003 | 1 | Verified Failed | Citizen ID/Passport number/Alien ID is not match with account | Fail |
| 200 | 1000 | 0003 | 2 | Verified Failed | Birth Date is invalid | Fail |
| 200 | 1000 | 0003 | 3 | Verified Failed | Citizen ID /Passport number/Alien ID is not match | Fail |
| 200 | 1000 | 0003 | 7 | Verified Failed | Invalid consented customer information | Fail |
| 200 | 1000 | 0003 | 8 | Verified Failed | Consented customer information internal exception | Fail |
| 200 | 1000 | 0003 | 9 | Verified Failed | Invalid ATM Card No | Fail |
| 200 | 1000 | 0003 | 10 | Verified Failed | Invalid ATM PIN No | Fail |
| 200 | 1000 | 0003 | 11 | Verified Failed | Invalid ATM exceeded limit | Fail |
| 200 | 1000 | 0003 | 14 | Verified Failed | Passport number is not match with biller | Fail |
| 200 | 1000 | 0003 | 15 | Verified Failed | Alien ID is not match with Biller | Fail |
| 200 | 1000 | 0003 | 16 | Verified Failed | Passport number is not match | Fail |
| 200 | 1000 | 0003 | 17 | Verified Failed | Alien ID is not match | Fail |
| 200 | 1000 | 0003 | 18 | Verified Failed | Account number not match | Fail |
| 200 | 1000 | 0003 | 19 | Verified Failed | Account number not match with biller | Fail |
| 200 | 1000 | 0003 | 99 | Verified Failed | Unexpected error has occurred | Fail |
| 200 | 1000 | 0004 |  | Term and Conditions | (Only for inquiry API) | Fail |
| 200 | 1000 | 0005 |  | Request OTP |  | Fail |
| 200 | 1000 | 0005 | 5 | Request OTP | Resend OTP exceeded limit | Fail |
| 200 | 1000 | 0005 | 8 | Request OTP | Consented customer information internal exception | Fail |
| 200 | 1000 | 0005 | 12 | Request OTP | Mobile not found | Fail |
| 200 | 1000 | 0006 | 4 | OTP Failed | OTP failed exceeded limit | Fail |
| 200 | 1000 | 0006 | 8 | OTP Failed | Consented customer information internal exception | Fail |
| 200 | 1000 | 0006 | 99 | OTP Failed | Unexpected error has occurred | Fail |
| 200 | 1000 | 9999 | 6 | Error | Web register session timeout | Fail |
| 200 | 1000 | 9999 | 99 | Error | Unexpected error has occurred | Fail |
| 400 | 1101 |  |  | Missing required parameters |  | Fail |
| 400 | 1102 |  |  | Invalid parameters entered |  | Fail |
| 400 | 1103 |  |  | Empty string input not supported |  | Fail |
| 404 | 1104 |  |  | Requested entity record does not exist |  | Fail |
| 400 | 1105 |  |  | Unrecognized field name was entered - Please check spelling and/or refer to the API docs for correct name |  | Fail |
| 400 | 1111 |  |  | Data entry duplicated with existing |  | Fail |
| 400 | 8102 |  |  | Payment API error code |  | Fail |
| 400 | 9100 |  |  | Required standard headers |  | Fail |
| 401 | 9100 |  |  | Missing required authorization credentials |  | Fail |
| 401 | 9300 |  |  | Invalid/expired temporary token |  | Fail |
| 401 | 9500 |  |  | Invalid apikey provided |  | Fail |
| 403 | 9503 |  |  | Invalid access rights |  |  |
| 405 | 9900 |  |  | Wrong http method requested on endpoint |  | Fail |
| 415 | 9900 |  |  | Unsupported content type defined |  | Fail |
| 500 | 8101 |  |  | Invalid response from downstream service | ValidationMessage: Invalid input format Description:  
regRef can not be null  
regRef can not be empty  
regRef length can not over 20 characters  
ref1 can not be null  
ref1 can not be empty  
ref1 length can not over 20 characters  
ref2 length can not over 20 characters  
remarks length can not over 100 characters  
backUrl can not be null  
backUrl can not be empty backUrl is invalid format  
merchantId is invalid format  
  
ValidationMessage: Specified resource not found Description:  
regRef 'xxxxx' not found  
merchantId 'xxxx' not found  
subAccountId 'xxxxx' not found  
  
ValidationMessage: Specified resource is duplicate. Description:  
regRef is duplicate.  
  
ValidationMessage: Persistence Exception Description:  
Error while decrypting data | Fail |
| 500 | 8901 |  |  | Database error |  | Fail |
| 500 | 9700 |  |  | Generic server side error |  | Fail |
| 500 | 9900 |  |  | Threat has been detected |  | Fail |
| 501 | 4101 |  |  | Current channel is not supported |  | Fail |
| 502 | 9900 |  |  | Invalid response from upstream server |  | Fail |
| 503 | 9900 |  |  | Server is currently unavailable because traffic overload or it is down for maintenance |  | Fail |
| 504 | 9900 |  |  | API Request Timeout |  | Pending |
