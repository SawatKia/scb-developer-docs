---
source_url: "https://developer.scb/#/documents/api-reference-index/credit-transfer/post-debit-confirm-response-code.html"
source_route: "#/documents/api-reference-index/credit-transfer/post-debit-confirm-response-code.html"
source: SCB Developer Portal
content_hash: bf33638b161443aeb537dedd2160d6170043d8ffb0cdd19d8447cea251ae8892
---

# Debit Transfer Confirm Response Code

| HTTP Status | Code | HTTP Status | HTTP Reason | Legacy Error Code | Description | Service Name | Action | Remark |
| :-: | :-: | :-: | :-: | :-: | :-- | :-- | :-- | :-- |
| 200 | 1000 | 200 | Success | \- | Transaction Success |  |  |  |
| 400 | 8101 | 400 | Bad Request | VF0001 | INVALID REQUEST | CAPI | Invalid input request data, please check your request data |  |
| 400 | 8101 | 400 | Bad Request | VF0002 | REQUEST BODY IS INVALID | CAPI | Invalid input request data, please check your request data |  |
| 400 | 8101 | 400 | Bad Request | VF0003 | Validation Fail | CAPI | Invalid input request data, please check your request data |  |
| 409 | 8101 | 409 | Business Error | BU0001 | Data not found | CAPI | Invalid input request data, please check your request data | Not found token |
| 409 | 8101 | 409 | Business Error | BU0006 | Data cannot be saved | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | BU9998 | Business rule error from Internal Microservice | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | LB9002 | Business rule error from legacy - Transaction is pending | CAPI | Internal SCB system is error, please inquiry payment status after 45 minutes | PMH Status |
| 409 | 8101 | 409 | Business Error | LB9999 | Unknown Transaction Status | CAPI | Internal SCB system is error, please inquiry payment status after 45 minutes | PMH return error code = null |
| 409 | 8101 | 409 | Business Error | LG0001 | Legacy Bad Request (HTTP400) | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | LG0002 | Legacy Data not found (HTTP404) | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | LG0003 | Legacy Business Error (HTTP409) | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | LG0004 | Legacy Internal Error (HTTP5XX) | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | LG9999 | EAPI Other Error | CAPI | Internal Server Error, please inquiry payment status after 45 minutes |  |
| 409 | 8101 | 409 | Business Error | 113 | Invalid Amount | PMH/PYMD | Invalid input request data, please check your request data | Error from PMH/GN |
| 409 | 8101 | 409 | Business Error | 117 | Invalid Channel | PMH/PYMD | Internal SCB system is error, please contact SCB | This case should not occur. It is a value that PMH receives from CAPI. |
| 409 | 8101 | 409 | Business Error | 182 | Account Not Found | PMH/PYMD | Invalid Payer account number, please check your request data |  |
| 409 | 8101 | 409 | Business Error | 340 | Insufficient Funds | PMH/PYMD | Payer account has insufficient funds |  |
| 409 | 8101 | 409 | Business Error | 460 | Authentication Failed | PMH/PYMD | Internal SCB system is error, retry new initiate when system is resume |  |
| 409 | 8101 | 409 | Business Error | 901 | Not Allowed Account | PMH/PYMD | Invalid Payer/Payee account number, please check your request data | SCB A/C validation fail (From GN)  
A/C that does not allow the transaction, the system will respond with this code  
\- Frozen Account  
\- Closed Account  
\- Dormant Account  
\- Account Hold |
| 409 | 8101 | 409 | Business Error | 901 | Invalid Account | PMH/PYMD | Invalid Payer/Payee account number, please check your request data |  |
| 409 | 8101 | 409 | Business Error | 901 | The payee account and payer account number are the same. | PYMD | Payee/Payer are the same, please check the account with Payee/Payer | Support Pen test |
| 409 | 8101 | 409 | Business Error | 902 | Frozen Account | PMH/PYMD | Payer account is frozen, please check the account with payer |  |
| 409 | 8101 | 409 | Business Error | 906 | Account Hold | PMH/PYMD | Payer account is hold, please check the account with payer |  |
| 409 | 8101 | 409 | Business Error | 907 | Transaction failed. The Bank identified the account as suspicious. Please beware of fraudulent schemes in any form. | PYMD | The Bank identified the account as suspicious, please check the account with Payee/Payer | Support BOT - The bank identified the destination account as suspicious (Validate confirm only) |
| 409 | 8101 | 409 | Business Error | 999 | General Response Code | PMH/PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 999 | Waiting Time Expired | PMH/PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 999 | Invalid CutOff Time | PMH/PYMD | SCB has temporarily close service, please try again when system available | GN responds timeout to PMH |
| 409 | 8101 | 409 | Business Error | 020 | Duplicate Payment | PMH/PYMD | Retry new initiate & confirm | GN check unique RQUID |
| 409 | 8101 | 409 | Business Error | 040 | Transaction Timeout | PMH/PYMD | SCB has temporarily close service, please try again when system available | Force fail (PMH will attempt to refund the customer (reverse the transaction)) |
| 409 | 8101 | 409 | Business Error | 111 | Communication Error | PMH/PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 137 | Bank does not support this service | PMH/PYMD | Service is not available, please check your profile |  |
| 409 | 8101 | 409 | Business Error | 152 | Incomplete AMLO information | PMH/PYMD | Invalid AMLO information, please check your request | Error from ITMX |
| 409 | 8101 | 409 | Business Error | 189 | Transaction is cancelled | PMH/PYMD | Transaction is cancelled, please retry new initiate | Error from ITMX |
| 409 | 8101 | 409 | Business Error | 210 | Payee Proxy Not Active | PMH/PYMD | Proxy value is not register, please check your request data | Error from ITMX |
| 409 | 8101 | 409 | Business Error | 270 | Payee Account Not Active | PMH/PYMD | Invalid Promptpay status, please contact SCB | Check AnyID |
| 409 | 8101 | 409 | Business Error | 020 | Duplicate Transaction (Bank Reject) | PMH/PYMD | Please inquiry payment status | Confirmation may have been completed |
| 409 | 8101 | 409 | Business Error | 030 | Potential Duplicate Transaction | PMH/PYMD | Please inquiry payment status | Confirmation may have been completed |
| 409 | 8101 | 409 | Business Error | 410 | Confirm too late | PMH/PYMD | SCB has temporarily close service, please try again when system available | Confirm more than 10 minutes |
| 409 | 8101 | 409 | Business Error | 420 | Transaction Reference Not Found | PMH/PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 430 | Invalid Transaction Status | PMH/PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 999 | Transaction Timeout | PMH/PYMD | SCB has temporarily close service, please try again when system available | GN responds timeout to PMH/PYMD |
| 409 | 8101 | 409 | Business Error | 8001 | Received a bad request from upstream | PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 9002 | Received HTTP2xx response from downstream with error/missing responsebody | PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 9004 | Received HTTP4xx response from downstream with error/missing responsebody | PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 9005 | Received HTTP5xx response from downstream with error/missing responsebody | PYMD | SCB has temporarily close service, please try again when system available |  |
| 409 | 8101 | 409 | Business Error | 9300 | Configuration not found | PYMD | Contact SCB to check partner profile in SCB system | Validate partner id, channel code, instruction\_type |
| 409 | 8101 | 409 | Business Error | 9999 | General Backend Error | PYMD | SCB has temporarily close service, please try again when system available |  |
| 500 | 8101 | 500 | Internal Server Error | 999999 | Unexpected error / Unhandled error | CAPI | SCB has temporarily close service, please try again when system available |  |
