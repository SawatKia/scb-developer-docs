---
source_url: "https://developer.scb/#/documents/api-reference-index/credit-transfer/post-inquiry-response-code.html"
source_route: "#/documents/api-reference-index/credit-transfer/post-inquiry-response-code.html"
source: SCB Developer Portal
content_hash: 60ccbf21aefedf6f95f9a1dc2a029e008285e187bf451535c8e38f68f5b53764
---

# Debit Credit Transfer Inquiry Response Code

| HTTP Status | Code | HTTP Status | HTTP Reason | Status | Legacy Error Code | Description | Remarks | Action | Remark | Sample Response |
| :-: | :-: | :-: | :-: | :-- | :-: | :-- | :-- | :-- | :-- | :-- |
| 200 | 1000 | 200 | Success | CONFIRM\_COMPLETED | \- | \- | Transaction Success |  | \*\*  **Inquiry status**  \*\*  
\- INITIATE\_COMPLETED  
\- CONFIRM\_COMPLETED  
\- CONFIRM\_FAILED  
\- CONFIRM\_PROCESSING  
\- CANCELED  
Channel uses "messageIden" of Initiate for Inquiry | "channelDateTime": "2017-03-13T09:01:00.000+07:00",  
"tokenizerId": "ABCDXXXX201902271330450000001",  
"status": "CONFIRM\_COMPLETED",  
"tranAmount": {  
          "amount": 20000.00,  
          "currency": "THB" |
| 200 | 1000 | 200 | Success | INITIATE\_COMPLETED | \- | \- | Initiate transaction success, No confirm transaction |  |  | "channelDateTime": "2017-03-13T09:01:00.000+07:00",  
"tokenizerId": "ABCDXXXX201902271330450000001",  
"status": "INITIATE\_COMPLETED",  
"tranAmount": {  
          "amount": 20000.00,  
          "currency": "THB" |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 000 | Success | Initiate transaction success, Confirm failed |  | If status = CONFIRM FAILED there will be a Legacy error code and description | "status": "CONFIRM\_FAILED",  
          "code": "000",  
          "description": "success" |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 112 | Invalid Transaction | Initiate transaction is not success |  | Reject transaction (Error from ITMX) | "status": "CONFIRM\_FAILED",  
          "code": "112",  
          "description": "Invalid Transaction" |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 113 | Invalid Amount | Initiate transaction is not success |  | Error from PMH/GN |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 114 | Not Deposit through this channel | Initiate transaction is not success |  | This case should not occur. |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 117 | Invalid Channel | Initiate transaction is not success |  | This case should not occur. It is a value that PMH receives from CAPI. |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 125 | Invalid Destination Bank | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 165 | Amount or number of transaction is over limit | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 171 | Transaction Not Supported | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 176 | Invalid Destination Account Number | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 182 | Account Not Found | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 195 | Transaction cannot be processed at biller | Initiate transaction is not success |  | Error from ITMX |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 340 | Insufficient Funds | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 460 | Authentication Failed | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 601 | PEM circuit breaker has tripped | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 901 | Invalid Creditor Account Number | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 901 | Not Allowed Account | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 901 | Invalid Debitor Account Number | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 902 | Frozen Account | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 906 | Account Hold | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 999 | General Response Code | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 999 | Waiting Time Expired | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 999 | Invalid CutOff Time | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 020 | Duplicate Payment | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 040 | Transaction Timeout | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 041 | Legacy Timeout (Non-financial) | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 111 | Communication Error | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 137 | Bank does not support this service | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 152 | Incomplete AMLO information | Initiate transaction is not success |  | Error from ITMX |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 189 | Transaction is cancelled | Initiate transaction is not success |  | Error from ITMX |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 270 | Payee Account Not Active | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 330 | Payer Account Not Active | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 410 | Confirm too late | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 420 | Transaction Reference Not Found | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 430 | Invalid Transaction Status | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 901 | Invalid Account | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 901 | The payee account and payer account number are the same | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 8001 | Received a bad request from upstream | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 9002 | Received HTTP2xx response from downstream with error/missing responsebody | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 9004 | Received HTTP4xx response from downstream with error/missing responsebody | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 9005 | Received HTTP5xx response from downstream with error/missing responsebody | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 9300 | Configuration not found | Initiate transaction is not success |  |  |  |
| 200 | 1000 | 200 | Success | CONFIRM\_FAILED | 9999 | General Backend Error | Initiate transaction is not success |  |  |  |
| 400 | 8101 | 400 | Bad Request | \- | VF0001 | INVALID REQUEST | CAPI | Invalid input request data, please check your request data |  |  |
| 400 | 8101 | 400 | Bad Request | \- | VF0002 | REQUEST BODY IS INVALID | CAPI | Invalid input request data, please check your request data |  |  |
| 400 | 8101 | 400 | Bad Request | \- | VF0003 | Validation Fail | CAPI PMH - Date range for the search should be less than or equal to 3 days | Invalid input request data, please check your request data |  |  |
| 409 | 8101 | 409 | Business Error | \- | BU0001 | No tokenizerId found | CAPI | Invalid input request data, please check your request data |  |  |
| 409 | 8101 | 409 | Business Error | \- | BU9998 | Business rule error from Internal Microservice | CAPI | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
| 409 | 8101 | 409 | Business Error | \- | LG0001 | EAPI Bad Request | HTTP status 400 | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
| 409 | 8101 | 409 | Business Error | \- | LG0002 | EAPI Data not found | HTTP status 404 | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
| 409 | 8101 | 409 | Business Error | \- | LG0003 | EAPI Business Error | HTTP status 409 | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
| 409 | 8101 | 409 | Business Error | \- | LG0004 | EAPI Internal Error | HTTP status 5XX | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
| 409 | 8101 | 409 | Business Error | \- | LG9999 | EAPI Other Error | HTTP status Otherwise | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
| 409 | 8101 | 409 | Business Error | \- | LB9002 | Business rule error from legacy - FAILURE (Validation Unsuccessful) | PMH/PYMD |  |  |  |
| 409 | 8101 | 409 | Business Error | \- | LB9999 | Unknown Transaction Status | PMH other status & Validation Unsuccessful |  |  |  |
| 500 | 8101 | 500 | Internal Server Error | \- | 999999 | Unexpected error / Unhandled error | CAPI | Internal SCB system is error, please inquiry payment status after 45 minutes |  |  |
