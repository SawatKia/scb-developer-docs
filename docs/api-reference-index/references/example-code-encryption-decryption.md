---
source_url: "https://developer.scb/#/documents/api-reference-index/references/example-code-encryption-decryption.html"
source_route: "#/documents/api-reference-index/references/example-code-encryption-decryption.html"
source: SCB Developer Portal
content_hash: a2179221117ae9ecbccd8ec902fb98e7d8124e05146e1bb55e891da3079a110b
---

# Example Code for Encryption and Decryption

In some parts of interfaces between SCB systems and billers, encryption and decryption are required. Below are example codes for encryption and decryption in Javascript and Java programming languages.

Encryption is for encrypting data before a biller makes an API request to SCB systems while decryption is for decrypting data when a biller receives an API response from SCB systems.

## Encryption

After the application is able to obtain Client Credentials Token, it then is able to consume any other Direct Debit API functions. However, all Direct Debit API functions have a key request body attribute named “encryptedValue” which contains main information of each particular function in a form of cipher-text.

### 1\. Node JS  

Node JS sample code for data encryption by using “crypto” library is as below:

```javascript
const crypto = require('crypto');

const pk = {PUBLIC_KEY}
let jsonValue = {DATA};
let encryptedValue = encryptPublic(jsonValue, pk);

function encryptPublic(toEncrypt, publicKey) {
    const keyData = "-----BEGIN PUBLIC KEY-----\n" + publicKey + "\n-----END PUBLIC KEY-----";
    const buffer = Buffer.from(toEncrypt, 'utf8');
    const encrypted = crypto.publicEncrypt({
            key: keyData.toString(),
            padding: crypto.constants.RSA_PKCS1_PADDING
    }, buffer)

    return encrypted.toString('base64')
}
```

**Remark**  
{PUBLIC\_KEY}      : Public Key.  
{DATA}             : Data for encryption.  

### 2\. PHP  

PHP sample code for data encryption by using OpenSSL library is as below:

```javascript
$original_data = {DATA};

$public_key_b64 = "-----BEGIN PUBLIC KEY-----\n”.{PUBLIC_KEY}.”\n-----END PUBLIC KEY-----";
$encrypted_data;

$encryption_result = openssl_public_encrypt($original_data, $encrypted_data,
$public_key_b64, OPENSSL_PKCS1_PADDING);

$encrypted_data_b64 = base64_encode($encrypted_data);
```

**Remark**  
{PUBLIC\_KEY}      : Public Key.  
{DATA}             : Data for encryption.  

### 3\. Java  

Java sample code for data encryption shown as below:

```javascript
private String dataEncryption({DATA}){
        PublicKey publicKey;
        Cipher encryptCipher;
        KeyFactory keyFactory;
        String encryptedValue = null;

        byte[] publicKeyBytes = Base64.decodeBase64({PUBLIC_KEY});
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyBytes);

        try {
                keyFactory = KeyFactory.getInstance("RSA");
                publicKey = keyFactory.generatePublic(keySpec);

                encryptCipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
                encryptCipher.init(Cipher.ENCRYPT_MODE, publicKey);
                byte[] dataBytes = {DATA}.getBytes();
                byte[] encryptedDataBytes = encryptCipher.doFinal(dataBytes);
                encryptedValue = Base64.encodeBase64String(encryptedDataBytes);
                        }
        catch (NoSuchAlgorithmException | InvalidKeySpecException | NoSuchPaddingException |
        InvalidKeyException | IllegalBlockSizeException | BadPaddingException e) {
                e.printStackTrace();
        }
        return encryptedValue;
}                     
```

**Remark**  
{PUBLIC\_KEY}      : Public Key. (String)  
{DATA}             : Data for encryption. (String)  

### 4\. Python  

Python sample code for data encryption shown as below (Using rsa, requests, base64, and json modules) :

