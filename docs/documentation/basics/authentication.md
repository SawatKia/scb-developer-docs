---
source_url: "https://developer.scb/#/documents/documentation/basics/authentication.html"
source_route: "#/documents/documentation/basics/authentication.html"
source: SCB Developer Portal
content_hash: 8f66ca271804212bb16d913cab3eef9220a6b3ea42cd9a848d3c493c603c0516
---

# Authentication/​Authorization

## OAuth 2.0

All APIs on SCB's Open API Platform are secured with [OAuth 2.0](https://tools.ietf.org/html/rfc6749) security standards. Depending on the category of APIs, either 2-Legged ([Client Credentials](https://oauth.net/2/grant-types/client-credentials/)) or 3-Legged ([Authorization Code Grant](https://oauth.net/2/grant-types/authorization-code/)) OAuth secures these APIs. The OAuth 2.0 standard authenticates the user, followed by the user authorizing the API call.

### Client Credentials Grant Type

This grant type is typically used when an authorized server to server call is made outside the context of a user. It is hence typically used to access resources to/for themselves rather than to access a user's resources.

![](./authentication/authentication-2-legged.jpg)

| Seq No. | API Name | API Endpoints |
| :-: | :-- | :-- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |

### Authorization Code Grant Type

The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token. After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token.  
**Note:** The authorization code expires shortly after it is issued to mitigate the risk of leaks. An authorization code lifetime is 1 minute and after request an access token. Access token is only valid for 30 minutes and refresh token is valid for 60 minutes.

![](./authentication/authentication-3-legged.jpg)

| Seq No. | API Name | API Endpoint |
| :-: | :-- | :-- |
| 2 | Authorize Third-Party Application to Login with SCB EASY | [GET /v2/oauth/authorize](../../api-reference-index/authentication/get-oauth-authorize.v2.html) |
| 10 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 14 | Refresh Access Token | [POST /v1/oauth/token/refresh](../../api-reference-index/authentication/post-oauth-token-refresh.html) |

## Token Generator

In order to get an access token, developers are required to authenticate and authorize resource sharing with the SCB EASY app. The Token Generator allows developers to bypass the authorization step for easy testing of the APIs.

### How to Use

1.  Choose an application.
2.  Choose a grant type. If 3-Legged OAuth is selected, you have to choose a profile type (Citizen ID, Passport No. or Alien ID) and a test customer profile. When calling APIs related to a user, the data of the selected test customer profile will be returned.
3.  By clicking the "Generate" button, the generator will provide these values.  
    \- **accessToken** to call the APIs.  
    \- **refreshToken** to call /v1/oauth/token/refresh.  
    \- **resourceOwnerId** to be used in the request header when getting a test customer profile

![](./authentication/token-generator.jpg)
