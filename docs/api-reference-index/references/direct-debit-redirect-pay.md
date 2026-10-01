---
source_url: "https://developer.scb/#/documents/api-reference-index/references/direct-debit-redirect-pay.html"
source_route: "#/documents/api-reference-index/references/direct-debit-redirect-pay.html"
source: SCB Developer Portal
content_hash: f6818ec342747dcd4fb060fb190b11e6380788aeab1cd6df9f0605d85da80080
---

# DIRECT DEBIT PAYMENT RESPONSE CODE

| HTTP Status Code | Business Code | Status Code | Response Code | Description | Remarks | Transaction Status |
| :-: | :-: | :-: | :-: | --- | --- | :-: |
| 200 | 1000 | 1000 |  | Payment Success |  | Success |
| 200 | 1000 | 1001 | 01 | Duplicated Transaction | (API and Web) | Fail |
| 200 | 1000 | 1001 | 02 | Amount exceeded limit | (API and Web) | Fail |
| 200 | 1000 | 1001 | 03 | Invalid customer reference | (API and Web) | Fail |
| 200 | 1000 | 1001 | 04 | OTP is required | (Web only) | Fail |
| 200 | 1000 | 1001 | 05 | OTP failed exceeded limit | (Web only) | Fail |
| 200 | 1000 | 1001 | 06 | Resend OTP exceeded limit | (Web only) | Fail |
| 200 | 1000 | 1001 | 07 | Authentication failed | (Web only) | Fail |
| 200 | 1000 | 1001 | 08 | Redirect payment session timeout | (Web only) | Fail |
| 200 | 1000 | 1001 | 09 | Merchant integration type is mismatch | (API and Web) | Fail |
| 200 | 1000 | 1001 | 10 | Corp ID not found | (Web only) | Fail |
| 200 | 1000 | 1001 | 11 | Easy net fraud detector | (Web only) | Fail |
| 200 | 1000 | 1001 | 12 | This account has been closed | (Web only) | Fail |
| 200 | 1000 | 1001 | 13 | Secure mobile not found | (Web only) | Fail |
| 200 | 1000 | 1001 | 14 | Expired transaction | (Web only) | Fail |
| 200 | 1000 | 1001 | 15 | Account not found | (Web only) | Fail |
| 200 | 1000 | 1001 | 16 | Your Account on Business Net have not completed | (Web only) | Fail |
| 200 | 1000 | 1001 | 18 | This OD Account does not match with eligible supplier | (Web only) | Fail |
| 200 | 1000 | 1001 | 98 | Service Temporary Unavailable | (Web only) | Fail |
| 200 | 1000 | 1001 | 99 | Unexpected error has occurred | (API and Web) | Fail |
| 200 | 1000 | 1002 | H030 | Payment Failed | Potential Duplicate Transaction from front-end | Fail |
| 200 | 1000 | 1002 | H109 | Payment Failed | Transaction is cancelled | Fail |
| 200 | 1000 | 1002 | H113 | Payment Failed | Invalid Amount | Fail |
| 200 | 1000 | 1002 | H117 | Payment Failed | Invalid Channel | Fail |
| 200 | 1000 | 1002 | H131 | Payment Failed | Invalid reference 1 | Fail |
| 200 | 1000 | 1002 | H132 | Payment Failed | Invalid reference 2 | Fail |
| 200 | 1000 | 1002 | H133 | Payment Failed | Invalid reference 3 | Fail |
| 200 | 1000 | 1002 | H165 | Payment Failed | Amount or number of transaction is over limit | Fail |
| 200 | 1000 | 1002 | H176 | Payment Failed | Invalid Destination Account Number | Fail |
| 200 | 1000 | 1002 | H182 | Payment Failed | Account Not Found | Fail |
| 200 | 1000 | 1002 | H184 | Payment Failed | It is cut off time. This bill cannot be paid | Fail |
| 200 | 1000 | 1002 | H190 | Payment Failed | Connection error between biller bank and biller | Fail |
| 200 | 1000 | 1002 | H195 | Payment Failed | Transaction cannot be processed at biller | Fail |
| 200 | 1000 | 1002 | H210 | Payment Failed | Payee Proxy Not Active | Fail |
| 200 | 1000 | 1002 | H270 | Payment Failed | Payee Account Not Active | Fail |
| 200 | 1000 | 1002 | H310 | Payment Failed | Payer Proxy Not Active | Fail |
| 200 | 1000 | 1002 | H330 | Payment Failed | Payer Account Not Active | Fail |
| 200 | 1000 | 1002 | H340 | Payment Failed | Insufficient Funds | Fail |
| 200 | 1000 | 1002 | H340 | Payment Failed | Payer Insufficient Funds | Fail |
| 200 | 1000 | 1002 | H410 | Payment Failed | Confirm too late | Fail |
| 200 | 1000 | 1002 | H420 | Payment Failed | Transaction Reference Not Found | Fail |
| 200 | 1000 | 1002 | H430 | Payment Failed | Invalid Transaction Status | Fail |
| 200 | 1000 | 1002 | H460 | Payment Failed | Authentication Failed | Fail |
| 200 | 1000 | 1002 | H505 | Payment Failed | Invalid Payment Method | Fail |
| 200 | 1000 | 1002 | H508 | Payment Failed | Not Resident Customer | Fail |
| 200 | 1000 | 1002 | H509 | Payment Failed | Customer Not Found | Fail |
| 200 | 1000 | 1002 | H901 | Payment Failed | Invalid Creditor Account Number | Fail |
| 200 | 1000 | 1002 | H901 | Payment Failed | NotAllowed Account | Fail |
| 200 | 1000 | 1002 | H901 | Payment Failed | InvalidDebitorAccountNumber | Fail |
| 200 | 1000 | 1002 | H901 | Payment Failed | The payee account and payer account number are the same | Fail |
| 200 | 1000 | 1002 | H902 | Payment Failed | Frozen Account | Fail |
| 200 | 1000 | 1002 | H903 | Payment Failed | Closed Account | Fail |
| 200 | 1000 | 1002 | H904 | Payment Failed | Transaction is Over Limit | Fail |
| 200 | 1000 | 1002 | H905 | Payment Failed | Dormant Account | Fail |
| 200 | 1000 | 1002 | H906 | Payment Failed | Account Hold | Fail |
| 200 | 1000 | 1002 | H907 | Payment Failed | Transaction failed. The Bank identified the account as suspicious. Please beware of fraudulent schemes in any form | Fail |
| 200 | 1000 | 1002 | H012 | Payment Failed | This account has been closed | Fail |
| 200 | 1000 | 1002 | H020 | Payment Failed | Duplicate Payment | Fail |
| 200 | 1000 | 1002 | H040 | Payment Failed | Transaction Timeout | Pending |
| 200 | 1000 | 1002 | H999 | Payment Failed | General Response Code | Fail |
| 200 | 1000 | 1002 | H999 | Payment Failed | Waiting Time Expired | Fail |
| 200 | 1000 | 1002 | H999 | Payment Failed | SyntxnError | Fail |
| 200 | 1000 | 1003 |  | Pending processing | (Web only) | Pending |
| 200 | 1000 | 1004 |  | Pending approval | (Web only) | Pending |
| 200 | 1000 | 1005 |  | Cancelled | (Web only) | Fail |
| 400 | 1101 |  |  | Missing required parameters |  | Fail |
| 400 | 1102 |  |  | Invalid parameters entered |  | Fail |
| 400 | 1103 |  |  | Empty string input not supported |  | Fail |
| 404 | 1104 |  |  | Requested entity record does not exist |  | Fail |
| 400 | 1105 |  |  | Unrecognized field name was entered - Please check spelling and/or refer to the API docs for correct name |  | Fail |
| 400 | 1111 |  |  | Data entry duplicated with existing |  | Fail |
| 400 | 8102 |  |  | Payment API error code |  | Fail |
| 400 | 9100 |  |  | Required standard headers |  | Fail |
| 400 | 9900 |  |  | Max request has reached rate limited |  | Fail |
| 401 | 9100 |  |  | Missing required authorization credentials |  | Fail |
| 401 | 9100 |  |  | Authorization credentials required |  | Fail |
| 401 | 9300 |  |  | Invalid/expired temporary token |  | Fail |
| 401 | 9500 |  |  | Invalid apikey provided |  | Fail |
| 401 | 9500 |  |  | Invalid authorization credentials |  | Fail |
| 403 | 9503 |  |  | Invalid access rights |  | Fail |
| 405 | 9900 |  |  | Wrong http method requested on endpoint |  | Fail |
| 415 | 9900 |  |  | Unsupported content type defined |  | Fail |
| 4xx | Any |  |  | For any 4xx category those has not been documented in the mapping table above. Client should threat transaction as failured, as 4xx category imply client failure. |  | Fail |
| 500 | 8101 |  |  | Invalid response from downstream service | ValidationMessage: Invalid input format Description:  
merchantId can not be null  
merchantId can not be empty  
amount is invalid format  
refNumber can not be null  
refNumber can not be empty  
refNumber cannot contain special character  
refDateTime can not be null  
refDateTime can not be empty  
refDateTime must be 'yyyyMMddHHmmss'  
amount can not be null or empty  
amount can not be empty  
amount must be more than 0.00  
amount must be less than 999999999999.99  
amount is invalid format  
currency can not be null  
currency can not be empty  
currency is invalid  
callBackUrl can not be null  
callBackUrl can not be empty  
callBackUrl is invalid format  
  
