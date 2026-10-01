---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-qrcode-create.html"
source_route: "#/documents/api-reference-index/qr-payments/post-qrcode-create.html"
source: SCB Developer Portal
content_hash: ef44c6a123b5bc4fc3b7696f7a0911d9a5bed6b3411ee7778b278aa622dff965
---

# 

POST

/​v1/​payment/​qrcode/​create

This endpoint supports QR code generation of Thai QR Code standard Tag 30 (QR 30) and QR Card Scheme (QR CS). There are 3 use cases.  

1.  Generate QR 30 Only  
    
2.  Generate QR CS Only  
    
3.  Generate QR 30 and QR CS together in a single QR Code

_Note: This API endpoint requires a valid merchant profile under your application._

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create`  

## Request Header

| Name | Type | QR CS and QR 30 | QR 30 Only | QR CS Only | Description |
| :-- | :-- | :-- | :-- | :-- | :-- |
| content-type | String | Required | Required | Required | Content type of request payload  
**Value:  
\- application/json** |
| resourceOwnerId | String | Required | Required | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | Required | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Required | Required | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | Optional | Optional | The language of the content in the response payload  
**Values:  
\- EN (Default)  
\- TH** |

## Request Body

| Name | Type | QR CS and QR 30 | QR 30 Only | QR CS Only | Description |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Common Parameter** |  |  |  |  |  |
| qrType | String | Required | Required | Required | Type of QR Code to request for generate QR code.  
• “PP”: QR 30  
• “CS”: QR CS  
• “PPCS”: QR 30 and QR CS |
| amount | String | Required | Required | Required | Amount of transaction with the length up to 13 characters including "." e.g. 100, 100.00 |
| **QR CS Parameter** |  |  |  |  |  |
| csExtExpiryTime | String | Optional | Not Applicable | Optional | Value is in minute which indicates that the expiry time of the requested QR code will be in next X minutes from the current time. If not specific the default expirytime will be 15 minutes. |
| csNote | String | Optional | Not Applicable | Optional | Description of QRCS Transaction |
| csUserDefined | String | Optional | Not Applicable | Optional | Any value which defined by user. |
| invoice | String | Required | Not Applicable | Required | Invoice number as unique ID per transaction for QR CS. It must be English uppercase letters and numbers only. |
| merchantId | String | Required | Not Applicable | Required | Merchant ID for QR CS. |
| terminalId | String | Required | Not Applicable | Required | Terminal ID for QR CS. |
| **QR 30 Parameter** |  |  |  |  |  |
| ppType | String | Required | Required | Not Applicable | PromptPay Type for QR 30  
**Value:** BILLERID |
| ppId | String | Required | Required | Not Applicable | Biller ID  
  
**Note:** Partners can get on merchant profile of their application.  
Length: 15 |
| ref1 | String | Required | Required | Not Applicable | Reference number required for the relevant payment methods.  
Length: up to 20  
Data Type: \[AZ09\] English capital letter and number only. |
| ref2 | String | Conditional | Conditional | Not Applicable | Reference number required for the relevant payment methods.  
**Required if:** Supporting Reference field under merchant profile of application is set to Two references.  
Length: up to 20  
Data Type: \[AZ09\] English capital letter and number only. |
| ref3 | String | Required | Required | Not Applicable | Reference number required for the relevant payment methods to identify endpoint for receiving payment confirmation.  
**Format:** Reference 3 Prefix + (value), example: SCB1234  
  
**Note:** Partners can get the **Reference 3 Prefix** and set the **Payment Confirmation Endpoint** on merchant profile of their application.  
Length: up to 20  
Data Type: \[AZ09\] English capital letter and number only. |

## Example Request

### QR 30

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 1b01dff2-b3a3-4567-adde-cd9dd73c8b6d' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
      "qrType": "PP",
      "ppType": "BILLERID",
      "ppId": "123456789012345",
      "amount": "1.00",
      "ref1": "REFERENCE1",
      "ref2": "REFERENCE2",
      "ref3": "SCB"
  }'
```

### QR CS

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 7f53b03d-7b9c-42d6-8283-f522ee88ac1c' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "qrType": "CS",
    "merchantId": "684349039613126",
    "terminalId": "379479514042628",
    "invoice": "INVOICE",
    "amount": "100.00",
    "csExtExpiryTime" : "60"
  }'