```javascript
import requests
import rsa
import json
import base64

def getPublicKey():
        with open('{PUBLIC_KEY}.pem','rb') as publicFile:
                puplicKeyData = publicFile.read();
                global publicKey
                publicKey = rsa.PublicKey.load_pkcs1_openssl_pem(puplicKeyData)

def encryption({DATA}):
        global publicKey;
        jsonValueString = json.dumps({DATA});
        encryptedJsonDataBytes = rsa.encrypt(jsonValueString.encode('ascii'),publicKey);
        base64_bytes = base64.b64encode(encryptedJsonDataBytes);
        base64_message = base64_bytes.decode('ascii')
        return base64_message;                    
```

**Remark**

|  |  |
| --- | --- |
| {PUBLIC\_KEY} | : Public Key file path. (PublicKey.pem must start with ‘----- BEGIN PUBLIC KEY-----’, each line must consist of 64 characters and end with ‘----- END PUBLIC KEY-----’) |
| {DATA} | : Data for encryption. (type ‘dict’) |

### 5\. C# (.NET)  

C# (.NET) sample code for data encryption shown as below:

```javascript
using System.Security.Cryptography;
using System.Text.Encodings.Web;

private static string encryptData(string {DATA}) {
        string publicKey = {PUBLIC_KEY}

        var pubKeyBytes = Convert.FromBase64String(publicKey);
        using (var rsa = RSA.Create())
        {
                var dataToEncrypt = Encoding.UTF8.GetBytes({DATA});
                rsa.ImportSubjectPublicKeyInfo(new ReadOnlySpan<byte>(pubKeyBytes) , outint _);
                var encryptedData = rsa.Encrypt(dataToEncrypt, RSAEncryptionPadding.Pkcs1);
                var base64EncryptedData = Convert.ToBase64String(encryptedData);
        }
}                    
```

**Remark**  
{PUBLIC\_KEY}      : Public Key. (String)  
{DATA}             : Data for encryption. (String)  

## Decryption

Responses from Customer Registration Inquiry, Direct Debit Payment and Payment Inquiry functions contain a data attribute named “encryptedValue” which its value is in a form of cipher-text. This value must be decrypted by using Public Key from SCB first in order to get the actual information.

### 1\. Node JS  

Node JS sample code for data decryption is as below:

```javascript
function decryptPublic({CIPHER_TEXT}, {PUBLIC_KEY}) {
    const keyData = "-----BEGIN PUBLIC KEY-----\n" +
                            {PUBLIC_KEY} +
                    "\n-----END PUBLIC KEY-----";
    const buffer = Buffer.from({CIPHER_TEXT}, 'base64')
    const decrypted = crypto.publicDecrypt(
    {
            key: keyData.toString(),
            padding: crypto.constants.RSA_PKCS1_PADDING
    },
            buffer,
    )
    return decrypted.toString('utf8')
}                   
```

**Remark**  
{PUBLIC\_KEY}      : Public Key. (String)  
{DATA}             : Data for encryption. (String)  

### 2\. PHP  

PHP sample code for data decryption is as below :

```javascript
$decrypted_register_information_value;

$decrypted_register_information_value_result =
openssl_public_decrypt(base64_decode({CIPHER_TEXT}),
$decrypted_register_information_value,{SCB_PUBLIC_KEY}, OPENSSL_PKCS1_PADDING);                  
```

**Remark**  
{PUBLIC\_KEY}      : Public Key. (String)  
{DATA}             : Data for encryption. (String)  

### 3\. Java  

Java sample code for data decryption shown as below :

```javascript
private String dataDecryption(String{CIPHER_TEXT})throws InvalidKeyException,
NoSuchAlgorithmException, NoSuchPaddingException, IllegalBlockSizeException,
BadPaddingException, JSONException{
    LOG.debug("dataDecryption()...");

    Cipher encryptCipher=Cipher.getInstance("RSA/ECB/PKCS1Padding");
    encryptCipher.init(Cipher.DECRYPT_MODE,{PUBLIC_KEY});
    byte[]encryptedBytes=Base64.decodeBase64({CIPHER_TEXT});
    byte[]decryptedValue=encryptCipher.doFinal(encryptedBytes);

    String decryptedString=newJSONObject(new
    String(decryptedValue)).toString();
    LOG.debug("Decrypted string : {}",decryptedString);

    return decryptedString;
}                 
```

**Remark**  
{PUBLIC\_KEY}      : Public Key. (String)  
{DATA}             : Data for encryption. (String)
