let nock = require('nock');

module.exports.hash = "0acbbdcc06fe619851f0dc8fdf92388c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/metrics/189ff959-d9f4-45c7-a1e0-f87c9c7ca80f/enrichment/anomalyDetection/configurations')
  .reply(200, {"value":[{"anomalyDetectionConfigurationId":"e17f32d4-3ddf-4dc7-84ee-b4130c7e1777","name":"detection-config","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"smartDetectionCondition":{"sensitivity":100,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":100}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"10240200-6f3a-4783-b8e4-e7b34a3973d6","name":"my_detection_config","description":"anomaly detection config for metric","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"hardThresholdCondition":{"upperBound":100,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":20,"shiftPoint":10,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":5,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"e3ab2e89-d596-47aa-8ea8-5bd724f3b827","name":"new Name","description":"new description","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","hardThresholdCondition":{"upperBound":500,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":5}},"changeThresholdCondition":{"changePercentage":44,"shiftPoint":2,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":4,"minRatio":4}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Mumbai"}},"hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Kolkata","category":"Handmade"}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}}]},{"anomalyDetectionConfigurationId":"5d50b465-7565-4167-b33b-b92eb3199254","name":"test_detection_configuration1605051259010","description":"Detection configuration description","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"smartDetectionCondition":{"sensitivity":100,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":1}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"eb6ef516-9a09-4535-8ade-f64e26dfaefb","name":"js-detection-config-160521899279304202","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"1d270422-7ef8-4d3e-99e9-46b2bb1362fc","name":"js-detection-config-160521901418201870","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"64993d1d-02b8-4e0b-87d3-13095b187fe4","name":"js-detection-config-160521939989909966","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"dc0a5df5-c84e-4e9b-9065-f4017c4fbb97","name":"js-detection-config-160521942344906897","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"0491bfd7-b80a-4c2b-a32b-009e355a6cf5","name":"js-detection-config-160521950750209992","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"d803825a-12bf-4ae3-abcc-efd051509a1a","name":"js-detection-config-160521952580900483","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"26ece682-80a6-4415-89a2-05903dd9a640","name":"Default","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"smartDetectionCondition":{"sensitivity":100,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":100}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]}]}, [
  'Content-Length',
  '6887',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '43954cb4-0fd5-4851-a438-f55707fd1303',
  'x-envoy-upstream-service-time',
  '155',
  'apim-request-id',
  '43954cb4-0fd5-4851-a438-f55707fd1303',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 13 Nov 2020 22:02:40 GMT'
]);