```

### QR 30 & QR CS

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 390e8c45-a023-4fe2-826b-82854332e220' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "qrType": "PPCS",
    "ppType": "BILLERID",
    "ppId": "123456789012345",
    "amount": "100.00",
      "ref1": "REFERENCE1",
      "ref2": "REFERENCE2",
      "ref3": "SCB",
    "merchantId": "684349039613126",
    "terminalId": "379479514042628",
    "invoice": "INVOICE",
    "csExtExpiryTime" : "60"
  }'
```

[Download Postman Collection](payment-thai-qr.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | qrRawData | String | QR Data |
|  | qrImage | String | Base64 Image of QR |
|  | csExtExpiryTime | String | **Conditional**  
QR CS : Expiry time of the QR code |
|  | responseCode | String | **Conditional**  
QR CS : Status “000” is Success |
|  | qrCodeType | String | **Conditional**  
QR CS : Type of QR code |
|  | qrCodeId | number | **Conditional**  
QR CS : Unique id of QR code |
|  | poi | number | **Conditional**  
QR CS : Point of initiation method  
**\- 11 = Static QR**  
**\- 12 = Dynamic QR** |
|  | amount | decimal(13,2) | **Conditional**  
QR CS : Amount to be paid for the transaction |
|  | currencyCode | String | **Conditional**  
QR CS : Currency code as defined by ISO4217  
**\- 764 (Baht)** |
|  | currencyName | String | **Conditional**  
QR CS : Name of currency |
|  | csNote | String | **Conditional**  
QR CS : Description of QR transaction |
|  | invoice | String | **Conditional**  
QR CS : Invoice or bill number for the transaction |
|  | merchantId | String | **Conditional**  
QR CS : Merchant ID set by the company |
|  | merchantName | String | **Conditional**  
QR CS : Merchant name |
|  | csUserDefined | String | **Conditional**  
QR CS : Any value that was defined by user |
|  | terminalId | String | **Conditional**  
QR CS : Terminal unique ID |
|  | terminalName | String | **Conditional**  
QR CS : Name of terminal |
|  | channels | array | **Conditional**  
QR CS : Array of supported for this QR code |
|  | channels.seqNo | number | **Conditional**  
QR CS : Sequence number of this object in array |
|  | channels.channelCode | String | **Conditional**  
QR CS : Channel code |
|  | channels.channelName | String | **Conditional**  
QR CS : Channel name |

## Example Response

### QR 30

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "qrRawData": "00020101021230670016A00000067701011201151234567890123450210REFERENCE10310REFERENCE252047011530376454041.005802TH6007BANGKOK62070703SCB6304CE18",
    "qrImage": "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"
  }
}
```

### QR CS

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "qrRawData": "0002010102120216492984278344661552047011530376454031005802TH5922TestMerchant15548661816007BANGKOK627301232019041910394997200000005232019041910394997200000007153794795140426286304E253",
    "qrImage": "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",
    "csExtExpiryTime": "2019-04-19 10:54:49",
    "responseCode": "000",
    "qrCodeType": "EM",
    "qrCodeId": "20190419111003263000000",
    "poi": "12",
    "amount": "100.00",
    "currencyCode": "764",
    "currencyName": "Baht",
    "csNote": "",
    "invoice": "INVOICE",
    "merchantId": "684349039613126",
    "merchantName": "TestMerchant",
    "csUserDefined": "",
    "terminalId": "379479514042628",
    "terminalName": "Sandbox Terminal",
    "channels": [
      {
        "seqNo":"1",
        "channelName":"VISA",
        "channelCode":"VSA"
      }
    ]
  }
}
```

