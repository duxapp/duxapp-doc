/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import GitHubButton from 'react-github-btn';

import Logo from '../Logo';

import GridBackground from './GridBackground';
import FloorBackground from './FloorBackground';
import Apps from './Apps';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.socialLinks}>
        <GitHubButton
          href="https://github.com/duxapp"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star duxapp on GitHub">
          Star
        </GitHubButton>
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.gridBackground}>
          <GridBackground />
        </div>
        <div className={styles.floorBackground}>
          <FloorBackground />
          <Apps />
        </div>
      </div>
      <div className={styles.content}>
        <Logo />
        <h1 className={styles.title}>duxapp</h1>
        <h2 className={styles.subtitle}>基于Taro的模块化开发框架</h2>
        <div className={styles.buttonContainer}>
          <a href="/docs/course/started/intro" className={styles.primaryButton}>
            马上开始
          </a>
          <a href="/docs/course/rn/start" className={styles.secondaryButton}>
            开始 ReactNative
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
