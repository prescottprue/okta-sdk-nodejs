/*!
 * Copyright (c) 2017-2020, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');


/**
 * @class OAuth2Token
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } clientId
 * @property { dateTime } created
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { string } issuer
 * @property { dateTime } lastUpdated
 * @property { array } scopes
 * @property { string } status
 * @property { string } userId
 */
class OAuth2Token extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

}

module.exports = OAuth2Token;