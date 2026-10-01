---
source_url: "https://developer.scb/#/documents/api-reference-index/references/certificate-signing-request.html"
source_route: "#/documents/api-reference-index/references/certificate-signing-request.html"
source: SCB Developer Portal
content_hash: de363dbcd34b0c7dd28f219ecfddb5f8254fa5063968cf1b9d709712056e83ea
---

# Certificate Signing request

Certificate Signing request or CSR is a message sent from an applicant to a certificate authority in order to apply for a digital identity certificate. It usually contains the public key for which the certificate should be issued, identifying information (such as a domain name) and integrity protection [(more detail)](https://en.wikipedia.org/wiki/Certificate_signing_request). Partner will receive the certificate file from SCB after completing the onboarding process as agreed.  
  
The sandbox version of the listed APIs do not require a CSR (Certificate Signing Request) whereas production APIs do. Following code snippet shows an example of calling an API using CSR.

```javascript
curl -E <path-to-certificate> -X POST \
  https://api-sandbox.partners.scb/<endpoint>/\
  -H 'Content-Type: application/json' \
  -d '{
    <Key>: <Value>
}
```
