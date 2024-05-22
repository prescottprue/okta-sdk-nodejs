/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


'use strict';
/**
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 4.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.PossessionConstraint = void 0;
class PossessionConstraint {
  constructor() {
  }
  static getAttributeTypeMap() {
    return PossessionConstraint.attributeTypeMap;
  }
}
exports.PossessionConstraint = PossessionConstraint;
PossessionConstraint.discriminator = undefined;
PossessionConstraint.attributeTypeMap = [
  {
    'name': 'methods',
    'baseName': 'methods',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'reauthenticateIn',
    'baseName': 'reauthenticateIn',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'types',
    'baseName': 'types',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'deviceBound',
    'baseName': 'deviceBound',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'hardwareProtection',
    'baseName': 'hardwareProtection',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'phishingResistant',
    'baseName': 'phishingResistant',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'userPresence',
    'baseName': 'userPresence',
    'type': 'string',
    'format': ''
  }
];