### QR 30 & QR CS

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "qrRawData": "0002010102120216492984278344661530670016A00000067701011201151234567890123450210REFERENCE10310REFERENCE25204701153037645406100.005802TH5922TestMerchant15548661816007BANGKOK62610123201904191110032630000000523201904191110032630000000703SCB63043EA1",
    "qrImage": "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PO1rYStBNyrzshvcbPxWycROihWXZP9FbhE4htHmNiO6PVMukDbayOLyFkCadeEee0k6Ts6VejjNKl3AKiQgona9e71uHdnbWfWN95G0Ta94NWbdE2H3sZR0q3/1+972WpV428wefad731q2toKsjJN6BUzc/gI4v8aFIoEdauDvItiQMwtwe6D14P9GGL4TfiVuLSzfAt9SuozlcH09/EsQZ1fCI4YwegUrYugG9sUUdnCCM+zc2TYlxJwtco3dS2HvsnhHOnbxfGO5YBPPkJQxVip/SXxkI9+YwTRucv6OWluh/hXLNNDflJlb3TSrWK63PXOQv4rkqEaNzUOdM4yzXAMzn3fGOEUxnf/mWziXuKpulqT/U3Vb4R3o2Yp95rOYw5zSNmM2t0al8kiXvGcal5m8vW2zecH859EG+sRxJnSmgVpeRtt4Bou29Kd76uoyilbTH5ZzlD0N6jvP2rDEtHNlO8zjJ/962H5LLHdhjWOrUtdYkts0ok/daQznmti4tvSkFVtPSA+4u8V1NpQLXW1gq1naoU7uqBNt5Fd/m7LClvKWi21uZne7sarF8kllq93Y2tfJpuZ0qcmV2mTj2ZG61val4U1paisY3LxLNbJ7PWiA21bifG1jgq/NVEdvUeFAljK713xnQMs73gtvNr0LXu6J7lrJ4271YQ883HeP/IAIX3UQ6w3he1u24r5ud4sd/17pb8u85KKeuc09meR8P7zmxib5sinec/z6HOoRh3akiU7rm6Mczf22dq3DHWwWXjzbOP861Y/r7nlrPeldnva5hQx2Q59b5xqW9I+5HUiID7zoDYd7W7edR6unG5SHFrfRr27mxfZdxCJffFLtXtBTCx7PdKX7koee+I1vmMx8H3O0sc1vJqs6x4S3NcOJjPZPCdfxeye556P+94PHHPYY1/JUT6/xKqs+rXpfOexff+vYdxyhAt+u7uscfNQ3PvN53/zR/Q583LP16X6vfetR/fncpz6nvHc+4zuP90ZPf+yPj2LKLR758AYcKqv/eOyfPvnJ+1ng0fYhCXlu+//mz36X1de+78uvfLdHcM4VfZJldtanePKnduLHgM9ndl62XG+mbA84esm3gDmHb8engFnXgLR3gRQIc+anUAN4WgWob641eDvXYBWIbjQHcuyUgOqHdHOnPYgnazXIf9+nf2eHgP53ghK4fRC4YzQoTdB3g0XoVfnHS2mXgwDogyrodNonUiQIeQxnfzjYV5y3gxuohR1ogRz4ViFIhcKHhdTHdybXdlA4cVzogF/ohdcXhnUngjB4ckBYfz/4dnXIdG6Ify34TArHcnFXheiXhW0Ih3eHhDsYgFfWh2g4cWNoff/nh6RnWbvmcnaoh4fHh4JWiP8GiUl4iMcXiaX/N4iIOIKa94Jyp4mhyIqjmIj2loGTmIIo2Iq/h4elKIpSqItgqIOPmIlzqIrvB4rGt31/6H1KSIjZF4VNKIsJF4yBCIy4WIzDSIrCGHwGaAJC6ITM6IjJOISCGI3W2ImzCISW6G/IeIC7+Ibd2IveuFsGx465yIyVF4txyGUqd4swAY1mqIgrmFCYGHomqIbtx4LDR27rZnDR14MBqSUxuG/jmAMCKYcGiY3GpZCgCH8NiYrcx403IJGYtmIel5Dh545B+I8ACXR6F49pQZLxJUGX+Izkt4TSeJL3aI9DhpEe2ZKAZ3j6qHQTGYv0WJNYt4Ya2ZFntZOyd3Y+loZA/zmQ7WiL+zWTHAmROPCRU0eR+TiGbMiJRiiVxrh7R+mM0qh4Kwl6KXmM4YOS/bd2TNiFj/Zs9QiV2ViGx+aUQqeOYEmUcFl81ZiRwWWXa+mJHxhxf7l1NvlvxHiVNBmSwyWJhliWhDmWB8l+Z9h9q2iQC4mPcfmUvEiXrzhZjcl6iziVipmUQnmXPSaX6PiZp4hXIch867iRpll2rKmUMEmWXdk6rslrWHmOapmHyziD+/eWLomQnVmcrUmHr5maaUmaekmbh0mEzemY/HGFiIZ6TJmcFlmNF8mIgTl1hqmatQmR2smWaFmdyHl/Nuh136mc4WmK4xlyunmNp5mPuP8pjlK1fm55nqEphvEpkuTZh+Z5deI5bpHpmVbIgs85mO6poJw5n6TGkLH2kr8pietZfly5ie+Zih3qk6Gnl8tnnxUKoYI5gftJnP0Jnh5qoOkZoc1IoNuInksZlHWZoQualw36hkg1oyEKfuSpbr1Xo6DJnvSXo4X5hDslk0O3khp6m1qZpIAomVl5funooMSYneFXkY13lne4dFIHjk0qmlj6ixhKeffJaFtqmeMHomTHm/rpixPKdWT4n03JcaKporbppJnppsuJfVY6o2TalmAajly6pFE6nYj5jv8jgxhIpIuKlwmqjWdKZ3wqo4a4p3jap6Y3hWU6orQ4qYL/uqNaCqUoSqfUiXzSB4uPyp3YOaWNSolzaqnASWiGyqY9uqm1KoCeCqR+iahhuqa4Ko8uuHCz6p9BV5mrNY1y6qcluZinKqXD6pXIyp86ypdCyqrzJ58m+qQUCqrwSJ8PSq0paq3Gia1v+o2sd6GaKpaOCkzX2ZP82Jtdl1G7OqjqOqSoqpnuSoBHGK+HyqGpGqNK2aVR+a/92KbtGqv9WqmlKqzzKrBG+afSarBhl5/muoesKKrQWJHeGaebeZzoCqnnyq3GGq77CKjTWnhsN5XampZm6rIuWrLsWpU/ya1AEKQxibAsWacf66Vz2ql2yqk5CVk5C6w7C1xyWLD1/1mlJ1qeNtqMr2W0hbqR3nZ5TfewETi0QqurCisFU7uvJ1u1R9qq0kmv0Tqc0BqcTQC2RFuzSOuBt/qzaAunAwq1ZvkEbeu1UTu2DrqVBflU1JitkolVaNq0k2m18Cm3FauzEwujd0u4eWu4QNu3PKu0WDu3jVu34Qqzkbuh4tqsnPubIvqlPEi2Heuwm6ungVt1NIup/sqyKmt6zwqvK3ugt4eatpubn+t+S0urput6boeZgAuYV8q621lSiem6c0mpkUqslpex8Ze6ceu4naus5kiiB+uzRaqovwu9w+utFpulpSum5Ku8sAm5XDuaPzquwCubxtuzqkuwmJtxrf+LvoOrvh6buWdbrZ87vpd7velbvXA0tda7qs4ru/xLrv77q5Q5u8frrAKMoGkbnd3LoOTom73asOYrnHYbv8zro/dawRl7wc0LkhosqxBcoIILwNsZwhQ8ku35vgd8wmYbjsnbwaL7wbb5wloLvi18k0cLw66avyp8qToMxCBcriMbvbCqgeCafkRMw7dbxIcbs6matHRLvT68lys8j2NKvCnMwcTqiknMw0tctt07qbb6tPdrw2wsvyU8woRqlTHclztsklacq+tbxe0Lx0h8tRwYm5BZuUHsvnE8m5q1rigcuk8cviU4up7bsv74xpKcwMWar7Fbv6UZxgyLwEr/DLeOXMkJSrraC52dvLVF+chVOMigPMmmKr34q8ovR4vyysUOecfvGsmkXMggOMouzL7im8irjMWUrMbWucvAHMp5/MuEHLzFy8nEjLcJ+7ag28TI6bulfMyybMhqCst2PLOMDMlS7MyvPMua7LTHSrJru79Uy8vU3IjpGsu0rMUBO8cRi8fZTL9Mm8vlKMG82s8BSrnMuc1+vMcT3MOM+8P+zM0AXdDbqrkr2sXpvMnKaM4Jzc8Pnaip7Lu0O70SGs0DPcD5vM+IC6BCHMHYjLELLdD1/GXSjLtObNLL3Mqr29AijMoyG9H2DM4PTNKLi6TMutPLqsxp3L/W3LVF/52nRq3ADry7Sr3Sh8y8Bvy3xOzNUH3ETNzUJRy2Ws3HyPvPQo3SUf2/N1vSZR2MPOrBYszWFmyvSD3R8wu/pqyTGyyycF3TJpzWsEvCb53X3+vUxWxXfJ3U7fzXUDzD7dzRKfbV8qu3WD3TZGyz/1jGd2rXbq2sht3TLNrAhEXYgh2oycyve33ZfZ3ZCh3XgI3WT43Rv8ux+MTClt3Wpu24mn24ofrRefbZr/2VgEzas72KQYvXmx3Yq32xQS3ZfSxjX1za4Jipr/jYa43Oj1uiLYfY0j3U5XvXuZvdW+zdIK3YZ33SxX26vsrcIp3S6J2ynBjdvr3A1B2yFrux7v/tztWMyJKK2O0N3qitz2JN3n77qnqsvost4G0MTYQ63xm90c6tyJPr0pXd3fjNqtw91nOt0Qwuw6P9cxbN4WI74LG94KD9ugWu3/A93bxNz9Zd4Nhd4Xx72hKu3hZ+zcAd1ygO0Qh+3fQN4Yw54eZdzYtsxkyNz3eNsjlM0V7du72s4Diu0mccxTEu17UN4hhu0DjNqOoJxj8d2a09z7o75AwN5cZd5KF900Lufo/pytc61DgM1iv+3VHOxUlO0xaKoxSL3B3u1VDF42He2ZPtoVed3usc3Ot952+u518e4juOyT3uxsI859U96Ha+5YYe02Nckjbu01COnwiN2mv/jMYEHtBb/dYsfsNGbOYNjuWNruK1LNFUSuOKzuZqztpePMShrrZUfuM1fr6oWrsRPqqWTulbSNxdnujBvOpmndXD3dz1vdSxHuwh7dLP2t9kHuTqfOxHTey4nulejuYA/uQXfuulfuVGar+8vttTvuhVnti7Hu2fCuaynevd7trj/cf7zbum7qT1fuowDdTe6+DsHKy2/ero7uw8iezrbvAz/u6/He+rOe/+re+YLurfDvDJfsUJbuIvW+fKXq/3qt3TfeZ03uTJPcV/PpRS/cxK6vEBbsMFjOqsbqpjLvAnD/Mcn6xp+/HY/vI3X86GLPOdTvMEHPS3HdZwrc0Z/5zisy7KjdytQ3/Ulzywh455n+3qjm65Vh/nTn/i3GtlOM/yIL/zOPnO58zRUa31mO3vvZ3nX6/z487zae7LTF/1Tn/KQ/mJMA72bi/2kK3v93z2T//mz03k9N7nVv6tpYvxiS/TR//UJX73ZK/TdOzQxU7xLf7zSN6dG2/cFC7iXM/k2734vyjHOY7BnP3Nauj4om/MLU3Ftb7wTa34bp7we771yS74TN+i/13yuh/oimvgD37Qqx/pD4/wQj712Sv3ob/y3r77is7VAAv5vE/oGivydI35lSi8zK7jk0/7gG/7ml/Rcc/6km/4r4/oLG35fi79S0/bUl/p5E7y4f993lhv9tUfzjUp3Hg+0uqu/0wK/RJ//oG96cOs8lLO/AUP58/u89Av8ecf2Js+zCov5cxf8HD+7D4P/RJ//oG96cOs8lLO/AUP58/u89Av8ecf2Js+zCov5cxf8HD+7D4P/RJ//oG96cOs8lLO/AUP58/u89Av8ecf2Js+zCov5cxf8HD+7D4P/RJ//oG96cOs8lLO/Iwf7pf/0h3f/MKv/Uue7skP7JL+/DeK/Yxe81Cf2zmP/oGNukRf5r3e+EmZ/3B/o3qf/ka+70nf+UdO/cte9/B/33w/3mbK+X4f9oUd/jY98OWO9vfN9+Ntppzv92Ff2OFv0wNf7mh/33z/P95myvl+H/aFHf42PfDljvb3zffjbaac7/dhX9jhb9MDX+5of998P95myvl+H/aFHf42PfA3avfB79/Zruv+Le3GTv4Qq9bP/vfk/+sqH//iH5a/r/EjP/MaH3h/n+6BTO15D/8z75zqL+cQq9bP/vfk/+sqH//iH5a/r/EjP/MaH3h/n+6BTO15D/8z75zqL+cQq9bP/vfk/+sqH//iH5a/r/EjP/MaH3h/n+6BTO15D/8z75zqL+cQq9bP/vfk/+sqH//iH5a/r/EjP/MaH3juzvBrvrzXz//PfslVPfj9nris7O4Mv+bLe/38/+yXXNWD3++Jy8ruzvBrvrzX/8//z37JVT34/Z64rOzuDL/my3v9/P/sl1zVg9/vicvK7s7wa76818//z37JVT34/Z64rOzuDL/my3v9/P/sl1zVg9/vicvK7s7wa76818//z37JVT34/Z64rOzuDL/my3v9/P/sl1zVg9/vicvKDt//w2zrx9++VC3+3a/t5B///L2A8t7/w2zrx9++VC3+3a/t5B///L2A8t7/w2zrx9++VC3+3a/t5B///L2A8t7/w2zrx9++VC3+3a/t5B///L2A8t7/w2zrx9++VC3+3a/t5B///L2A8t7/w2zrx9++VC3+3a/t5B///L2A8t7/w2zrx9++VC3+3a/t5B///P+9gPLe/8Ns68ffvlQt/t2v7eQf//wtyYBO6/0f8PSd727bzZm891Cf0yj/64ffk5wf+y966cMM/1Cf0x/6vMgMzT5PtqO/7PLe855/3Dav8Ht/yT7P9p9v/rH/opc+zPAP9Tn9oc+LzNDs82Q7+ssu7z3v+cdt8wq/95fs82z/+eYf+y966cMM/1Cf0x/6vMgMzT5PtqO/7PLe855/3Dav8Ht/yT7P9p9v/rH/opc+zPAP9Tn9oc+LzBnO3+/P7ZlM+cU/+rKv1+RP7TXsyWgv//vP7ZlM+cU/+rKv1+RP7TXsyWgv//vP7ZlM+cU/+rKv1+RP7TXsyWgv//vP7Zn/TPnFP/qyr9fkT+017MloL//7z+2ZTPnFP/qyr9fkT+017MloL//7z+2ZTPnFP/qyr9fkT+017MloL//7z+2ZTPnFP/qyr9fkT+017MloL//7z+2ZTPnFP/qyr9fkT+017MkqeZk0yu/Fb6ZUHf72rtuyT/0vlNe4LN/DTtyP3/vprwOxf/i6TM6t/u8tnu2df+REreHH/dJ8jvfj/Mk8jfxrntOdf+REreHH/dJ8jvfj/Mk8jfxrntOdf+REreHH/dJ8jvfj/Mk8jfxrntOdf+REreHH/dJ8jvfj/Mk8jfxrntOdf+REreHH/dJ8jvfj/Mk8jfxrntOdf+REreHH//3SfI73FQ+y5p/t6Q7uz0/QFd/04M7p5V7DB+/pKQ/vvp/1I3/pJS3tSj6ZJvvo8C//8f/ssn7ck17oS679hV7uNXzwnp7y8O77WT/yl17S0q7kk2myjw7/8h//zy7rxz3phb7k2l/o5V7DB+/pKQ/vvp/1I3/pJS3tSj6ZJvvo8C//8f/ssn7ck17oS679hV7uNXzwnp7y8O77WT/yl17S0q7kk2myRq6qpH77Fd/0Xn7xmYz0uc7pku6Iqa/c7Q/3s3/+54/yRD3zrd/azi/+pv/73g/ZuA3sS37cTS/ox039sv/rts744c7p9w7sS37cTS/ox039sv/rts744f/O6fcO7Et+3E0v6MdN/bL/67bO+OHO6fcO7Et+3E0v6MdN/bL/67bO+OHO6fcO7Et+3E0v6MdN/bL/67bO+OHO6fcO7Et+3E0v6MdN/SRO+qra7Cc/zVLe7xh//Icf5CY7/wzP8Ej/9k4u5f2O8cd/+EFusvPP8AyP9G/v5FLe7xh//Icf5CY7/wzP8Ej/9k4u5f2O8cd/+EFusvPP8AyP9G/v5FLe7xh//Icf5CY7/wzP8Ej/9k4u5f2O8cd/+EFusvPP8AyP9G/v5FLe7xh//Icf5CY7/wzP8Ej/9k4u5f2O8cd/+EFusimP9lAv2uGPlA/Z7Mr/vMr/6zR+Yfr/6/kf6vU6EPWFX/y2/Oz63+szl9eM/6FerwNRX/jFb8vPrv+9PnN5zfgf6vU6EPWFX/y2/Oz63+szl9eM/6FerwNRX/jFb8vPrv+9PnN5zfgf6vU6EPWFX/y2/Oz63+szl9eM/6FerwNRX/jFb8vPrv+9PnN5zfgf6vU6EPWFX/y2/Oz63+szl+00KqDCf9zET+rTLv+73+sbzt/izcDwzN+Xqesxj+7TLv+73+sbzt/izcDwzN+Xqesxj+7TLv+73+sbzt/izcDwzN+Xqesxj+7TLv+73+sbzt/izcDwzN+Xqesxj+7TLv+73+sbzt/izcDwzN+Xqesxj+7TLv+7/9/rG87f4s3A8Mzfl6nrMY/u0y7/u9/rG87f4s3A8Mzfl6nrMY/u0y7/u9/rG87f4n3kxn+ZqX3yzk+2x2/9k27vcO7hcJ6uBLnsUa/+z3/61j/p9g7nHg7n6UqQyx716v/8p2/9k27vcO7hcJ6uBLnsUa/+z3/61j/p9g7nHg7n6UqQyx716v/8p2/9k27vcO7hcJ6uBLnsUa/+z3/61j/p9g7nHg7n6UqQyx716v/8p2/9k27vcO7hcJ6uBLnsUa/+z3/61j/p9g7nHj7pS975DAzPge/uIV7wGV/YR5DvEm3LC6vw45/ueX/41q/XLS7vWdz+lxnYZprtNIr8Cv8f4gWf8YV9BPku0ba8sAo//ume94dv/Xrd4vKexe1/mYFtptlOo8iv8CFe8Blf2EeQ7xJtywur8OOf7nl/+Nav1y0u71nc/pcZ2Gaa7TSK/Aof4gWf8YV9BPku0ba8sAo//ume94dv/Xrd4vKexe0v/Mfd9IEM2Zwv59vL04zO55Wv/U6uqlz+74U9/Yyf7uZPkIzO55Wv/U6uqlz+74U9/Yyf7uZPkIzO55Wv/U6uqlz+74U9/Yyf7uZPkIzO55Wv/U6uqlz+74U9/Yyf7uZPkIzO55Wv/U6uqlz+74U9/Yyf7uZPkIzO55Wv/U6uqlz+74U9/Yyf7uZPkIzO55X/r/1Orqpc/u+FPf2Mn+7mT5CMzueVr/1KyPm27OH7L98yjbp6b/rUnusRH/ySXtW2DuqB/Os9CdiqPd6A/uyy3kqcb8sevv/yLdOoq/emT+25HvHBL+lVbeugHsi/3pOArdrjDejPLuutxPm27OH7L98yjbp6b/rUnusRH/ySXtW2DuqB/Os9CdiqPd6A/uyy3kqcb8sevv/yLdOoq/emT+25HvHBL+lVbeugHsi/3pOArdrjDejPLuutJO+XTJB6X9iBn9v5PuoLO/5UWc7yfskEqfeFHfi5ne+jvrDjT5XlLO+XTJB6X9iBn9v5PuoLO/5UWc7yfskEqfeFHfi5/53vo76w40+V5Szvl0yQel/YgZ/b+T7qCzv+VFnO8n7JBKn3hR34uZ3vo76w40+V5Szvl0yQel/YgZ/b+T7qCzv+VFnO8n7JBKn3hR34uZ3vo76w40+V5Yy60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tM4e60Kz/VO3hrl/2N4rH8p71yH/tw//P+IFtsjyd4bR+y5eZ7oG8vaUv7oNf7vL978PfzZms8GVf7tzu4xou7oNf7vL978PfzZms8GVf7tzu4xou7oNf7vL978PfzZms8GVf7tzu4xou7oNf7vL978PfzZms8GVf7tzu4xou7oNf7vL978PfzZms8GVf7tzu4xou7oNf7vL978PfzZms8GVf7tzu4xou7oNf7vL978PfzZms8GVf7tzu4xou7oPP/mH5+xq/7M8f8+pP87h88Etd9yr/+xq/7M8f8+pP87h88Etd9yr/+xq/7M8f8+pP87h88Etd9yr/+xq/7M8f8+pP87h88Etd9yr/+xq/7M8f8+pP87j/fPBLXfcq//sav+zPH/PqT/O4fPBLXfcq//sav+zPH/PqT/O4fPBLXfcq//sav+zPH/PqT/O4fPBLfcmX3/S438BUTes+P8z4f5nnv/5Zu7Db3vo+X/jQHuJArvWrd+gXBujhf+/Yj/xlz/7dP/xQL7HWPvEzLOdeL+Pd//m4H/Dir/Q2v/fWPvEzLOdeL+Pd//m4H/Dir/Q2v/fWPvEzLOdeL+Pd//m4H/Dir/Q2v/fWPvEzLOdeL+Pd//m4H/Dir/Q2v/fWPvEzLOdeL+Pd//m4H/Dir/Q2v/fWPvEzfNjA/v3QPOI9iZ/yruHaX+7LPZnSPuqBn9ucP/eff/Aa/6795b7ckyntox74uc35c//5B6/h2l/uyz2Z0j7qgZ/bnD/3n3/wGq795b7ckyntox74uc35c//5B6/h2l/uyz2Z0j7qgZ/bnD/3n3/wGq795b7ckyntox74uc35c//5B6/h2l/uyz2Z0j7qgZ/bnD/3n3/wGq795b7cv6Xhup7yXi7mwo/yRN3spE/9qq70V8/wFW/070//7P/esA61GH/xDr96ES/86c7tRZ/XsA61GH/xDr96ES/86c7tRZ/XsA61GH/xDr96ES/86c7tRZ/XsA61GH/xDr96ES/86c7tRZ/XsA61GH/xDr96ES/86c7tRZ/XsA61GH/xDr96Ef8v/OnO7UWf17AOtRh/8Yyt1uHPwB8O8QFP1gQP/tcf30jvpzR/6LFv7st+xbAO/tcf30jvpzR/6LFv7st+xbAO/tcf30jvpzR/6LFv7st+xbAO/tcf30jvpzR/6LFv7st+xbAO/tcf30jvpzR/6LFv7st+xbAO/tcf30jvpzR/6LFv7st+xbAO/tcf30jvpzR/6LFv7st+xbAO/tcf30jvp/Iu6zQKzT3P7u0P9zcKzRp+/uEe8XB//Umf7rh/mSjv4tGPukRf5r1OfAcv6zQKzT3P7u0P9zcKzRp+/uEe8XB//Umf7rh/mSjv4tGPukRf5r1OfAcv6zQKzT3P7u3/D/c3Cs0afv7hHvFwf/1Jn+64f5ko7+LRj7pEX+a9TnwHL+s0Cs09z+7tD/c3Cs0afv7hHvFwf/1Jn+64f5ko7+LRj7pEX+a9Tnw1jPtkO/rLnu0f6vXz7/vdDNuCvLw2Df/9r/4eTc7hb+9Nb/4074gma9Pw3//q79HkHP723vTmT/OOaLI2Df/9r/4eTc7hb+9Nb/4074gma9Pw3//q79HkHP723vTmT/OOaLI2Df/9r/4eTc7hb+9Nb/4074gma9Pw3//q79HkHP723vTmT/OOaLI2Df/9r/4eTc7hb+9Nb/4074gme+Rwvpv3r5Lqn/Mtnvrl3/YHHtgFD+e7/3n/Kqn+Od/iqV/+bX/ggV3wcL6b96+S6p/zLZ765d/2Bx7YBQ/nu3n/Kqn+Od/iqV/+bX/ggV3wcL6b96+S6p/zLZ765d/2Bx7YBQ/nu3n/Kqn+Od/iqV/+bX/ggV3wcL6b96+S6p/zLZ765d/2Bx7YBQ/nu3n/Kqn+Od/iqV/+bX/ggV3wv+XYUDv3hU3rM1/29q7XrLy8R/5bjg21c1/YtD7zZW/ves3Ky3vkv+XYUDv3hU3rM1/29q7XrLy8R/5bjg21c1/YtD7zZW/ves3Ky3vkv+XYUDv3hU3rM1/29q7XrLy8R/5bjg21c1/YtD7zZW/ves3Ky3vkv+XYUP8794VN6zNf9vau16y8vEf+W44NtXNf2LQ+82Vv73rNyg7f89O/+e7u/a4//uE+zfa9sGsr7z0//Zvv7t7v+uMf7tNs3wu7tvLe89O/+e7u/a4//uE+zfa9sGsr7z0//Zvv7t7v+uMf7tNs3wu7tvLe89O/+e7u/a4//uE+zfa9sGsr7z0//Zvv7t7v+uMf7tNs3wu7tvLe89O/+e7u/a4//uE+zfa9sGsr7z0//Zvv7t7v+uMf7tNs3wu7tjQ/+qq+4fIc9krPzMlv1aIN90suenZf3qq+4fIc9krPzMlv1aIN90suenZf3qq+4fIc9krPzMlv1aIN90suenZf3qqbvuHyHPZKz8zJb9WiDfdLLnp2X96qvuHyHPZKz8zJb9WiDfdLLnp2X96qvuHyHPZKz8zJb9WiDfdLLnp2X96qvuHyHPZKz8zJb9WiDfdLLnp2X96qvuHyHPZKz8zJb9WiDfdLfty/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/9Vu/VQAAOw==",
    "csExtExpiryTime": "2019-04-19 12:10:03",
    "responseCode": "000",
    "qrCodeType": "EM",
    "qrCodeId": "20190419111003263000000",
    "poi": "12",
    "amount": "100.00",
    "currencyCode": "764",
    "currencyName": "Baht",
    "csNote": "",
    "invoice": "INVOICE",
    "merchantId": "684349039613126",
    "merchantName": "TestMerchant",
    "csUserDefined": "",
    "terminalId": "379479514042628",
    "terminalName": "Sandbox Terminal",
    "channels": [
      {
        "seqNo":"1",
        "channelName":"VISA",
        "channelCode":"VSA"
      }
    ]
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
