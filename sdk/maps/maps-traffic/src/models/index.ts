/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** This object is returned from a successful Traffic Flow Segment call */
export interface TrafficFlowSegmentResult {
  /**
   * Flow Segment Data property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly flowSegmentData?: TrafficFlowSegmentResultFlowSegmentData;
}

/** Flow Segment Data property */
export interface TrafficFlowSegmentResultFlowSegmentData {
  /**
   * Functional Road Class. This indicates the road type:
   *   0: Motorway, freeway or other major road.
   *   1: Major road, less important than a motorway.
   *   2: Other major road.
   *   3: Secondary road.
   *   4: Local connecting road.
   *   5: Local road of high importance.
   *   6: Local road.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly frc?: string;
  /**
   * The current average speed at the selected point, in the units requested. This is calculated from the currentTravelTime and the length of the selected segment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentSpeed?: number;
  /**
   * The free flow speed expected under ideal conditions, expressed in the units requested. This is related to the freeFlowTravelTime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly freeFlowSpeed?: number;
  /**
   * Current travel time in seconds based on fused real-time measurements between the defined locations in the specified direction.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentTravelTime?: number;
  /**
   * The travel time in seconds which would be expected under ideal free flow conditions.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly freeFlowTravelTime?: number;
  /**
   * The confidence is a measure of the quality of the provided travel time and speed. A value of 1 means full confidence, that the response contains the highest quality data.  Lower values indicate the degree that the response may vary from the actual conditions on the road. Any value greater than 0.6 means the information was based on real-time probe input. A value of 0.5 means the reported speed is based on historical info.   A value between 0.5 and 0.6 has a calculated weighted average between historical and live speeds.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly confidence?: number;
  /** Includes the coordinates describing the shape of the segment. Coordinates are shifted from the road depending on the zoom level to support high quality visualization in every scale. */
  coordinates?: TrafficFlowSegmentResultFlowSegmentDataCoordinates;
  /**
   * This indicates the software version that generated the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * OpenLR code for segment
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly openlr?: number;
}

/** Includes the coordinates describing the shape of the segment. Coordinates are shifted from the road depending on the zoom level to support high quality visualization in every scale. */
export interface TrafficFlowSegmentResultFlowSegmentDataCoordinates {
  /**
   * Coordinate array
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly coordinate?: CoordinatesPair[];
}

/** A location represented as a latitude and longitude. */
export interface CoordinatesPair {
  /** Latitude property */
  latitude?: number;
  /** Longitude property */
  longitude?: number;
}

/** This object is returned from a successful Traffic incident Detail call */
export interface TrafficIncidentDetailResult {
  /**
   * Main response element
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tm?: TrafficIncidentDetailResultTm;
}

/** Main response element */
export interface TrafficIncidentDetailResultTm {
  /**
   * ID of the traffic incident
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * A single traffic incident, or a cluster of traffic incidents
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly poi?: TrafficIncidentPoi[];
}

export interface TrafficIncidentPoi {
  /**
   * ID of the traffic incident
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The point where an icon of the cluster or raw incident should be drawn, expressed in the requested projection. This is affected by traffic style, zoom level and road type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly p?: TrafficIncidentPoiP;
  /**
   * The icon category associated with this incident. Values are numbers in the range 0-13, with the following meanings -- 0: Unknown, 1: Accident, 2: Fog, 3: Dangerous Conditions, 4: Rain, 5: Ice, 6: Jam, 7: Lane Closed, 8: Road Closed, 9: Road Works, 10: Wind, 11: Flooding, 12: Detour, 13: Cluster
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ic?: number;
  /**
   * The magnitude of delay associated with incident. These values correspond to incident colors in the traffic tiles
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ty?: number;
  /**
   * Bottom left coordinate of the cluster in the projection of the request
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly cbl?: TrafficIncidentPoiCbl;
  /**
   * Top right coordinate of the cluster in the projection of the request
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ctr?: TrafficIncidentPoiCtr;
  /**
   * Cluster size: the number of incidents in the cluster
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly cs?: number;
  /**
   * Length of the incident in meters
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly l?: number;
  /**
   * The road number(s) affected by the incident. Multiple road numbers will delimited by slashes
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly r?: string;
  /**
   * Delay caused by the incident in seconds (except in road closures)
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dl?: number;
  /**
   * To: the name of the intersection or location where the traffic due to the incident ends
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly t?: string;
  /**
   * From: the name of the intersection or location where the traffic due to the incident starts
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly f?: string;
  /**
   * Description of the incident in the language requested
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly d?: string;
  /**
   * Cause of the incident, where available, in the language requested
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly c?: string;
}

/** The point where an icon of the cluster or raw incident should be drawn, expressed in the requested projection. This is affected by traffic style, zoom level and road type */
export interface TrafficIncidentPoiP {
  /**
   * x coordinate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly x?: number;
  /**
   * y coordinate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly y?: number;
}

/** Bottom left coordinate of the cluster in the projection of the request */
export interface TrafficIncidentPoiCbl {
  /**
   * x coordinate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly x?: number;
  /**
   * y coordinate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly y?: number;
}

/** Top right coordinate of the cluster in the projection of the request */
export interface TrafficIncidentPoiCtr {
  /**
   * x coordinate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly x?: number;
  /**
   * y coordinate
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly y?: number;
}

/** This object is returned from a successful Traffic Incident Viewport call */
export interface TrafficIncidentViewportResult {
  /**
   * Viewport Response object
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly viewpResp?: TrafficIncidentViewportResultViewpResp;
}

/** Viewport Response object */
export interface TrafficIncidentViewportResultViewpResp {
  /**
   * Traffic State array
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly trafficState?: TrafficIncidentViewportResultViewpRespTrafficState;
  /**
   * Copyright Ids property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly copyrightIds?: string;
  /**
   * @Version property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * @maps property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maps?: string;
}

/** Traffic State array */
export interface TrafficIncidentViewportResultViewpRespTrafficState {
  /**
   * @Traffic Age property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly trafficAge?: number;
  /**
   * @Traffic Model Id property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly trafficModelId?: string;
}

/** Defines headers for Traffic_getTrafficFlowTile operation. */
export interface TrafficGetTrafficFlowTileHeaders {
  /** The content-type for the response. */
  contentType?: string;
}

/** Defines headers for Traffic_getTrafficIncidentTile operation. */
export interface TrafficGetTrafficIncidentTileHeaders {
  /** The content-type for the response. */
  contentType?: string;
}

/** Known values of {@link Geography} that the service accepts. */
export const enum KnownGeography {
  Us = "us",
  Eu = "eu"
}

/**
 * Defines values for Geography. \
 * {@link KnownGeography} can be used interchangeably with Geography,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **us** \
 * **eu**
 */
export type Geography = string;

/** Known values of {@link TileFormat} that the service accepts. */
export const enum KnownTileFormat {
  /** An image in the png format. Supports zoom levels 0 through 18. */
  Png = "png",
  /** Vector graphic in the pbf format. Supports zoom levels 0 through 22. */
  Pbf = "pbf"
}

/**
 * Defines values for TileFormat. \
 * {@link KnownTileFormat} can be used interchangeably with TileFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **png**: An image in the png format. Supports zoom levels 0 through 18. \
 * **pbf**: Vector graphic in the pbf format. Supports zoom levels 0 through 22.
 */
export type TileFormat = string;

/** Known values of {@link TrafficFlowTileStyle} that the service accepts. */
export const enum KnownTrafficFlowTileStyle {
  /** Colors will reflect the absolute speed measured. Absolute speed is the capability to access the full speed. */
  Absolute = "absolute",
  /** This is the speed relative to free-flow, highlighting areas of congestion visualizing the traffic flow. Free-flow refers to conditions where there is no congestion and traffic can follow the speed limits. The most used option to visualize traffic flow on a map. */
  Relative = "relative",
  /** Displays relative colors only where they are different from the free-flow speeds. This option will only highlights areas of congestion. */
  RelativeDelay = "relative-delay",
  /** Displays relative colors but a larger difference from freeflow is required for segments to change the color. This mode only valid when format is png. */
  ReducedSensitivity = "reduced-sensitivity"
}

/**
 * Defines values for TrafficFlowTileStyle. \
 * {@link KnownTrafficFlowTileStyle} can be used interchangeably with TrafficFlowTileStyle,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **absolute**: Colors will reflect the absolute speed measured. Absolute speed is the capability to access the full speed. \
 * **relative**: This is the speed relative to free-flow, highlighting areas of congestion visualizing the traffic flow. Free-flow refers to conditions where there is no congestion and traffic can follow the speed limits. The most used option to visualize traffic flow on a map. \
 * **relative-delay**: Displays relative colors only where they are different from the free-flow speeds. This option will only highlights areas of congestion. \
 * **reduced-sensitivity**: Displays relative colors but a larger difference from freeflow is required for segments to change the color. This mode only valid when format is png.
 */
export type TrafficFlowTileStyle = string;

/** Known values of {@link TextFormat} that the service accepts. */
export const enum KnownTextFormat {
  /** [The JavaScript Object Notation Data Interchange Format](https://tools.ietf.org/html/rfc8259) */
  Json = "json",
  /** [The Extensible Markup Language](https://www.w3.org/TR/xml/) */
  Xml = "xml"
}

/**
 * Defines values for TextFormat. \
 * {@link KnownTextFormat} can be used interchangeably with TextFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **json**: [The JavaScript Object Notation Data Interchange Format](https:\/\/tools.ietf.org\/html\/rfc8259) \
 * **xml**: [The Extensible Markup Language](https:\/\/www.w3.org\/TR\/xml\/)
 */
export type TextFormat = string;

/** Known values of {@link TrafficFlowSegmentStyle} that the service accepts. */
export const enum KnownTrafficFlowSegmentStyle {
  Absolute = "absolute",
  Relative = "relative",
  RelativeDelay = "relative-delay"
}

/**
 * Defines values for TrafficFlowSegmentStyle. \
 * {@link KnownTrafficFlowSegmentStyle} can be used interchangeably with TrafficFlowSegmentStyle,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **absolute** \
 * **relative** \
 * **relative-delay**
 */
export type TrafficFlowSegmentStyle = string;

/** Known values of {@link SpeedUnit} that the service accepts. */
export const enum KnownSpeedUnit {
  /** Kilometers Per Hour */
  Kmph = "KMPH",
  /** Miles Per Hour */
  MPH = "MPH"
}

/**
 * Defines values for SpeedUnit. \
 * {@link KnownSpeedUnit} can be used interchangeably with SpeedUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **KMPH**: Kilometers Per Hour \
 * **MPH**: Miles Per Hour
 */
export type SpeedUnit = string;

/** Known values of {@link TrafficIncidentTileStyle} that the service accepts. */
export const enum KnownTrafficIncidentTileStyle {
  /** Creates traffic lines with colored chevrons indicating severity. */
  S1 = "s1",
  /** Creates plain lines with certain degree of glow. */
  S2 = "s2",
  /** Creates plain lines with certain degree of glow. */
  S3 = "s3",
  /** Night style. */
  Night = "night"
}

/**
 * Defines values for TrafficIncidentTileStyle. \
 * {@link KnownTrafficIncidentTileStyle} can be used interchangeably with TrafficIncidentTileStyle,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **s1**: Creates traffic lines with colored chevrons indicating severity. \
 * **s2**: Creates plain lines with certain degree of glow. \
 * **s3**: Creates plain lines with certain degree of glow. \
 * **night**: Night style.
 */
export type TrafficIncidentTileStyle = string;

/** Known values of {@link TrafficIncidentDetailStyle} that the service accepts. */
export const enum KnownTrafficIncidentDetailStyle {
  /** Creates traffic lines with colored chevrons indicating severity. */
  S1 = "s1",
  /** Creates plain lines with certain degree of glow. */
  S2 = "s2",
  /** Creates plain lines with certain degree of glow. */
  S3 = "s3",
  /** Night style. */
  Night = "night"
}

/**
 * Defines values for TrafficIncidentDetailStyle. \
 * {@link KnownTrafficIncidentDetailStyle} can be used interchangeably with TrafficIncidentDetailStyle,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **s1**: Creates traffic lines with colored chevrons indicating severity. \
 * **s2**: Creates plain lines with certain degree of glow. \
 * **s3**: Creates plain lines with certain degree of glow. \
 * **night**: Night style.
 */
export type TrafficIncidentDetailStyle = string;

/** Known values of {@link ProjectionStandard} that the service accepts. */
export const enum KnownProjectionStandard {
  /** [EPSG900913](http://docs.openlayers.org/library/spherical_mercator.html) */
  Epsg900913 = "EPSG900913",
  /** [EPSG4326](http://spatialreference.org/ref/epsg/4326/) */
  Epsg4326 = "EPSG4326"
}

/**
 * Defines values for ProjectionStandard. \
 * {@link KnownProjectionStandard} can be used interchangeably with ProjectionStandard,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EPSG900913**: [EPSG900913](http:\/\/docs.openlayers.org\/library\/spherical_mercator.html) \
 * **EPSG4326**: [EPSG4326](http:\/\/spatialreference.org\/ref\/epsg\/4326\/)
 */
export type ProjectionStandard = string;

/** Known values of {@link IncidentGeometryType} that the service accepts. */
export const enum KnownIncidentGeometryType {
  /** Places incidents precisely on the road. */
  Original = "original",
  /** Moves the incident slightly (depending on zoom level) to indicate specific road lanes. */
  Shifted = "shifted"
}

/**
 * Defines values for IncidentGeometryType. \
 * {@link KnownIncidentGeometryType} can be used interchangeably with IncidentGeometryType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **original**: Places incidents precisely on the road. \
 * **shifted**: Moves the incident slightly (depending on zoom level) to indicate specific road lanes.
 */
export type IncidentGeometryType = string;

/** Known values of {@link GeographicResourceLocation} that the service accepts. */
export const enum KnownGeographicResourceLocation {
  /** Used to access an Azure Maps Creator resource in the United States */
  Us = "us",
  /** Used to access an Azure Maps Creator resource in Europe */
  Eu = "eu"
}

/**
 * Defines values for GeographicResourceLocation. \
 * {@link KnownGeographicResourceLocation} can be used interchangeably with GeographicResourceLocation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **us**: Used to access an Azure Maps Creator resource in the United States \
 * **eu**: Used to access an Azure Maps Creator resource in Europe
 */
export type GeographicResourceLocation = string;

/** Optional parameters. */
export interface TrafficGetTrafficFlowTileOptionalParams
  extends coreClient.OperationOptions {
  /** The value of the width of the line representing traffic. This value is a multiplier and the accepted values range from 1 - 20. The default value is 10. This parameter is not valid when format is pbf. */
  thickness?: number;
}

/** Contains response data for the getTrafficFlowTile operation. */
export type TrafficGetTrafficFlowTileResponse = TrafficGetTrafficFlowTileHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface TrafficGetTrafficFlowSegmentOptionalParams
  extends coreClient.OperationOptions {
  /** The value of the width of the line representing traffic. This value is a multiplier and the accepted values range from 1 - 20. The default value is 10. */
  thickness?: number;
  /** Unit of speed in KMPH or MPH */
  unit?: SpeedUnit;
  /** Boolean on whether the response should include OpenLR code */
  openLr?: boolean;
}

/** Contains response data for the getTrafficFlowSegment operation. */
export type TrafficGetTrafficFlowSegmentResponse = TrafficFlowSegmentResult;

/** Optional parameters. */
export interface TrafficGetTrafficIncidentTileOptionalParams
  extends coreClient.OperationOptions {
  /** Reference value for the state of traffic at a particular time, obtained from the Viewport API call, trafficModelId attribute in trafficState field. It is updated every minute, and is valid for two minutes before it times out. Use -1 to  get the most recent traffic information. Default: most recent traffic information. */
  trafficState?: string;
}

/** Contains response data for the getTrafficIncidentTile operation. */
export type TrafficGetTrafficIncidentTileResponse = TrafficGetTrafficIncidentTileHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface TrafficGetTrafficIncidentDetailOptionalParams
  extends coreClient.OperationOptions {
  /**
   * [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the output language. Supported languages are ar, ca, cs, da, de, el, en, en-GB, en-US, es, et, fi, fr, he, hu, id, in*, it, lt, lv, nb, nl, no, pl, pt, ro, ru, sk, sv, th, tr, zh.
   *
   * Please refer to [Supported Languages](https://docs.microsoft.com/en-us/azure/azure-maps/supported-languages) for details. When invalid language code is provided response is returned in English. When incident cause or description does not have translation, English description is returned.
   */
  language?: string;
  /** The projection used to specify the coordinates in the request and response. [EPSG900913](http://docs.openlayers.org/library/spherical_mercator.html) (default) or [EPSG4326](http://spatialreference.org/ref/epsg/4326/) */
  projection?: ProjectionStandard;
  /** The type of vector geometry added to incidents (returned in the <v> element of the response). */
  geometries?: IncidentGeometryType;
  /** Boolean to indicate whether to list all traffic incidents in a cluster separately */
  expandCluster?: boolean;
  /** Boolean on whether to return the original position of the incident (<op>) as well as the one shifted to the beginning of the traffic tube (<op>) */
  originalPosition?: boolean;
}

/** Contains response data for the getTrafficIncidentDetail operation. */
export type TrafficGetTrafficIncidentDetailResponse = TrafficIncidentDetailResult;

/** Optional parameters. */
export interface TrafficGetTrafficIncidentViewportOptionalParams
  extends coreClient.OperationOptions {
  /** Determines what copyright information to return. When true the copyright text is returned; when false only the copyright index is returned. */
  copyright?: boolean;
}

/** Contains response data for the getTrafficIncidentViewport operation. */
export type TrafficGetTrafficIncidentViewportResponse = TrafficIncidentViewportResult;

/** Optional parameters. */
export interface TrafficClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** This parameter specifies where the Azure Maps Creator resource is located.  Valid values are us and eu. */
  geography?: Geography;
  /** Specifies which account is intended for usage in conjunction with the Azure AD security model.  It represents a unique ID for the Azure Maps account and can be retrieved from the Azure Maps management  plane Account API. To use Azure AD security in Azure Maps see the following [articles](https://aka.ms/amauthdetails) for guidance. */
  xMsClientId?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
