/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Logo from '../Logo';

import styles from './styles.module.css';

function CallToAction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.title}>欢迎来到duxapp</h1>
        <a href="/docs/course/started/intro" className={styles.primaryButton}>
          马上开始
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
