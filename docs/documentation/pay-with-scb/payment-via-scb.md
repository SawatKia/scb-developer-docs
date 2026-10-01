---
source_url: "https://developer.scb/#/documents/documentation/pay-with-scb/payment-via-scb.html"
source_route: "#/documents/documentation/pay-with-scb/payment-via-scb.html"
source: SCB Developer Portal
content_hash: 52d7e59c6631969fcfb9d6487547e7cb272f0779712db9bf7357ccfd28856c4b
---

# SCB EASY App Payment

SCB provides partners who are on-boarded as billers to complete payment easily. By simply adding a payment option in your app, the app can deep link to the SCB EASY app and complete their payment seamlessly before getting re-directed back to your app on completion.  

Currently, Partners can accept multiple sources of fund as follows;

1.  Current or savings account (CASA)  
    Customers can make a payment by using either current or savings account as source of fund. Partners should apply for Biller (Tag30) to receive payments from current or savings account via SCB EASY App Payment. Biller ID must be different from Biller ID of SCB Bill Payment and SCB Cross Bank Bill Payment services.
    
2.  Credit Card with full amount payment (CCFA)  
    Customers can make a payment by using a credit card with full amount payment. Partners should apply for Merchant in order to receive credit card payment via SCB EASY App Payment.
    
3.  Installment plan by credit card and/or Speedy Cash card (CCIPP)  
    Customers can pay with an installment plan by credit card or Speedy Cash. Partners should apply for Merchant in order to receive installment payments (IPP) via SCB EASY App Payment and be able to specify the number of months of installment. There are 3 types of IPP the Merchant can choose to use.  
    
    • IPP Type 1, the Merchant absorbs interest of the transaction.  
    
    • IPP Type 2, the Customer or consumer absorbs interest of the transaction.  
    
    • IPP Type 3, the Supplier absorbs interest of the transaction.  
    

**Note:**  
`- The Merchant can choose to apply to receive a payment made with all three types of sources of funds or only accept CASA payment.`  
`- For credit card or installment payments, customers using SCB EASY must link their cards with SCB EASY before enabling payment via SCB EASY App Payment.`

## APIs

### 1\. Generating a Deeplink URL

Partners can create a transaction record using the deeplink URL API. Partners that have on-boarded as merchants can complete the purchase transaction swiftly by embedding a purchase option into their app. Then the users can complete the payment process using the SCB EASY app.

**User Journey**

![](payment-journey.png)

### 2\. Retrieving Transaction Details using a Transaction ID

SCB also allows partners to retrieve details of a transaction with the corresponding transaction ID. To do so, partners needs to specify a transaction ID in the request parameter, the transaction details of the provided ID will then be returned.

**User Journey**

![](retrieve-transaction-journey.png)

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)

## Technical Flow

![](deeplink-and-retrieve-sequence-diagram-2.png)

### Callback URL

A 'callbackUrl' is an optional parameter that can be supplied in the merchantMetadata obtained from step 6 to instruct the SCB EASY simulator app to redirect back to your app after the transaction is completed. the merchantMetadata is an optional JSON object containing any metadata the merchant needs to log regarding the new transaction. However, if the URL is not provided, there will be no redirection back to your app. For more details, refer to [Deeplink for payment.](../../api-reference-index/payment/post-deeplink-transaction.html)

| Seq No. | API Name | API Endpoints |
| :-: | :-- | :-- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Deeplink for payment | [POST /v3/deeplink/transactions](../../api-reference-index/payment/post-deeplink-transaction.html) |
| 7 | Payment Confirmation | \- |
| 9 | Retrieve Transaction Details | [GET /v2/transactions/{transactionId}](../../api-reference-index/payment/retrieving-transaction-detail.html) |

[Download Postman Collection](../../api-reference-index/payment/deeplink-transaction.json)

### Next Step : Test deeplink payment via SCB EASY Simulator App

After you have read the deeplink payment documentation, follow the [guideline](../../documentation/basics/developer-sandbox.html#use-case-1-deeplink-for-payment-via-scb-easy) to test deeplink payment via SCB EASY Simulator App. You will have a better understanding of the processes involved in integrating SCB EASY.
