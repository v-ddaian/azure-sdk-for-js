/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AliasListItem,
  AliasListOptionalParams,
  AliasCreateOptionalParams,
  AliasCreateResponse,
  AliasAssignOptionalParams,
  AliasAssignResponse,
  AliasDeleteOptionalParams,
  AliasGetDetailsOptionalParams,
  AliasGetDetailsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Alias. */
export interface Alias {
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Creator makes it possible to develop applications based on your private indoor map data using Azure
   * Maps API and SDK. [This](https://docs.microsoft.com/azure/azure-maps/creator-indoor-maps) article
   * introduces concepts and tools that apply to Azure Maps Creator.
   *
   * This API allows the caller to fetch a list of all previously successfully created aliases.
   *
   * ### Submit List Request
   *
   * To list all your aliases, you will issue a `GET` request with no additional parameters.
   *
   * ### List Data Response
   *
   * The List API returns the complete list of all aliases in `json` format. The response contains the
   * following details for each alias resource:
   *   > createdTimestamp - The timestamp that the alias was created. Format yyyy-MM-ddTHH:mm:ss.sssZ
   *   > aliasId - The id for the alias.
   *   > creatorDataItemId - The id for the creator data item that this alias references (could be null
   * if the alias has not been assigned).
   *   > lastUpdatedTimestamp - The last time the alias was assigned to a resource. Format
   * yyyy-MM-ddTHH:mm:ss.sssZ
   *
   * A sample response returning 2 alias resources:
   *
   * ```json
   * {
   *   "aliases": [
   *     {
   *       "createdTimestamp": "2020-02-13T21:19:11.123Z",
   *       "aliasId": "a8a4b8bb-ecf4-fb27-a618-f41721552766",
   *       "creatorDataItemId": "e89aebb9-70a3-8fe1-32bb-1fbd0c725f14",
   *       "lastUpdatedTimestamp": "2020-02-13T21:19:22.123Z"
   *     },
   *     {
   *       "createdTimestamp": "2020-02-18T19:53:33.123Z",
   *       "aliasId": "1856dbfc-7a66-ee5a-bf8d-51dbfe1906f6",
   *       "creatorDataItemId": null,
   *       "lastUpdatedTimestamp": "2020-02-18T19:53:33.123Z"
   *     }
   *   ]
   * }
   * ```
   * @param options The options parameters.
   */
  list(
    options?: AliasListOptionalParams
  ): PagedAsyncIterableIterator<AliasListItem>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Creator makes it possible to develop applications based on your private indoor map data using Azure
   * Maps API and SDK. [This](https://docs.microsoft.com/azure/azure-maps/creator-indoor-maps) article
   * introduces concepts and tools that apply to Azure Maps Creator.
   *
   * This API allows the caller to create an alias. You can also assign the alias during the create
   * request. An alias can reference an ID generated by a creator service, but cannot reference another
   * alias ID.
   *
   * ### Submit Create Request
   *
   * To create your alias, you will use a `POST` request. If you would like to assign the alias during
   * the creation, you will pass the `resourceId` query parameter.
   *
   * ### Create Alias Response
   *
   * The Create API returns a HTTP `201 Created` response with the alias resource in the body.
   *
   * A sample response from creating an alias:
   *
   * ```json
   * {
   *   "createdTimestamp": "2020-02-13T21:19:11.123Z",
   *   "aliasId": "a8a4b8bb-ecf4-fb27-a618-f41721552766",
   *   "creatorDataItemId": "e89aebb9-70a3-8fe1-32bb-1fbd0c725f14",
   *   "lastUpdatedTimestamp": "2020-02-13T21:19:22.123Z"
   * }
   * ```
   * @param options The options parameters.
   */
  create(options?: AliasCreateOptionalParams): Promise<AliasCreateResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Creator makes it possible to develop applications based on your private indoor map data using Azure
   * Maps API and SDK. [This](https://docs.microsoft.com/azure/azure-maps/creator-indoor-maps) article
   * introduces concepts and tools that apply to Azure Maps Creator.
   *
   * This API allows the caller to assign an alias to reference a resource.
   *
   * ### Submit Assign Request
   *
   * To assign your alias to a resource, you will use a `PUT` request with the `aliasId` in the path and
   * the `creatorDataItemId` passed as a query parameter.
   *
   * ### Assign Alias Response
   *
   * The Assign API returns a HTTP `200 OK` response with the updated alias resource in the body, if the
   * alias was assigned successfully. A sample of the assign response is
   *
   * ```json
   * {
   *   "createdTimestamp": "2020-02-13T21:19:11.123Z",
   *   "aliasId": "a8a4b8bb-ecf4-fb27-a618-f41721552766",
   *   "creatorDataItemId": "e89aebb9-70a3-8fe1-32bb-1fbd0c725f14",
   *   "lastUpdatedTimestamp": "2020-02-13T21:19:22.123Z"
   * }
   * ```
   * @param aliasId The unique id that references an existing alias.
   * @param creatorDataItemId The unique id that references a creator data item to be aliased.
   * @param options The options parameters.
   */
  assign(
    aliasId: string,
    creatorDataItemId: string,
    options?: AliasAssignOptionalParams
  ): Promise<AliasAssignResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Creator makes it possible to develop applications based on your private indoor map data using Azure
   * Maps API and SDK. [This](https://docs.microsoft.com/azure/azure-maps/creator-indoor-maps) article
   * introduces concepts and tools that apply to Azure Maps Creator.
   *
   * This API allows the caller to delete a previously created alias. You can also use this API to delete
   * old/unused aliases to create space for new content.This API does not delete the references resource,
   * only the alias referencing the resource.
   *
   * ### Submit Delete Request
   *
   * To delete your alias you will issue a `DELETE` request where the path will contain the `aliasId` of
   * the alias to delete.
   *
   * ### Delete Alias Response
   *
   * The Delete API returns a HTTP `204 No Content` response with an empty body, if the alias was deleted
   * successfully.
   * @param aliasId The unique id that references an existing alias.
   * @param options The options parameters.
   */
  delete(aliasId: string, options?: AliasDeleteOptionalParams): Promise<void>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Creator makes it possible to develop applications based on your private indoor map data using Azure
   * Maps API and SDK. [This](https://docs.microsoft.com/azure/azure-maps/creator-indoor-maps) article
   * introduces concepts and tools that apply to Azure Maps Creator.
   *
   * This API allows the caller to fetch the details of a previously created alias.
   *
   * ### Submit Get Details Request
   *
   * To get the details of your alias, you will issue a `GET` request with the `aliasId` in the path.
   *
   * ### Get Details Response
   *
   * The Get Details API returns the previously created alias in `json` format. The response contains the
   * following details for the alias resource:
   *   > createdTimestamp - The timestamp that the alias was created.
   *   > aliasId - The id for the alias.
   *   > creatorDataItemId - The id for the creator data item that this alias references (could be null
   * if the alias has not been assigned).
   *   > lastUpdatedTimestamp - The last time the alias was assigned to a resource.
   *
   * Here's a sample response:
   * ```json
   * {
   *   "createdTimestamp": "2020-02-13T21:19:11.123Z",
   *   "aliasId": "a8a4b8bb-ecf4-fb27-a618-f41721552766",
   *   "creatorDataItemId": "e89aebb9-70a3-8fe1-32bb-1fbd0c725f14",
   *   "lastUpdatedTimestamp": "2020-02-13T21:19:22.123Z"
   * }
   * ```
   * @param aliasId The unique id that references an existing alias.
   * @param options The options parameters.
   */
  getDetails(
    aliasId: string,
    options?: AliasGetDetailsOptionalParams
  ): Promise<AliasGetDetailsResponse>;
}
