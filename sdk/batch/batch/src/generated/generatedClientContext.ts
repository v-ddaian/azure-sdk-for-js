/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { GeneratedClientOptionalParams } from "./models";

const packageName = "@azure/batch";
const packageVersion = "9.0.0-beta.1";

/** @hidden */
export class GeneratedClientContext extends coreHttp.ServiceClient {
  batchUrl: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param batchUrl The base URL for all Azure Batch service requests.
   * @param options The parameter options
   */
  constructor(batchUrl: string, options?: GeneratedClientOptionalParams) {
    if (batchUrl === undefined) {
      throw new Error("'batchUrl' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{batchUrl}";

    // Parameter assignments
    this.batchUrl = batchUrl;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2020-09-01.12.0";
  }
}
