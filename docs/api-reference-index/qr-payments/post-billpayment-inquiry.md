---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-billpayment-inquiry.html"
source_route: "#/documents/api-reference-index/qr-payments/post-billpayment-inquiry.html"
source: SCB Developer Portal
content_hash: 4915f12d75436e398497bee2c789cd84e778088ab4198488d4a91c9bcc3f72a1
---

# 

POST

/​v3/​payment/​billpayment/​inquiry

This endpoint support Thai QR Code Tag 30 and My Prompt QR (B Scan C) Transaction Inquiry. If the inquired transaction is successfully paid, the service will return transaction detail to partner.

Normally, the Inquiry API is provided to use in conjunction with Payment Confirmation. The recommended use case is when customer has informed partner that they have been paid successfully, but partner did not receive payment confirmation from SCB. Only then partner should use this Inquiry API to get the payment transaction detail.

_Note: This endpoint has only the document specification._

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Required:** application/json |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the request payload**  
Possible Value**  
\- EN (Default)  
\- TH |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call  
**Remark:** requestUId is random alphanumeric and length is 32. |

## Request Body

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| searchPayment | Object | Required |  |
| searchPayment.messageIdentification | String(36) | Required | Point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message.  
Usage: The instructing party must ensure that MessageIdentification is unique per instructed party for a pre-agreed period. |
| searchPayment.creationDateTime | String(29) | Required | Date and time at which the message was created. This property is formatted as a ISODateTime.  
**Format:** CCYY-MM-DDThh:mm:ss.sss±hh:mm |
| searchPayment.paymentSearchCriteria | Object | Required |  |
| searchPayment.paymentSearchCriteria.messageIdentification | String(35) | Condition | Point to point reference, as assigned by the original initiating party, to unambiguously identify the original payment transaction message.  
**Note:** Maps to original payment groupHeader/messageIdentification |
| searchPayment.paymentSearchCriteria.requestedExecutionDate | Object | Required | Date and time at which the cash is at the disposal of the credit account owner, or ceases to be at the disposal of the debit account owner  
**Note:** Maps to original payment creationDateTime (date component) |
| searchPayment.paymentSearchCriteria.requestedExecutionDate.dateSearch | Object | Required | Pattern to search based on date |
| searchPayment.paymentSearchCriteria.requestedExecutionDate.dateSearch.fromDate | String(10) | Required | Start range of date This is in ISO date format.  
**Format:** CCYY-MM-DD |
| searchPayment.paymentSearchCriteria.requestedExecutionDate.dateSearch.toDate | String(10) | Required | End range of date This is in ISO date format.  
**Format:** CCYY-MM-DD |
| searchPayment.paymentSearchCriteria.paymentIdentification | Object | Optional | Unique and unambiguous identifier for a payment instruction, as assigned by the clearing agent or the initiating party. |
| searchPayment.paymentSearchCriteria.paymentIdentification.instructionIdentification | String(35) | Optional | Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction  
**Note:** Maps to original payment _paymentIdentification/instructionIdentification_ |
| searchPayment.paymentSearchCriteria.paymentIdentification.transactionIdentification | String(35) | Optional | Unique identification, as assigned by the first instructing agent, to unambiguously identify the transaction that is passed on, unchanged, throughout the entire interbank chain.  
**Note:** Maps to original payment  
_paymentIdentification/transactionIdentification_ |
| searchPayment.paymentSearchCriteria.paymentIdentification.endToEndIdentification | String(35) | Optional | Unique identification, as assigned by the initiating party, to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.  
**Note:** Maps to original payment  
_paymentIdentification/endToEndIdentification_ |
| searchPayment.paymentSearchCriteria.paymentIdentification.accountServicerReference | String(35) | Optional | Unique reference, as assigned by the account servicing institution, to unambiguously identify the instruction  
**Note:** contains the unique Id generated (eg. ctReference) to match Initiate request to confirm  
**Note:** Maps to original payment _additionalDate/accountServicerReference_ |
| searchPayment.paymentSearchCriteria.instructedAmount | Object | Optional | Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.  
**Note:** Maps to original payment  
_instructedAmount or interBankSettlementAmount or tranAmount_ |
| searchPayment.paymentSearchCriteria.instructedAmount.currencyAndAmountRange | Object | Required | Expresses an amount or an amount range with the currency and where the credit/debit indicator is explicit. |
| searchPayment.paymentSearchCriteria.instructedAmount.currencyAndAmountRange.amount | Object | Required |  |
| searchPayment.paymentSearchCriteria.instructedAmount.currencyAndAmountRange.amount.fromAmount | Number | Required | Min amount: 0.00  
Max amount: 999999999999999.99 (without plus sign) No comma expected |
| searchPayment.paymentSearchCriteria.instructedAmount.currencyAndAmountRange.amount.toAmount | Number | Required | Min amount: 0.00  
Max amount: 999999999999999.99 (without plus sign) No comma expected |
| searchPayment.paymentSearchCriteria.instructedAmount.currencyAndAmountRange.currency | String(3) | Required | Medium of exchange of value, used to qualify an amount. |
| searchPayment.paymentSearchCriteria.parties | Object | Condition | Defines the party fields used to search for a payment. |
| searchPayment.paymentSearchCriteria.parties.debtor | Object | Condition | Party that owes assets to the creditor, such as a result of receipt of goods or services, gifts, or charity payments. The debtor may also be the debit account owner. |
| searchPayment.paymentSearchCriteria.parties.debtor.party | Object | Condition | Object contains further details of the party |
| searchPayment.paymentSearchCriteria.parties.debtor.party.identification | String(35) | Condition | Unique and unambiguous identification of a party or customer account number  
**Note:** Maps to original payment  
_debtorAccount/identification/other/identification_  
**\*Require at least**  
• Debtor Account No  
• Creditor Account No  
• Debtor Proxy  
• Creditor Proxy |
| searchPayment.paymentSearchCriteria.parties.creditor | Object | Condition | Party that owes assets to the creditor, such as a result of receipt of goods or services, gifts, or charity payments. The debtor may also be the debit account owner |
| searchPayment.paymentSearchCriteria.parties.creditor.party | Object | Condition | Object contains further details of the party |
| searchPayment.paymentSearchCriteria.parties.creditor.party.identification | String(35) | Condition | Unique and unambiguous identification of a party or customer account number  
**Note:** Maps to original payment  
_creditorAccount/identification/other/identification_  
**\*Require at least**  
• Debtor Account No  
• Creditor Account No  
• Debtor Proxy  
• Creditor Proxy |
| searchPayment.paymentSearchCriteria.includeInitiate | Boolean | Optional | **Possible values :** TRUE or FALSE.  
**Default Value :** FALSE  
Includes the Initiate Payment Transaction in the search result. |
| searchPayment.paymentSearchCriteria.serviceType | String(100) | Optional | **Possible Values for this fields are below :**  
• Bill Payment  
• Cardless Cash  
• Reversal and Refund Payments  
• Direct Debit Payments  
• Normal Credit Transfers  
• Prompt Pay Credit Transfers  
• Loan Payments  
• Cross Border Payments  
• Miscellaneous Payments  
• Request To Pay  
• Request to Pay Bill Payment  
• Ripple Credit Transfer  
• B Scan C |
| searchPayment.supplementaryData | Object | Required | Additional information that cannot be captured in the structured elements and/or any other specific block. |
| searchPayment.supplementaryData.envelope | Object | Required | Technical element wrapping the supplementary data. |
| searchPayment.supplementaryData.envelope.additionalData | Object | Optional |  |
| searchPayment.supplementaryData.envelope.additionalData.categoryPurposeProprietary | String(35) | Optional | Category purpose, in a proprietary form.  
**Note:** Maps to original payment _paymentTypeInformation/categoryPurpose/proprietary_ |
| searchPayment.supplementaryData.envelope.additionalData.debtorAccount | Object | Condition | Contains the additional details about the debtor account  
**\*Require at least**  
• Debtor Account No  
• Creditor Account No  
• Debtor Proxy  
• Creditor Proxy |
| searchPayment.supplementaryData.envelope.additionalData.debtorAccount.proxyIdentificationType | String(35) | Required | Issuer of the type of Identification for the debit account |
| searchPayment.supplementaryData.envelope.additionalData.debtorAccount.proxyIdentification | String(140) | Required | Proxy Identification for the debit account |
| searchPayment.supplementaryData.envelope.additionalData.creditorAccount | Object | Condition | Contains the additional details about the creditor account  
**\*Require at least**  
• Debtor Account No  
• Creditor Account No  
• Debtor Proxy  
• Creditor Proxy |
| searchPayment.supplementaryData.envelope.additionalData.creditorAccount.proxyIdentificationType | String(35) | Required | Issuer of the type of Identification for the credit account |
| searchPayment.supplementaryData.envelope.additionalData.creditorAccount.proxyIdentification | String(140) | Required | Proxy Identification for the credit account |
| searchPayment.supplementaryData.envelope.additionalData.billReference1 | String(20) | Optional | Bill reference number 1 |
| searchPayment.supplementaryData.envelope.additionalData.billReference2 | String(20) | Optional | Bill reference number 2 |
| searchPayment.supplementaryData.envelope.additionalData.billReference3 | String(20) | Optional | Bill reference number 3 |
| searchPayment.supplementaryData.envelope.additionalData.partnerIdentification | String(20) | Optional | Unique Identification of the partner |
| searchPayment.supplementaryData.envelope.additionalData.pageSize | Integer(2) | Required | Number of records to be displayed in the result per page  
_Default value 10_ |
| searchPayment.supplementaryData.envelope.additionalData.pageNumber | Integer(2) | Required | The page number requested.to be displayed in the result  
_Default value 1_ |
| searchPayment.supplementaryData.envelope.additionalData.includeHistoryDetails | Boolean(5) | Optional | History message  
If this attribute is set to **‘true’**, PH will include the details of the history messages in the response.  
_Default value FALSE_ |

