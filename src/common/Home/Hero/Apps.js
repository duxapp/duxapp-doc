/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';

import duxapp from './images/duxapp.jpg'
import duxui from './images/duxui.jpg'
import app from './images/app.jpg'
import design from './images/design.jpg'
import wechat from './images/wechat.png'
import alipay from './images/alipay.png'
import unionpay from './images/unionpay.png'
import duxcms from './images/duxcms.jpg'
import codepush from './images/codepush.jpg'
import amap from './images/amap.png'
import bootsplash from './images/bootsplash.jpg'
import mall from './images/mall.png'

function Apps() {
  return (
    <div className={styles.apps}>
      {
        apps.map(item => <div key={item.name} className={styles.appsItem}>
          <img className={styles.appsItemIcon} src={item.icon} />
          <span className={styles.appsItemName}>{item.name}</span>
        </div>)
      }
    </div>
  );
}

const apps = [
  { name: '基础模块', icon: duxapp },
  { name: 'UI 库', icon: duxui },
  { name: 'RN支持', icon: app },
  { name: '设计器', icon: design },
  { name: '微信', icon: wechat },
  { name: '支付宝', icon: alipay },
  { name: '云闪付', icon: unionpay },
  { name: 'cms后端', icon: duxcms },
  { name: '热更新', icon: codepush },
  { name: '高德地图', icon: amap },
  { name: '启动屏', icon: bootsplash },
  { name: '商城', icon: mall }
]

export default Apps;
