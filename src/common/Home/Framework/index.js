/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import ThemeImage from '../components/ThemeImage';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Framework() {
  return (
    <Section>
      <SectionTitle
        title="工具类库"
        description={
          <>
            duxapp编写了很多常用工具类库，能帮助你快速开始你的项目
          </>
        }
      />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>路由管理</h4>
            <p className={styles.cardDescription}>
              路由系统对原生的路由进行了封装，当你使用duxapp时，需要使用封装过的路由 <br />
              相对于原生路由进行了一下封装 <br />
              - 路由拦截 <br />
              - 传递任何类型参数到页面 <br />
              - 路由协议解析 <br />
              - 返回传参 <br />
              - 封装返回主页方法 <br />
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
              请求上传
            </h4>
            <p className={styles.cardDescription}>
              程序对请求上传进行了封装，增加了更丰富的功能，封装实现了下面的特性 <br />
              - 请求拦截器（中间件） <br />
              - 错误提醒 <br />
              - 加载中 <br />
              - 防止过快请求 <br />
              - 请求hook封装 <br />
              - hook缓存 <br />
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>UI库</h4>
            <p className={styles.cardDescription}>
              使用免费开放的UI库，提升编写效率，保证多端一致性，UI组件库提供了丰富的组件 <br />
              - 基础组件库 <br />
              - 布局类组件库 <br />
              - 导航类组件库 <br />
              - 展示类组件库 <br />
              - 操作反馈库 <br />
              - 高级组件 <br />
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Framework;
