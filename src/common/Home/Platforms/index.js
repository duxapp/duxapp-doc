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

import FlowImage from './FlowImage';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <SectionTitle
        title="移动端模块化开发框架"
        description="多模块代码复用，提高编写效率，通过应用商店安装大量成熟模块，使用公开的UI库模块，帮你快速完成业务"
      />
      <div className={styles.platformsContainer}>
        <div className={styles.featureContainer}>
          <div className={styles.codeEditor}>
            <div className={styles.codeEditorContent}>
              <FlowImage />
              {/* <div>
                <div>创建项目 </div>
                <code className={styles.codeEditorContentCode}>npx duxapp-cli create myProject</code>
              </div>
              <div>
                <div>安装模块 </div>
                <code className={styles.codeEditorContentCode}>yarn duxapp app add duxui</code>
              </div>
              <div>
                <div>发布模块 </div>
                <code className={styles.codeEditorContentCode}>yarn duxapp app publish myApp</code>
              </div>
              <div>
                <div>创建模块 </div>
                <code className={styles.codeEditorContentCode}>yarn duxapp app create myApp</code>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Platforms;
