/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import styles from './styles.module.css';

function Native() {
  return (
    <Section>
      <SectionTitle
        title="全平台支持"
        description={
          <>
            兼容微信小程序、ReactNative、鸿蒙 ArkUI、H5、支付宝小程序、抖音小程序、QQ小程序 <br />
            代码一次编写到处使用 <br /> <br />
            针对ReactNative端做了大量优化（项目配置化、打包所需文件自动创建、集成常用第三方库）
          </>
        }
      />
      {/* <ThemeImage
        lightSrc="/img/homepage/dissection.png"
        darkSrc="/img/homepage/dissection-dark.png"
        className={styles.flyoutIllustration}
        alt="A React Native UI pointing out native elements like Views, ScrollViews, and more"
      /> */}
    </Section>
  );
}

export default Native;