ValidationMessage: Specified resource not found Description:  
merchantId '123456' not found  
subAccountId '12345' not found  
accountNumber not found  
  
ValidationMessage: Service Unavailable Description:  
Service is temporarily unavailable, please try again later.  
  
ValidationMessage: Payment Failed. Description  
SCB has temporarily close service.  
  
ValidationMessage: Persistence Exception Description:  
Error while decrypting data | Fail |
| 500 | 8901 |  |  | Database error |  | Fail |
| 500 | 9700 |  |  | Generic server side error |  | Fail |
| 500 | 9900 |  |  | Threat has been detected |  | Fail |
| 501 | 4101 |  |  | Current channel is not supported |  | Fail |
| 502 | 9900 |  |  | Invalid response from upstream server |  | Fail |
| 503 | 9900 |  |  | Server is currently unavailable because traffic overload or it is down for maintenance |  | Fail |
| 503 | 9900 |  |  | System maintenance in progress. We will be back shortly. |  | Fail |
| 504 | 9900 |  |  | API Request Timeout |  | Pending |
| 5xx and not 504 | Any |  |  | For non HTTP response code 504 under 5xx category. (Non timeout error code under server error) Client should threat transaction as failured. In case of server communication error causes by SCB network equipment. It is possible that client will receive http code 5xx without business code, in this case client should threat transaction as failure as well. |  | Fail |
