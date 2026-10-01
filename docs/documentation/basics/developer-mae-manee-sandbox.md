---
source_url: "https://developer.scb/#/documents/documentation/basics/developer-mae-manee-sandbox.html"
source_route: "#/documents/documentation/basics/developer-mae-manee-sandbox.html"
source: SCB Developer Portal
content_hash: 69bcab364a7195ecb73699aa7afac9bc055d1101ef6dff8adc73b9be5c6c2095
---

# Sandbox > Mae Manee Simulator App

The Developer Sandbox provides third-party developers with APIs that mirror those of live environments. It enables the testing and validation of the third-party app that is built on top of the Mae Manee's APIs.

Note:

-   All accounts are rate limited to 5 throughputs per second (TPS) per API. The rate limit applies to individual apps separately.

## Mae Manee Simulator App

SCB also provides a simulated Mae Manee App for developers to integrate and visualize the business use case through screen flows. Select your platform to download the simulated app below:

-   [Android](https://appdistribution.firebase.dev/i/ac0d4570f4439447)
-   [iOS](https://appdistribution.firebase.dev/i/04c07b9b79c6be87)

Follow the [introduction](<./developer-sandbox/How to download install ManeeSandbox\(Android iOS\) V.3.3.pdf>) to download and install Mae Manee Simulator App in both platform iOS and android.

### Simulator App Login

Before using the simulator app, you have to log in first. Please go to "Apps > Your Application > Simulator App Log in > Mae Manee Simulator App" and follow the instructions. Note that each log in session is tied to one device per app. If the device is to be reused for another app, a log out action is necessary. Also, note that one device can be used across multiple apps.

![](./developer-sandbox/maemanee-simulator-login.png)

### PIN in Simulator App

When using the simulator app, you will be asked to enter a PIN. Each PIN is linked to a test customer profile pre-generated when an app is created. PINs are available at "Apps > Your Application > Mae Manee Merchant Profile".

![](./developer-sandbox/maemanee-merchant-profile-landing.png)

### Use Case: Sharing Mae Manee Merchant Profile - Auto Pre-filled

Refer to [Sharing Mae Manee Merchant Profile](../../api-reference-index/mae-manee-marchants/get-mae-manee-profile.html) for documentation on using the APIs.  

1.  In step 1, when the user clicks on the 'Auto Pre-filled' button, the application will deeplink to the Mae Manee Simulator App for authentication in step 2.

Step 1

![](./developer-sandbox/partner-home.jpg)

Step 2

![](./developer-sandbox/easy-pin-verification.jpg)

2.  If the authentication is successful, the Mae Manee Simulator App will automatically navigate back to the application with the test Mae Manee Merchant's profile created in the portal. The partner application can, as an example, use the test Mae Manee Merchant's profile to pre-fill a registration form in step 3. The user then continues to complete the registration in step 4.

Step 3

![](./developer-sandbox/partner-register.jpg)

Step 4

![](./developer-sandbox/partner-register-success.jpg)
