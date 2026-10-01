---
source_url: "https://developer.scb/#/documents/api-reference-index/customer-profile/get-customer-profile-v2.html"
source_route: "#/documents/api-reference-index/customer-profile/get-customer-profile-v2.html"
source: SCB Developer Portal
content_hash: e446b638d1b8f49263f1c422b47b1ac140dc460bb90784b59de4d17298af9e7e
---

# 

GET

/​v2/​customers/​profile

This endpoint provides the consented user information to the partner application.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v2/customers/profile`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| resourceOwnerId | String | Required | The hash value of the userid. Use the value of resourceOwnerId from the response header of /v1/oauth/token |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| accept-language | String | Optional | The language of the content in the response payload  
**Values:  
\- EN (Default)  
\- TH** |

Example Request

```javascript
curl -X GET \
  https://api-sandbox.partners.scb/partners/sandbox/v2/customers/profile \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 99100361-23d2-433d-8c21-4b6469918713' \
  -H 'resourceOwnerId: <The value of resourceOwnerId from the response header of /v1/oauth/token>'
```

[Download Postman Collection](customer-profile-v2.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | profile | Object | An object containing the scoped user information, as permitted by user consent tied to each application |
|  | citizenID | String | Citizen ID |
|  | passportNumber | String | Passport Number  
**Values:  
\- Prefix letters on national insurance number as  
\- JPAB5110010** |
|  | alienID | String | Alien ID  
**Values can be :  
\- ID 13 digits (Begins with 0,6,7 or 8)\*  
\- Digits with alphabet\*** |
|  | thaiFirstName | String | Thai first name |
|  | thaiLastName | String | Thai last lame |
|  | thaiTitle | String | Thai title name |
|  | engFirstName | String | Eng first name |
|  | engLastName | String | Eng last name |
|  | engTitle | String | Eng title name |
|  | birthDate | String | Date of birth |
|  | mobile | String | Mobile number |
|  | email | String | Email address |
|  | genderCode | String | Gender of customer |
|  | nationalityCode | String | Nationality code (Based on ISO 3166) |
|  | cardType | String | Customer ID Type  
**Values:  
\- P1: Citizen ID  
\- P7: Alien ID  
\- P8: Passport Number** |
|  | countryCode | String | Country code  
**Condition:  
\- This field will have value when cardType is "P8"** |
|  | address | Object |  |
|  | addressSeqID | String | Address Sequence ID |
|  | usageCode | String | Address Type  
**Values:  
\- E: Education  
\- F: Census Registration  
\- H: Home  
\- I: Identification card  
\- M: Identification card and Census Registration  
\- O: Office  
\- R: Registration  
\- N: Nationality Home Address** |
|  | ownerCode | String | Address Owner Code  
**Values:  
\- 1: owner  
\- 2: rent  
\- 3: live with other  
\- 5: live with family** |
|  | formatCode | String | Address Format Code  
**Values:  
\- 1: Standard  
\- 2: PO. Box  
\- 3: Building** |
|  | contactIndicator | String | Address contact indicator  
**Values:  
\- Y: Current contactable address  
\- N: Not current address but contactable ex. postal box** |
|  | currentAddressFlag | String | Address contact indicator  
**Values:  
\- Y: Current contactable address  
\- N: Current address but not prefer for mailing** |
|  | thaiAddressNumber | String | Thai Address Number |
|  | thaiAddressVillage | String | Thai Address Village |
|  | thaiAddressMoo | String | Thai Address Moo |
|  | thaiAddressTrok | String | Thai Address Trok |
|  | thaiAddressSoi | String | Thai Address Soi |
|  | thaiAddressThanon | String | Thai Address Thanon |
|  | thaiAddressDistrict | String | Thai Address District |
|  | thaiAddressAmphur | String | Thai Address Amphur |
|  | thaiAddressProvince | String | Thai Address Province |
|  | thaiAddressState | String | Thai Address State |
|  | engAddressNumber | String | Eng Address Number |
|  | engAddressVillage | String | Eng Address Village |
|  | engAddressMoo | String | Eng Address Moo |
|  | engAddressTrok | String | Eng Address Trok |
|  | engAddressSoi | String | Eng Address Soi |
|  | engAddressThanon | String | Eng Address Thanon |
|  | engAddressDistrict | String | Eng Address District |
|  | engAddressAmphur | String | Eng Address Amphur |
|  | engAddressProvince | String | Eng Address Province |
|  | engAddressState | String | Eng Address State |
|  | countryCode | String | Address country code (Based on ISO 3166) |
|  | zipCode | String | Zip Code |
|  | floorNumber | String | Floor Number |
|  | unitNumber | String | Unit Number |

Example Response

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "profile": {
      "citizenID": "1100100112323",
      "passportNumber": "JPAB51100100",
      "alienID": "1234567890",
      "thaiFirstName": "จอห์น",
      "thaiLastName": "โดว์",
      "thaiTitle": "นาย",
      "engFirstName": "John",
      "engLastName": "Doe",
      "engTitle": "Mr.",
      "birthDate": "1990-01-31",
      "mobile": "0910110111",
      "email": "john.doe@scb.co.th",
      "genderCode": "M",
      "nationalityCode": "TH",
      "cardType": "P1",
      "countryCode": "",
      "address": {
        "addressSeqID": "001",
        "usageCode": "H",
        "ownerCode": "1",
        "formatCode": "1",
        "contactIndicator": "Y",
        "currentAddressFlag": "N",
        "thaiAddressNumber": "209/128",
        "thaiAddressVillage": "อาคารเอสพี",
        "thaiAddressMoo": "2",
        "thaiAddressTrok": "",
        "thaiAddressSoi": "",
        "thaiAddressThanon": "รัชดาภิเษก",
        "thaiAddressDistrict": "จตุจักร",
        "thaiAddressAmphur": "จตุจักร",
        "thaiAddressProvince": "กรุงเทพฯ",
        "thaiAddressState": "กรุงเทพฯ",
        "engAddressNumber": "209/128",
        "engAddressVillage": "SP Building",
        "engAddressMoo": "2",
        "engAddressTrok": "",
        "engAddressSoi": "",
        "engAddressThanon": "Ratchadaphisek",
        "engAddressDistrict": "Chatuchak",
        "engAddressAmphur": "Chatuchak",
        "engAddressProvince": "Bangkok",
        "engAddressState": "Bangkok",
        "countryCode": "TH",
        "zipCode": "10900",
        "floorNumber": "14",
        "unitNumber": "23/12"
      }
    }
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
