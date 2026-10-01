---
source_url: "https://developer.scb/#/documents/api-reference-index/mae-manee-marchants/get-mae-manee-profile.html"
source_route: "#/documents/api-reference-index/mae-manee-marchants/get-mae-manee-profile.html"
source: SCB Developer Portal
content_hash: 97028f529fb83c321c1fa33cb3aad98d672a6e05971c1e24e526ac657dd98c60
---

# 

GET

/​v1/​maemanee/​merchant/​profile

This endpoint provides the consented user information to the partner application.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/maemanee/merchant/profile`  

## Request Header

| Name | Required | Description |
| :-- | :-- | :-- |
| authorization | Required | Oauth token of the user performing the function |
| content-type | Required | The content type of request payload  
**Required:** application/json |
| accept-language | Optional  
(Enum) | The language of the content in the request payload  
**List of value:  
 'th'  
Remark:**  
 If value is null, default as 'th' |
| resourceOwnerId | Required | The hash value of the userid (resourceOwnerId from token API), or related  
user identification value |
| requestUId | Required | A unique identifier the client can generate to track the current request call |

Example Request

```javascript
curl -X GET \
  https://api-sandbox.partners.scb/partners/sandbox/v1/maemanee/merchant/profile \
  -H 'authorization: bearer <Your Access Token>' \
  -H 'content-types: application/json' \
  -H 'accept-language: th' \
  -H 'resourceOwnerId: <The value of resourceOwnerId from the response header of /v1/oauth/token>' \
  -H 'requestUId: e798ae11-4ae9-452f-9949-c121daf13895' \