## Example Request

```json
    curl -X POST \
      http://api-sandbox.scb.co.th/partners/sandbox/v3/payment/billpayment/inquiry \
      -H 'Accept-Language: EN' \
      -H 'Content-Type: application/json' \
      -H 'authorization: Bearer <Your Access Token>' \
      -H 'requestUId: 871872a7-ed08-4229-a637-bb7c733305db' \
      -H 'resourceOwnerId: <Your API Key>' \
      -d '{
           "searchPayment":{
        "messageIdentification":"C014801800000001",
        "creationDateTime":"2017-03-13T09:02:00.000+07:00",
        "paymentSearchCriteria":{
            "messageIdentification":" C014801800000001",
            "requestedExecutionDate":{
                "dateSearch":{
                "fromDate":"2020-08-25",
                "toDate":"2020-08-25"
                }
            },
            "paymentIdentification":{
                "instructionIdentification":"5hfx9f69k8gdtrv2zhu6aa6fy7oy59ob",
                "transactionIdentification":"5hfx9f69k8gdtrv2zhu6aa6fy7oy59oa",
                "endToEndIdentification":"OriginatorID1234_e2e",
                "accountServicerReference":"SCB474747"
            },
            "instructedAmount":{
                "currencyAndAmountRange":{
                "amount":{
                    "fromAmount":"100.25",
                    "toAmount":"100.35"
                }
                },
                "currency":"THB"
            },
            "parties":{
                "debtor":{
                "party":{
                    "identification":"12345678"
                }
                },
                "creditor":{
                "party":{
                    "identification":"987654321"
                }
                }
            }
        },
        "supplementaryData":{
            "envelope":{
                "additionalData":{
                "categoryPurposeProprietary":"NORMAL_CT",
                "debtorAccount":{
                    "proxyIdentificationType":"billerid",
                    "proxyIdentification":"123456789"
                },
                "creditorAccount":{
                    "proxyIdentificationType":"billerid",
                    "proxyIdentification":"123456789"
                },
                "billReference1":"miscellaneous Reference 1",
                "billReference2":"miscellaneous Reference 2",
                "billReference3":"miscellaneous Reference 3",
                "partnerIdentification":"2018",
                "pageSize":"20",
                "pageNumber":"1",
                "includeHistoryDetails":"true"
                }
            }
        }
    }
}'
```

