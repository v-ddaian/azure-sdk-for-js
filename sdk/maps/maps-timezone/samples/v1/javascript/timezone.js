// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates Timezone API usage. Simple CRUD operations are performed.
 */

const { DefaultAzureCredential } = require("@azure/identity");
const { TimezoneClient } = require("@azure/maps-timezone");
require("dotenv").config();

/**
 * Azure Maps supports two ways to authenticate requests:
 * - Shared Key authentication (subscription-key)
 * - Azure Active Directory (Azure AD) authentication
 * 
 * In this sample you can put MAPS_SUBSCRIPTION_KEY into .env file to use the first approach or populate
 * the three AZURE_CLIENT_ID, AZURE_CLIENT_SECRET & AZURE_TENANT_ID variables for trying out AAD auth.
 * 
 * More info is available at https://docs.microsoft.com/en-us/azure/azure-maps/azure-maps-authentication.
 */


/**
 * Empty token class definition. To be used with AzureKey credentials.
 */
class EmptyTokenCredential {
  async getToken(_scopes, _options) {
    return {
      token: "token",
      expiresOnTimestamp: Date.now() + 60 * 60 * 1000
    };
  }
}


async function main() {
  let credential;
  let operationOptions = {};

  if (process.env.MAPS_SUBSCRIPTION_KEY) {
    // Use subscription key authentication
    credential = new EmptyTokenCredential();
    operationOptions.requestOptions = { customHeaders: { "subscription-key": process.env.MAPS_SUBSCRIPTION_KEY } };
  }
  else {
    // Use Azure AD authentication
    credential = new DefaultAzureCredential();
  }

  const timezone = new TimezoneClient(credential).timezone;

  console.log(" --- Get timezone by coordinates:");
  const timezoneByCoordinatesOptions = { "options": "all" };
  console.log(await timezone.getTimezoneByCoordinates("json", "47.0,-122", { ...timezoneByCoordinatesOptions, ...operationOptions }));

  console.log(" --- Get enum IANA timezones:");
  console.log(await timezone.getTimezoneEnumIana("json", operationOptions));

  console.log(" --- Get IANA version:");
  console.log(await timezone.getTimezoneIanaVersion("json", operationOptions));

  console.log(" --- Get timezone by IANA ID:");
  const timezoneByIdOptions = { "options": "all" };
  console.log(await timezone.getTimezoneByID("json", "Asia/Bahrain", { ...timezoneByIdOptions, ...operationOptions }));

  console.log(" --- Get enum Windows timezones:");
  console.log(await timezone.getTimezoneEnumWindows("json", operationOptions));

  console.log(" --- Get Windows timezone to IANA:");
  console.log(await timezone.getTimezoneWindowsToIana("json", "Eastern Standard Time", operationOptions));

}

main();
