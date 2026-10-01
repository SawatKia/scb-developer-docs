import assert from "node:assert/strict";
import { normalizeRoute, routeToFile } from "./routes.js";

const r = "#/documents/api-reference-index/qr-payments/get-billpayment-transactions.html";
assert.equal(normalizeRoute("https://developer.scb/?utm_source=x" + r), r);
assert.equal(normalizeRoute(r + "?a=1"), r);
assert.equal(normalizeRoute("#/login"), null);
assert.equal(normalizeRoute("https://example.com"), null);
assert.equal(routeToFile(r), "api-reference-index/qr-payments/get-billpayment-transactions.md");
assert.equal(routeToFile("#/documents"), "index.md");
console.log("routes ok");
