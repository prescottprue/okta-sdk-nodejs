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
import { CustomAttributeValue } from '../../custom-attributes';
export declare class UserProfile {
  'city'?: string;
  'costCenter'?: string;
  'countryCode'?: string;
  'department'?: string;
  'displayName'?: string;
  'division'?: string;
  'email'?: string;
  'employeeNumber'?: string;
  'firstName'?: string;
  'honorificPrefix'?: string;
  'honorificSuffix'?: string;
  'lastName'?: string;
  /**
    * The language specified as an [IETF BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc5646).
    */
  'locale'?: string;
  'login'?: string;
  'manager'?: string;
  'managerId'?: string;
  'middleName'?: string;
  'mobilePhone'?: string;
  'nickName'?: string;
  'organization'?: string;
  'postalAddress'?: string;
  'preferredLanguage'?: string;
  'primaryPhone'?: string;
  'profileUrl'?: string;
  'secondEmail'?: string;
  'state'?: string;
  'streetAddress'?: string;
  'timezone'?: string;
  'title'?: string;
  'userType'?: string;
  'zipCode'?: string;
    [key: string]: CustomAttributeValue | CustomAttributeValue[] | undefined;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static readonly isExtensible = true;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}