/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * Config file for running source maps smokehouse audits.
 */
module.exports = {
  extends: 'lighthouse:default',
  passes: [{
    gatherers: [
      'source-maps',
    ],
  }],
  // If you don't specifiy onlyCategories, onlyAudits, or skipAudits, all gatherers run.
  // Even source-maps, which is not used by any audits.
};
