---
source_url: "https://developer.scb/#/documents/documentation/customer-information/sharing-customer-profile.html"
source_route: "#/documents/documentation/customer-information/sharing-customer-profile.html"
source: SCB Developer Portal
content_hash: 6f9fa2fbbdba55d745a34fb80faa8ab17a4bb5e430b8c485b7dfba3f93a48824
---

# Sharing Customer Profiles

Our goal at SCB is to become a verified identity provider for partners across different industries. Partners stand to benefit from SCB's customer base while the bank continues to expand its services and product offerings.

## User Journey

![](./sharing-customer-profile/customer-profile-journey.png)

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Authorization Code](../../documentation/basics/authentication.html#authorization-code-grant-type)

## Technical Flow

![](./sharing-customer-profile/customer-profile-sequence-diagram.png)

### Callback URL

In order to make the SCB EASY simulator app redirect back to your app correctly in step 5. Please specify your callback URL under "Apps > Your Application > Application". The URL can be a deeplink to your app or a generic "https" URL depending on your desired use case and business flow outcome. An authorization code will be attached to the callback URL to request for an access token in step 6.

| Seq No. | API Name | API Endpoints |
| :-: | :-- | :-- |
| 1 | Authorize Third-Party Application to Login with SCB EASY | [GET /v2/oauth/authorize](../../api-reference-index/authentication/get-oauth-authorize.v2.html) |
| 6 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 8 | Customers Profile | [GET /v2/customers/profile](../../api-reference-index/customer-profile/get-customer-profile-v2.html) |

[Download Postman Collection](../../api-reference-index/customer-profile/customer-profile-v2.json)
