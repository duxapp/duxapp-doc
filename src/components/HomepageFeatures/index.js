import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '模块化设计',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每个模块可独立运行，也可以依赖运行，使用命令行可快速创建新模块，还能添加、更新模块
      </>
    ),
  },
  {
    title: '全平台兼容',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        打造兼容小程序、H5、React Native组件库及API
      </>
    ),
  },
  {
    title: '丰富组件库',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        UI库级别的丰富组件库以及API，帮助你快速完成项目
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
