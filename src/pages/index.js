import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import Home from '../common/Home';

export default function Index() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="基于Taro的模块化开发框架">
      {/* <HomepageHeader /> */}
      <Home />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