```

[Download Postman Collection](./mae-manee-sharing-profile/Sharing_Mae_Manee_Merchant_Profile.postman_collection.json)

## Response

| Name | Datatype | Description |
| :-- | :-- | :-- |
| status | Object | An object to containing status from Partner gateway |
| status.code | String | Partner API response code |
| status.description | String | Partner API response description |
| status.details | Object An object | containing status reason |
| status.details.reason | String | Partner API response reason |
| status.details.source | String | Downstream endpoint |
| status.details.http\_code | String | Downstream response http status |
| status.details.response | Object | An object containing response message from downstream |
| status.details.status | Object | Downstream response object |
| status.details.status.code | String | Downstream response code |
| status.details.status.description | String | Downstream response description |
| data | Object An object | containing response information from downstream |
| data.profile | Object An object | containing the scoped user information, as permitted by user consent tied to each application |
| data.profile.walletId | String | Merchant wallet id |
| data.profile.citizenId | String | Merchant citizen id |
| data.profile.ownerFirstName | String | Shop owner first name |
| data.profile.ownerLastName | String | Shop owner lastname |
| data.profile.merchantCategoryCode | String | Shop category code |
| data.profile.merchantCategoryName | String | Shop category description |
| data.profile.merchantSubCategoryCode | String | Shop subcategory code |
| data.profile.merchantSubCategoryName | String | Shop subcategory description |
| data.profile.merchantEstimatedMonthlySalesCode | String | Merchant estimated monthly volume sales per month code |
| data.profile.merchantEstimatedMonthlySales | String | Merchant estimated monthly volume sales per month description |
| data.profile.shopInfo.shopNameTh | String | Shop name Thai |
| data.profile.shopInfo.shopNameEn | String | Shop name English |
| data.profile.shopInfo.shopMobileNo | String | Shop mobile number |
| data.profile.shopInfo.shopEmail | String | Shop email |
| data.profile.shopInfo.shopPhoto | String | Shop logo |
| data.profile.shopInfo.shopTypeCode | String | Shop type code |
| data.profile.shopInfo.shopTypeName | String | Shop type description |
| data.profile.shopInfo.channelOnline.shopFacebook | String | Shop Facebook channel |
| data.profile.shopInfo.channelOnline.shopInstagram | String | Shop Instagram channel |
| data.profile.shopInfo.channelOnline.shopLineId | String | Shop Line id |
| data.profile.shopInfo.channelOnline.Website | String | Shop website |
| data.profile.shopInfo.address.houseNo | String | Shop address house no |
| data.profile.shopInfo.address.moo | String | Shop address moo |
| data.profile.shopInfo.address.floor | String | Shop address floor |
| data.profile.shopInfo.address.lot | String | Shop address lot |
| data.profile.shopInfo.address.village | String | Shop address village |
| data.profile.shopInfo.address.deptName | String | Shop address department name |
| data.profile.shopInfo.address.soi | String | Shop address soi |
| data.profile.shopInfo.address.road | String | Shop address road |
| data.profile.shopInfo.address.subDistrict | String | Shop address subdistrict |
| data.profile.shopInfo.address.district | String | Shop address district |
| data.profile.shopInfo.address.province | String | Shop address province |
| data.profile.shopInfo.address.postalCode | String | Shop address postal code |
| data.paymentService | Object | An object containing the scoped user payment service status |
| data.paymentService.qr\[\] | Array of Object | An object containing merchant profile for each QR type |
| data.paymentService.qr\[\].code | String | QR type |
| data.paymentService.qr\[\].description | String | QR type description |
| data.paymentService.qr\[\].status | String | QR type status  
**Sample value  
\- "ACTIVE"  
\- "INACTIVE"** |
| data.paymentService.qr\[\].transactionLimit.minimum | decimal(14,2) | Minimum amount for generate QR type |
| data.paymentService.qr\[\].transactionLimit.maximum | decimal(14,2) | Maximum amount for generate QR type |
| data.paymentService.pml | Object | An object containing merchant profile for each payment link type |
| data.paymentService.pml.type\[\] | Array of Object | An array of payment link type and status |
| data.paymentService.pml.type\[\].code | String | Payment link type |
| data.paymentService.pml.type\[\].description | String | Payment link description |
| data.paymentService.pml.type\[\].status | String | Payment link status  
**Sample value  
\- "ACTIVE"  
\- "INACTIVE"** |
| data.paymentService.pml.transactionLimit.minimum | decimal(14,2) | Minimum amount for create payment link |
| data.paymentService.pml.transactionLimit.maximum | decimal(14,2) | Maximum amount for create payment link |
| data.paymentService.pml.transactionLimit.minimumCCIPP | decimal(14,2) | Minimum amount for create payment link with installment |

Example Response

```json
{
    "status": {
        "code": "1000",
        "description": "Success"
    },
    "data": {
        "profile": {
            "walletId": "014000000000392",
            "citizenId": "1118616629554",
            "ownerFirstName": "สมชาย",
            "ownerLastName": "ใจดี",
            "merchantCategoryCode": "MC04",
            "merchantCategoryName": "สุขภาพและความงาม",
            "merchantSubCategoryCode": "MS43",
            "merchantSubCategoryName": "สปา และนวดผ่อนคลาย",
            "merchantEstimatedMonthlySalesCode": "RPM02",
            "merchantEstimatedMonthlySales": "150,000 - 500,000",
            "shopInfo": {
                "shopNameTh": "ขนมไทยนายรวย",
                "shopNameEn": "Kanom Thai Nai Ruay",
                "shopMobileNo": "0941329328",
                "shopEmail": "nutaponT99@hotmail.com",
                "shopPhoto": "jpeg:base64,sdasdjasdadaioiasd...",
                "shopTypeCode": "MT03",
                "shopTypeName": "สถานที่/อาคารพาณิชย์",
                "channelOnline": {
                    "shopFacebook": "https://facebook.com/berkeryshopnayruay",
                    "shopInstagram": "",
                    "shopLineId": "line.me/VJeuId",
                    "website": "https://berkeryshopnayruay.com"                  
                },
                "address": {
                    "houseNo": "14/9",
                    "moo": "",
                    "floor": "",
                    "lot": "",
                    "village": "หมู่บ้านสิรินธา",
                    "deptName": "ตลาดทุ่งซ่าน (รุ่งทรัพย์)",
                    "soi": "ซอยศรีสุข",
                    "road": "ถนนราชปรารภ",
                    "subDistrict": "มักกะสัน",
                    "district": "ราชเทวี",
                    "province": "กรุงเทพมหานคร",
                    "postalCode": "10400"
                }
            }       
        },
        "paymentService": {
            "QR": [{
                "code": "T30",
                "description": "QR Tag 30",
                "status": "ACTIVE",
                "transactionLimit": {
                    "minimum": 1.00,
                    "maximum": 100000.00
                }
            },
            {
                "code": "QRCS",
                "description": "QR Card Scheme",
                "status": "ACTIVE",
                "transactionLimit": {
                    "minimum": 1.00,
                    "maximum": 50000.00
                }
            },
            {
                "code": "ALIPAY",
                "description": "Alipay",
                "status": "INACTIVE",
                "transactionLimit": {
                    "minimum": 1.00,
                    "maximum": 50000.00
                }
            },
            {
                "code": "WECHAT",
                "description": "Wechat",
                "status": "INACTIVE",
                "transactionLimit": {
                    "minimum": 1.00,
                    "maximum": 50000.00
                }
            }],
            "PML": {
                "types": [{
                        "code": "PML_T30",
                        "description": "Payment link by Tag 30",
                        "status": "ACTIVE"
                    },
                    {
                        "code": "PML_CCFA",
                        "description": "Payment link by credit card full amount",
                        "status": "INACTIVE"
                    },
                    {
                        "code": "PML_CCIPP",
                        "description": "Payment link by installment plan",
                        "status": "INACTIVE"
                    },
                    {
                        "code": "PML_PGW",
                        "description": "Payment link by payment gateway",
                        "status": "INACTIVE"
                    },
                    {
                        "code": "PML_QRCS",
                        "description": "Payment link by QR card scheme",
                        "status": "INACTIVE"
                    }],
                "transactionLimit": {
                    "minimum": 1.00,
                    "maximum": 50000.00,
                    "minimumCCIPP": 1500.00
                }
            }
        }
    }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
