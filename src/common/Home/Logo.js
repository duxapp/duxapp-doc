/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import logo from '../../../static/img/logo.jpg'

function Logo() {
  return (
    <img src={logo} width={112} style={{ borderRadius: '24px' }} />
  );
}

export default Logo;
