---
source_url: "https://developer.scb/#/documents/documentation/mae-manee-marchants/mae-manee-sharing-profile.html"
source_route: "#/documents/documentation/mae-manee-marchants/mae-manee-sharing-profile.html"
source: SCB Developer Portal
content_hash: a5988ae603e3517d5da649b26f46c67d60ef653cec49db6978f4cc5bb1427abf
---

# Sharing Mae Manee Merchant Profile​

## Introduction

Our goal at SCB is to become a verified identity provider for merchants' partners across different industries. Partners stand to benefit from SCB’s merchant base while the bank continues to expand its services and product offerings.​

Mae Manee's merchant base can provide you with useful information to make your app's onboarding quick and painless. This step is important if your merchants want to accept multiple payment methods.

**User Journey**

![](./mae-manee-sharing-profile/mae-manee-sharing-profile-journey.png)

**Note:**  
In terms of address, it is dependent on the type of shop, with the following conditions:  
\- If the shop type is a Department, the mandatory fields must include Lot, Department, Sub-District, District, Province, and Postal Code.  
\- If the shop type is a Stand Alone, the mandatory fields must include House No., Sub-District, District, Province, and Postal Code.​  
\- If the shop type is Online, at least one field of Facebook, IG, Line Shop, or Website must be mandatory.​  

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – Client Credentials

## Technical Flow

![](./mae-manee-sharing-profile/mae-manee-sharing-profile-sequence-diagram.png)

### Callback URL

In order to make the Mae Manee Simulator App redirect back to your app correctly in step 5, please specify your callback URL under "Apps > Your Application > Application". The URL can be a deeplink to your app or a generic "https" URL depending on your desired use case and business flow outcome. An authorization code will be attached to the callback URL to request an access token in step 6.

| Seq No. | API Name | API Endpoints |
| :-: | :-- | :-- |
| 1 | Authorize Third Party Application to Log in with Mae Manee App | [GET /v2/oauth/authorize](../../api-reference-index/authentication/get-oauth-authorize.v2.html) |
| 2 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Mae Manee Merchant Profile | [GET /v1/maemanee/merchant/profile](../../api-reference-index/mae-manee-marchants/get-mae-manee-profile.html) |