## Response

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| status | Object | Required | Status object |
| status.code | Integer | Required | A business status code of request.  
**Sample value:** 1000 |
| status.description | String | Required | A business status message of request.  
**Sample value:** Success |
| data | Object | Required | Response data |
| data.status | Object | Required |  |
| data.status.responseStatus | Enum | Required | **List of Value:** Success, Failure |
| data.status.responseCode | String(4) | Required | **Sample value:** 0000, 0001 |
| data.status.responseCodeDescription | String | Required | **Sample value:**  
• Success,  
• PEM received a bad request from upstream,  
• PEM General Backend Error |
| data.data | Object | Required |  |
| data.data.searchPaymentStatusReport | Object | Required | CustomerPaymentStatusReport message is exchanged between an agent and a non-financial institution customer to provide status information on instructions previously sent. |
| data.data.searchPaymentStatusReport.groupHeader | Object | Required | Set of characteristics shared by all individual transactions included in the message |
| data.data.searchPaymentStatusReport.groupHeader.messageIdentification | String(36) | Required | Point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message.  
Usage: The instructing party must ensure that MessageIdentification is unique per instructed party for a pre-agreed period.  
_\*\* Allowed Max Length = 35_ |
| data.data.searchPaymentStatusReport.groupHeader.creationDateTime | String(29) | Required | Date and time at which the message was created. This property is formatted as a ISODateTime.  
**Format:** CCYY-MM-DDThh:mm:ss.sss±hh:mm.  
**Note:** date & time this response is generated |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus | Object | Required | Provides details on the original group, to which the message refers. |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus.originalMessageIdentification | String(36) | Required | Point to point reference, as assigned by the original instructing party, to unambiguously identify the original message.  
• Echo value from 'SearchPayment' request 'messageIdentification' |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus.originalMessageNameIdentification | String(35) | Required | Specifies the original message name identifier to which the message refers.  
• Set to 'pacs.008.001.07 |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus.originalCreationDateTime | String(29) | Optional | Date and time at which the original message was created. This property is formatted in ISODateTime format.  
• Echo value from 'SearchPayment' request 'creationDateTime' |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus.originalNumberOfTransactions | String(1) | Optional | Number of individual transactions contained in the original message.  
• Not mapped |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus.responseStatus | Enum | Required |   
**Possible values:**  
• SUCCESS,  
• FAILURE |
| data.data.searchPaymentStatusReport.originalGroupInformationAndStatus.responseStatusDescription | String(105) | Optional | Description of the status  
**Possible values:**  
For SUCCESS status  
• ‘No records found for the input criteria’ -> Applicable if there is no record found for the supplied search criteria.  
• ‘Success’ -> Applicable if there is more than 1 record found for the supplied search criteria.  
**For FAILURE status**  
• ‘Validation Unsuccessful’ -> In case of any business validation failure |
| data.data.searchPaymentStatusReport.searchPaymentReport | Object | Optional | Technical element wrapping the multiple occurrences of the search payment result. |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus | Object | Optional | Provides information on the original transactions to which the status report message refers. |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalInstructionIdentification | String(35) | Optional | Unique identification, as assigned by the original instructing party for the original instructed party, to unambiguously identify the original instruction.  
• Echo value from 'FIFICT' request 'instructionIdentification' |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalEndToEndIdentification | String(35) | Optional | Unique identification, as assigned by the original initiating party, to unambiguously identify the original transaction.  
• Echo value from 'FIFICT' request 'endToEndIdentification' |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalTransactionIdentification | String(35) | Optional | Unique identification as assigned by the first instructing agent, to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.  
• Echo value from 'FIFICT' request 'transactionIdentification' |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.transactionStatus | Enum(4) | Optional | Specifies the status of a transaction, in a coded form  
**Valid values:**  
• ACCC – Accepted Settlement Completed on creditor account.  
• ACSC – Settlement on debtor’s account completed.  
• ACSP - Validation successful, payment initiation accepted for execution.  
• RJCT – Payment has been rejected  
• ACTC – AcceptedTechnicalValidation  
• PDNG – Pending  
• CANC – Canceled / Reversed  
**Note:** MS to provide  
‘ACCC’ for success  
‘RJCT’ for failure.  
**'PDNG' for only verify**  
**'CANC' for Canceled or reverse**  
Other codes are for future use |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.statusReasonInformation | Object | Optional | Detail information about the status reason. |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.statusReasonInformation.reason | Object | Optional | Reason for the status report. Either code or proprietary value is supplied. |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.statusReasonInformation.reason.code | String(35) | Optional | Reason for the status, based on ISO reject code  
**Note:** Not used. Reserved for future use. |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.statusReasonInformation.reason.proprietary | String(35) | Optional | Reason for the status, in a proprietary form  
**Note:** MS to provide the error code for failure scenarios in this tag only (as MS can’t distinguish between ISO code & Prop code) |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.statusReasonInformation.additionalInformation | String(105) | Optional | Description for status reason |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.acceptanceDateTime | String(29) | Optional | Point in time when the payment order from the initiating party meets the processing conditions of the account servicing agent. This means that the account servicing agent has received the payment order and has applied checks such as authorisation, availability of funds.  
**Note:** _Represents the datetime the response is generated_ |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.clearingSystemReference | String(35) | Optional | Unique reference, as assigned by a clearing system, to unambiguously identify the instruction. |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent | Object | Optional | Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent.financialInstitutionIdentification | Object | Required | Set of elements used to identify a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent.financialInstitutionIdentification.clearingSystemMemberIdentification | Object | Optional | Name by which an agent is known and which is usually used to identify that agent |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent.financialInstitutionIdentification.clearingSystemMemberIdentification.memberIdentification | String(35) | Required | Identification of a member of a clearing system. Payee account bank Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent.branchIdentification | Object | Optional | Identifies a specific branch of a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent.branchIdentification.identification | String(35) | Optional | Unique and unambiguous identification of a branch of a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructingAgent.branchIdentification.name | String(140) | Optional | Name by which an agent branch is known and which is usually used to identify that agent |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent | Object | Optional | Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent.financialInstitutionIdentification | Object | Required | Set of elements used to identify a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent.financialInstitutionIdentification.clearingSystemMemberIdentification | Object | Optional | Name by which an agent is known and which is usually used to identify that agent |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent.financialInstitutionIdentification.clearingSystemMemberIdentification.memberIdentification | String(35) | Required | Identification of a member of a clearing system. Payee account bank Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent.branchIdentification | Object | Optional | Identifies a specific branch of a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent.branchIdentification.identification | String(35) | Optional | Unique and unambiguous identification of a branch of a financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.instructedAgent.branchIdentification.name | String(140) | Optional | Name by which an agent branch is known and which is usually used to identify that agent |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalTransactionReference | Object | Optional |  |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalTransactionReference.interbankSettlementAmount | Object | Optional |  |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalTransactionReference.interbankSettlementAmount.amount | Number | Required | Min amount: 0.00,  
Max amount: 9999999999999.99 (without plus sign). No comma expected |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalTransactionReference.interbankSettlementAmount.currency | String(3) | Required | Currency Code as per registered ISO 4217 |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.originalTransactionReference.interbankSettlementDate | String(10) | Optional | Date on which the amount of money ceases to be available to the agent that owes it and when the amount of money becomes available to the agent to which it is due.  
**Format:** YYYY-MM-DD  
_**Note:** For ONUS will contain the processing date from Core Banking System. For OFFUS (ISO) flow will contain the < interbankSettlementDate > from PACS008. For OFFUS (ISO8583 flow, will contain the < SettlementDate > from response._ |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.paymentMethod | String(20) | Optional | Specifies the means of payment that will be used to move the amount of money.  
**Sample values:**  
TRF (Credit Transfer),  
TRF\_INITIATE (Credit Transfer Initiate) |
| data.data.searchPaymentStatusReport.searchPaymentReport.transactionInformationAndStatus.totalRecords | Numeric | Optional | Specifies the total number of records returned by the Search Payment API |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData | Object | Optional | Additional information that cannot be captured in the structured elements and/or any other specific block. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope | Object | Required | Technical element wrapping the supplementary data. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData | Object | Optional |  |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.systemsTraceAuditNumber | String(6) | Optional | Reference number used to match response to request or to match message to other related messages. Value assigned in the original request and should appear in all subsequent related messages |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.localTransactionDateTime | String(29) | Optional | The date and time the transaction takes place, expressed in the local date time of the originator. This property is formatted as a ISODateTime.  
**Format:** CCYY-MM-DDThh:mm:ss.sss±hh:mm  
**Note:** Value as received from channel |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.merchantCategoryCode | String(4) | Optional | Merchant Category Code extracted from QR |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.acquirerCountryCode | String(2-2) | Optional | ISO country code that identifies the country of the originator |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.fees | Object | Optional | List of fee information |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.fees.transactionFee | Object | Optional | Transaction Fee Information |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.fees.transactionFee.amount | Number | Required | Min amount: 0.00,  
Max amount: 9999999999999.99 (without plus sign), No comma expected |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.fees.transactionFee.currency | String(3) | Required | Currency Code |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.acquiringBin | String(11) | Optional | BIN identifier of the originator of the payment |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.retrievalReferenceNumber | String(12) | Optional | Reference number used to match message to other related messages of the payment |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor | Object | Optional |  |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor.terminalId | String(26) | Optional | Terminal Id that originated the payment. Originator to populate value as extracted from the QR code |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor.idCode | String(15) | Optional | Merchant ID that represents id to credit amount to merchant |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor.name | String(100) | Optional | Name of the merchant |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor.address | Object | Optional | Address details of the merchant |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor.address.city | String(15) | Optional | Originator to populate field with value captured from merchant information |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.cardAcceptor.address.country | String(2-2) | Optional | Originator to populate field with value captured from merchant information |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.typeOfSender | String(1) | Optional | Type of Sender |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.typeOfReceiver | String(1) | Optional | Type of Receiver |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.prodCode | String(4) | Optional | Indicates the product code of the transaction. Pass through information to clearing stream |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.processingCode | String(6) | Optional | Specifies the processing code for the payment.  
**Sample values:**  
480000 – Credit Transfer,  
550000 – Bill Payment,  
650000 - Void |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.messageTypeIdentifier | String(4) | Optional | Indicates the high level function of the message.  
**Note:** For Credit Transfer & Bill Payment this will be '0220' |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.agent | Object | Optional | Financial Institution Details |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.agent.financialInstitutionIdentification | Object | Required | Financial Institution Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.agent.financialInstitutionIdentification.clearingSystemMemberIdentification | Object | Optional | Name by which an agent is known and which is usually used to identify that agent |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.agent.financialInstitutionIdentification.clearingSystemMemberIdentification.memberIdentification | String(35) | Required | Identification of a member of a clearing system. Payer account bank Identification.  
**Note:** Value from the scan QR code (Customer bank or TEPA code) |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage | Object | Optional | Details from the original message based on which this request is generated |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.merchantType | String(35) | Optional | Identifies the type of merchant |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.termType | String(35) | Optional | The terminal type code as specified for channel transaction |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.mandateIdentification | String(35) | Optional | Contains the OTA code. This will contain a One tme mandate for initiating the transfer request. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.originalInstructionIdentification | String(35) | Optional | Instruction Identification of the original message.  
**Note:** required for void messages |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtorTaxIdentification | String(13) | Optional | Tax identification number of the debtor |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.creditorTaxIdentification | String(13) | Optional | Tax identification number of the creditor |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtorUniqueIdentificationType | String(13) | Optional | Type of Tax identification of the debtor  
**Possible values:**  
• NIDN – National Id,  
• TXID – Tax Id,  
• CCPT – Passport Id |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.creditorUniqueIdentificationType | String(13) | Optional | Type of Tax identification of the creditor.  
**Possible values:**  
• NIDN – National Id,  
• TXID – Tax Id,  
• CCPT – Passport Id |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.merchantBillerIdentification | String(35) | Optional | Merchant Biller Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.billerDisplayNameTH | String(50) | Optional | Biller Display Name in Thai |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.billerDisplayNameEN | String(50) | Optional | Biller Display Name in English |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.customerDisplayName | String(50) | Optional | Customer Display Name in English/Thai |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.billReference1 | String(20) | Optional | Bill Reference 1 |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.billReference2 | String(20) | Optional | Bill Reference 2 |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.billReference3 | String(20) | Optional | Bill Reference 3 |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.dueDate | String(8) | Optional | Due date of the Bill / Payment.  
**Format:** YYYYMMDD |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.additionalNote | String(140) | Optional | Additional note (remarks) entered by Initiating party (payer) for the Payee.  
**Note:** Channel should restrict the length to 40 characters as this is max length allowed in ITMX interface. If received more than 40 characters, PH will trim additional characters before sending it to ITMX.  
It must be able to support Thai characters |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.proxyIdentification | String(140) | Optional | Proxy Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.proxyIdentificationType | String(35) | Optional | Proxy Identification Type in a proprietary form |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.receivingProxyIdentification | String(140) | Optional | Receivers Proxy Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.receivingProxyIdentificationType | String(35) | Optional | Receivers Proxy Identification Type in a proprietary form |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.paymentCountryCode | String(2-2) | Optional | Indicates the country from where the payment was originated |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.accountFeeInformation | Object | Optional | Account Fee Information |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.accountFeeInformation.fromAccountFee | Number | Optional | Fee charged by the sending bank.  
Min amount: 0.00,  
Max amount: 9999999999999.99 (without plus sign), No comma expected |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.accountFeeInformation.toAccountFee | Number | Optional | Fee charged by the receiving / biller bank.  
Min amount: 0.00,  
Max amount: 9999999999999.99 (without plus sign), No comma expected |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.vatRate | Number(5) | Optional | This field contains VAT Rates. 0.00 - 99.99 decimal implied. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.vatAmount | Number | Optional | Min amount: 0.00,  
Max amount: 9999999999999.99 (without plus sign), No comma expected. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.typeOfTaxIncome | String(3) | Optional | Type of income (in case of paying tax) |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.withholdingTaxRate | Number(5) | Optional | This Field contains Withholding Tax Rates. 0.00 - 99.99 decimal implied. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.withholdingTaxAmount | Number | Optional | Min amount: 0.00,  
Max amount: 9999999999999.99 (without plus sign), No comma expected |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.withholdingTaxConditions | String(1) | Optional | A = Withholding Tax paid always by Seller,  
S = Withholding Tax paid one time by Seller,  
B = Withholding Tax paid by Buyer |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtorCountrySubswitchId | String(3-3) | Optional | Sub country switch id.  
Sample Values: 001, 002 etc |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.creditorCountrySubswitchId | String(3-3) | Optional | Sub country switch id.  
Sample Values: 001, 002 etc |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtor | Object | Optional | Debtor Details |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtor.addressLine1 | String(70) | Optional | First line of Debtor address |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtor.birthDate | String(10-10) | Optional | Birth Date in format YYYY-MM-DD |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtor.cityOfBirth | String(35) | Optional | City of birth |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtor.countryOfBirth | String(2-2) | Optional | Country of birth in ISO 3166 format.  
**For example:** "AU" – Australia, "TH" - Thailand |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.debtorAgentBICFI | String(11) | Optional | BIC code allocated to the sending financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.creditorAgentBICFI | String(11) | Optional | BIC code allocated to the receiving financial institution |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.purposeCode | String(4-4) | Optional | Underlying reason for payment transaction as published by external purpose code list. Identifies the purpose of remittance |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.creditorAccountIdentification | String(34) | Optional | Identification assigned by an institution. Creditor account number |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.originalMessage.creditorAccountName | String(70) | Optional | Name of the account, as assigned by the account servicing institution, in agreement with the account owner in order to provide an additional means of identification of the account. Name registered against the account |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.qrString | String(2000) | Optional | Contains the scanned raw QR data. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAccount | Object | Optional | Contains additional details about the debtor account. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAccount.identification | Object | Optional | Unique identification of an account as assigned by the account servicer.  
Conditional if payer is identied by account info. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAccount.identification.other | Object | Required | Information related to a generic account identification. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAccount.identification.other.identification | String(34) | Required | Account ID or account number assigned by a FI for a debtor account. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAccount.name | String(70) | Optional | Account name from channel / downstream response (eg. MS) for debtor account.  
_**Note:** Latest value available in PH will be provided_ |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAgent | Object | Optional | Financial Institution Details |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAgent.financialInstitutionIdentification | Object | Required | Financial Institution Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAgent.financialInstitutionIdentification.clearingSystemMemberIdentification | Object | Optional | Name by which an agent is known and which is usually used to identify that agent. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.debtorAgent.financialInstitutionIdentification.clearingSystemMemberIdentification.memberIdentification | String(35) | Required | Identification of a member of a clearing system. Payer account bank Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.creditorAgent | Object | Optional | Financial Institution Details |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.creditorAgent.financialInstitutionIdentification | Object | Required | Financial Institution Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.creditorAgent.financialInstitutionIdentification.clearingSystemMemberIdentification | Object | Optional | Name by which an agent is known and which is usually used to identify that agent. |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.creditorAgent.financialInstitutionIdentification.clearingSystemMemberIdentification.memberIdentification | String(35) | Required | Identification of a member of a clearing system. Payee account bank Identification |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.historyDetails | Array | Optional | History message Details |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.historyDetails.historyUniqueIdentification | String(35) | Optional | Unique Identifier for the History message |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.historyDetails.historyDateTime | String(29) | Optional | History message creation date time |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.historyDetails.historyEventType | String(35) | Optional | Type of history message |
| data.data.searchPaymentStatusReport.searchPaymentReport.supplementaryData.envelope.additionalData.historyDetails.historyDescription | String(35) | Optional | Description of the history message |

## Example Response

```json
{
    "status": {
        "code": 1000,
        "description": "Success"
    },
    "data": {
        "searchPaymentStatusReport": {
            "groupHeader": {
                "messageIdentification": "BP86a9a-a5cc-4bbc-a45a-896b04dd44a1",
                "creationDateTime": "2024-08-15T16:16:00.000+07:00"
            },
            "originalGroupInformationAndStatus": {
                "originalMessageNameIdentification": "pacs.008.001.07",
                "originalCreationDateTime": "2024-08-15T16:16:00.000+07:00",
                "originalNumberOfTransactions": "128",
                "responseStatus": "SUCCESS",
                "responseStatusDescription": "Success",
                "totalRecords": 128
            },
            "searchPaymentReport": [
                {
                    "transactionInformationAndStatus": {
                        "originalEndToEndIdentification": "0731232933612642421323956418",
                        "originalTransactionIdentification": "20240731232933004001814421323956635",
                        "transactionStatus": "ACCC",
                        "statusReasonInformation": {
                            "reason": {
                                "proprietary": "000"
                            },
                            "additionalInformation": "Success"
                        },
                        "instructingAgent": {
                            "financialInstitutionIdentification": {
                                "clearingSystemMemberIdentification": {
                                    "memberIdentification": "0014"
                                }
                            },
                            "branchIdentification": {
                                "identification": "0111",
                                "name": "RATCHAYOTHIN BUREAU13764"
                            }
                        },
                        "instructedAgent": {
                            "financialInstitutionIdentification": {
                                "clearingSystemMemberIdentification": {
                                    "memberIdentification": "069"
                                }
                            },
                            "branchIdentification": {
                                "identification": "",
                                "name": ""
                            }
                        },
                        "paymentMethod": "TRF",
                        "originalTransactionReference": {
                            "interbankSettlementAmount": {
                                "amount": 32.50,
                                "currency": "THB"
                            },
                            "interbankSettlementDate": "2024-07-31"
                        }
                    },
                    "supplementaryData": {
                        "envelope": {
                            "additionalData": {
                                "localTransactionDateTime": "2024-07-31T23:29:41.005+07:00",
                                "fees": {
                                    "transactionFee": {
                                        "amount": 0.00,
                                        "currency": "THB"
                                    }
                                },
                                "cardAcceptor": {
                                    "address": {}
                                },
                                "typeOfSender": "Q",
                                "prodCode": "PXPE",
                                "processingCode": "750000",
                                "messageTypeIdentifier": "0220",
                                "originalMessage": {
                                    "merchantType": "6012",
                                    "creditorTaxIdentification": "2823122992255",
                                    "customerDisplayName": "ITMX-KKP",
                                    "billReference1": "1120323290",
                                    "billReference2": "1001504828",
                                    "billReference3": "",
                                    "receivingProxyIdentification": "282312299225501",
                                    "receivingProxyIdentificationType": "BILLERID",
                                    "debtor": {},
                                    "purposeCode": "COMT",
                                    "creditorAccountIdentification": "2000295396",
                                    "creditorAccountName": "BILLPAY-ITMX-KKP",
                                    "accountFeeInformation": {
                                        "fromAccountFee": 0.00
                                    }
                                },
                                "creditorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "069"
                                        }
                                    }
                                },
                                "debtorAgent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "0014"
                                        }
                                    }
                                },
                                "agent": {
                                    "financialInstitutionIdentification": {
                                        "clearingSystemMemberIdentification": {
                                            "memberIdentification": "0014"
                                        }
                                    }
                                },
                                "debtorAccount": {
                                    "identification": {
                                        "other": {
                                            "identification": "1113939657"
                                        }
                                    },
                                    "name": "AMIR ABDULLAH"
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
