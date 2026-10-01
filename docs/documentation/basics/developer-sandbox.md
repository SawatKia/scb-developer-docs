---
source_url: "https://developer.scb/#/documents/documentation/basics/developer-sandbox.html"
source_route: "#/documents/documentation/basics/developer-sandbox.html"
source: SCB Developer Portal
content_hash: 8843b369a387ffb60935734ad6bd74bd844feb07ec885fba7830a71451e84cb7
---

# Sandbox > SCB EASY Simulator App

The Developer Sandbox provides third-party developers with APIs that mirror those of live environments. It enables the testing and validation of the third-party app that is built on top of the Bank's APIs.

Note:

-   All accounts are rate limited to 5 throughputs per second (TPS) per API. The rate limit applies to individual apps separately.

## SCB EASY Simulator App

SCB also provides a simulated SCB EASY App for developers to integrate and visualize the business use case through screen flows. Select your platform to download the simulated app below:

-   [Android](https://appdistribution.firebase.dev/i/f280ebea68846e8a)
-   [iOS](https://appdistribution.firebase.dev/i/f3a1ac16e87ff84c)

Follow the [introduction](./developer-sandbox/how-to-download-install-easysandbox\(android-iOS\).pdf) to download and install SCB EASY Simulator App in both platform iOS and android.

### Simulator App Login

Before using the simulator app, you have to log in first. Please go to "Apps > Your Application > Simulator App Log in > SCB EASY Simulator App" and follow the instructions. Note that each log in session is tied to one device per app. If the device is to be reused for another app, a log out action is necessary. Also, note that one device can be used across multiple apps.

![](./developer-sandbox/simulator-login.jpg)

### PIN in Simulator App

When using the simulator app, you will be asked to enter a PIN. Each PIN is linked to a test customer profile pre-generated when an app is created. PINs are available at "Apps > Your Application > Customer Profile".

![](./developer-sandbox/simulator-pin.jpg)

### Use Case 1: Deeplink for Payment via SCB EASY

Refer to [Deeplink for payment via SCB EASY](../../documentation/pay-with-scb/payment-via-scb.html) for documentation on using the APIs.  
SCB EASY App allows users to make a payment with multiple sources of fund as follows:

**1\. Make a payment with current or savings account (CASA)**  
Firstly, you need to generate a [deeplink url](../../api-reference-index/payment/post-deeplink-transaction.html) with the following information to retrieve a transaction made by customer account.  
• Biller Information, go to “Apps > Select your App Name > Merchant Profile > Biller Information”  

![](./developer-sandbox/biller-information.png)  

• Customer information, go to “Apps > Select your App Name > Customer Profile > Select any Customer Name > Account”  

![](./developer-sandbox/customer-account.png)  

In _step 1_, when the user clicks on the button 'Payment with SCB EASY' on your app, the application will deeplink to the SCB EASY App for authentication in _step 2_.

Step 1

![](./developer-sandbox/partner-home.jpg)

Step 2

![](./developer-sandbox/easy-pin-verification.jpg)

Then in _step 3_ and _step 4_, EASY Simulator will display the tab “ACCOUNT”, that means you can retrieve a payment by customer account. The screen will display account from, biller name and payment information for the user to review.

Step 3,4

![](./developer-sandbox/casa-account.png)

_Step 5_, SCB EASY App will display necessary payment information for the user to confirm the payment.

Step 5

![](./developer-sandbox/casa-confirm-payment.png)

Once the payment is confirmed, the SCB EASY App will display a success page and a 'Return to Partner App' button in _step 6_. Once the user clicks on the button, he/she will be navigated back to the application in _step 7_.

Furthermore, SCB will send a [payment confirmation](../../documentation/qr-payment/payment-confirmation.html) to merchant URL as per your payment confirmation endpoint provided in the merchant profile.

Step 6

![](./developer-sandbox/casa-return-pe.png)

Step 7

![](./developer-sandbox/partner-payment-success.jpg)

**2\. Make a payment with Credit Card full amount (CCFA)**  
Firstly, you need to generate a [deeplink url](../../api-reference-index/payment/post-deeplink-transaction.html) with the following information to retrieve a transaction made by credit card in full amount.

• Merchant information, go to “Apps > Select your App Name > Merchant Profile > Merchant Information”  

![](./developer-sandbox/merchant-information.png)  

• Customer information, go to “Apps > Select your App Name > Customer Profile > Select any Customer Name > Credit Card”  

![](./developer-sandbox/customer-creditcard.png)  

In _step 1_, when the user clicks on the button 'Payment with SCB EASY' on your app, the application will deeplink to the SCB EASY App for authentication in _step 2_.

Step 1

![](./developer-sandbox/partner-home.jpg)

Step 2

![](./developer-sandbox/easy-pin-verification.jpg)

Then in _step 3_ and _step 4_, EASY Simulator will display the tab “CREDIT CARD”, that means you can retrieve a payment by credit card in full amount. The screen will display credit card, merchant name and payment information for the user to review.

Step 3,4

![](./developer-sandbox/ccfa-display-creditcard.png)

_Step 5_, SCB EASY App will display necessary payment information for the user to confirm the payment.

Step 5

![](./developer-sandbox/ccfa-display-payment-info.png)

Once the payment is confirmed, the SCB EASY App will display a success page and a 'Return to Partner App' button in _step 6_. Once the user clicks on the button, he/she will be navigated back to the application in _step 7_.

Furthermore, SCB will send a [payment confirmation](../../documentation/qr-payment/payment-confirmation.html) to merchant URL as per your payment confirmation endpoint provided in the merchant profile.

Step 6

![](./developer-sandbox/ccfa-success.png)

Step 7

![](./developer-sandbox/partner-payment-success.jpg)

**3\. Make a payment with Installment plan by credit card (CCIPP)**  
Firstly, you need to generate a [deeplink url](../../api-reference-index/payment/post-deeplink-transaction.html) with the following information to retrieve a transaction made with installment plan.

• Merchant information, go to “Apps > Select your App Name > Merchant Profile > Merchant Information”  
**Note:** Sandbox uses the same merchant ID for both credit card full amount (CCFA) and installment payments (CCIPP). But in live version, the partner should apply for different Merchant IDs.  

![](./developer-sandbox/merchant-information.png)  

• Installment plan information  
You need to provide the merchant with test data of the installment plan as detailed in the table below. This table contains 3 installment payment plan types (IPP types) with interest rates and interest absorption scheme. All data is used for testing on Sandbox only.  
**Note:** A minimum monthly payment for SCB credit cards is ฿500.

![](./developer-sandbox/ipptype-table.png)  

• Customer information, go to “Apps > Select your App Name > Customer Profile > Select any Customer Name > Credit Card”  

![](./developer-sandbox/customer-creditcard.png)  

In _step 1_, when the user clicks on the button 'Payment with SCB EASY' on your app, the application will deeplink to the SCB EASY App for authentication in _step 2_.

Step 1

![](./developer-sandbox/partner-home.jpg)

Step 2

![](./developer-sandbox/easy-pin-verification.jpg)

Then in _step 3_ and _step 4_, EASY simulator will display the tab “CREDIT CARD”, that means you can retrieve a payment by installment plan. The screen will display installment plan information for the user to review. The interest rate might vary depending on the numbers of months of installment.

Step 3,4

![](./developer-sandbox/ccipp-installment-plan.png)

_Step 5_, SCB EASY App will display necessary payment information for the user to confirm the payment.

Step 5

![](./developer-sandbox/ccipp-review-payment.png)

Once the payment is confirmed, the SCB EASY App will display a success page and a 'Return to Partner App' button in _step 6_. Once the user clicks on the button, he/she will be navigated back to the application in _step 7_.

Furthermore, SCB will send a [payment confirmation](../../documentation/qr-payment/payment-confirmation.html) to merchant URL as per your payment confirmation endpoint provided in the merchant profile.

**Note:**  
`- In live version, the customer will pay a monthly amount depending on the installment term chosen. For example, a ฿15,000 charge set to be paid over the course of 10 months would be a monthly payment of approximately ฿1,500. In Sandbox, however, the charge is set to be paid in full only.`  

Step 6)

![](./developer-sandbox/ccipp-payment-summary.png)

Step 7

![](./developer-sandbox/partner-payment-success.jpg)

### Use Case 2: Sharing Customer Profiles - Login with SCB EASY

Refer to [Sharing Customer Profiles](../../documentation/customer-information/sharing-customer-profile.html) for documentation on using the APIs.

1.  In _step 1_, when the user clicks on the 'Login with SCB EASY' button, the application will deeplink to the SCB EASY App for authentication in _step 2_.
    
    Step 1
    
    ![](./developer-sandbox/partner-home.jpg)
    
    Step 2
    
    ![](./developer-sandbox/easy-pin-verification.jpg)
    
2.  If the authentication is successful, the SCB EASY App will automatically navigate back to the application in _step 3_.
    
    Step 3
    
    ![](./developer-sandbox/partner-login-success.jpg)
    

### Use Case 3: Sharing Customer Profiles - Auto Pre-filled

Refer to [Sharing Customer Profiles](../../documentation/customer-information/sharing-customer-profile.html) for documentation on using the APIs.

1.  In _step 1_, when the user clicks on the 'Auto Pre-filled' button, the application will deeplink to the SCB EASY App for authentication in _step 2_.
    
    Step 1
    
    ![](./developer-sandbox/partner-home.jpg)
    
    Step 2
    
    ![](./developer-sandbox/easy-pin-verification.jpg)
    
2.  If the authentication is successful, the SCB EASY App will automatically navigate back to the application with the test customer's profile created in the portal. The partner application can, as an example, use the test customer's profiles to pre-fill a registration form in _step 3_. The user then continues to complete the registration in _step 4_.
    
    Step 3
    
    ![](./developer-sandbox/partner-register.jpg)
    
    Step 4
    
    ![](./developer-sandbox/partner-register-success.jpg)
