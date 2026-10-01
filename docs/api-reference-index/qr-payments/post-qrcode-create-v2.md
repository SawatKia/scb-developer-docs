---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-qrcode-create-v2.html"
source_route: "#/documents/api-reference-index/qr-payments/post-qrcode-create-v2.html"
source: SCB Developer Portal
content_hash: 625df4cf9e43cf2de05c1e08b1eff4f3aef4ea849aea50271f43ab627b048468
---

# 

POST

/​v2/​payment/​qrcode/​create

This endpoint supports QR code generation of Thai QR Code standard Tag 30 (QR 30).  

_Note:_

-   _This API will return QR image by URL image (QR image not base64)._
-   _This endpoint has only the document specification._

## Request Header

| Name | Type | QR 30 | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Required**: application/json |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call  
**Remark**: The request UID. 32 characters long alphanumeric value. |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the partners/v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the request payload |

## Request Body

| Name | Type | QR 30 | Description |
| :-- | :-- | :-- | :-- |
| qrType | String | Required | Type of QR Code to request for generate QR code  
**List of value :** PP |
| amount | Number (13,2) | Optional | Amount of Transaction and length up to 13 include  
**Format 2 digits :** 100.00 |
| ppType | String | Required | PromptPay Type  
**List of value :** BILLERID |
| ppId | String (15) | Required | Unique PromptPay ID  
**If ppType value is 'BILLERID' field is required**  
**Remark :** Accept only BILLERID length must be 15 digits. |
| ref1 | String (20) | Required | Reference code 1  
**If ppType value is 'BILLERID' field is required**  
**Remark :** Accept only “A-Z” or “0-9“ |
| ref2 | String (20) | Optional | Reference code 2  
**Remark :** Accept only “A-Z” or “0-9“ |
| ref3 | String (20) | Optional | Reference code 3  
**Remark :** Accept only “A-Z” or “0-9“ |
| numberOfTimes | Number | Optional | Number of times the qr can be paid  
**Remark :** Accept 0 - 9999 |
| expiryDate | String | Conditional | Expired date and time of qr  
**Format :** YYYY-MM-DD HH:MM:SS  
**Remark :** If numberOfTimes not null field is required |

## Example Request

### QR 30

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v2/payment/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 7f53b03d7b9c42d68283f522ee88ac1c' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "qrType": "PP",
    "amount": 100.00,
    "ppType": "BILLERID",
    "ppId": "123456789012345",
    "ref1": "PPDSREF1X0001",
    "ref2": "PPDSREF2X0001",
    "ref3": "888888889",
    "expiryDate": "2099-12-31 23:59:59",
    "numberOfTimes": 1000
  }'
```

[Download Postman Collection](payment-thai-qr.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | A business status code of request |
|  | description | String | A business status message of request |
| data |  |  |  |
|  | code | String | Response code Refer to **Appendix.** |
|  | message | String | Response message describe the respond code. |
|  | moreInfo | String | Response message detail error from Legacy |
|  | success | Boolean | Success True or False. |
|  | data | Data Block | Detail Data Qr code |
|  | data.url | String | URL render Qr code |
|  | data.qrRawData | String | Raw QRcode data |
|  | data.expiryDate | String | Expired date and time of qr  
**Format :** YYYY-MM-DD HH:MM:SS |
|  | data.numberOfTimes | Number | Number of times the qr can be paid |
|  | request | Data Block | The registered Proxy |
|  | request.qrType | String | Type of QR Code to request for generate QR code |
|  | request.amount | Number | Amount of Transaction and length up to 13 include  
**Format 2 digits :** 100.00 |
|  | request.ppType | String | PromptPay Type |
|  | request.ppId | String | Unique PromptPay ID |
|  | request.ref1 | String | Reference code 1 |
|  | request.ref2 | String | Reference code 2 |
|  | request.ref3 | String | Reference code 3 |
|  | request.expiryDate | String | Expired date and time of qr  
**Format :** YYYY-MM-DD HH:MM:SS |
|  | request.numberOfTimes | Number | Number of times the qr can be paid |

## Example Response

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "success": true,
    "code": "00",
    "message": "Success.",
    "data":  {
      "qrRawData":"00020101021230730016A00000067701011201151234567890123450213PPDSREF1X00010313PPDSREF2X000153037645405100.05802TH621307098888888896304049D",
      "numberOfTimes": 1000,
      "expiryDate": "2099-12-31 23:59:59",
      "url": "https://qrservice-render.scb.co.th/v3/api/renderQR?bqr=202411061131009871CE45aB88765F3G1345"
    },
    "request": {
      "qrType": "PP",
      "amount": 100.00,
      "ppType": "BILLERID",
      "ppId": "123456789012345",
      "ref1": "PPDSREF1X0001",
      "ref2": "PPDSREF2X0001",
      "ref3": "888888889",
      "expiryDate": "2099-12-31 23:59:59",
      "numberOfTimes": 1000
    }
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
