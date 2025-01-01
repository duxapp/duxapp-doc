/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  course: [
    { type: 'autogenerated', dirName: 'course' }
  ],
  duxapp: [
    { type: 'autogenerated', dirName: 'duxapp' },
  ],
  duxui: [
    { type: 'autogenerated', dirName: 'duxui' },
  ],
  app: [
    { type: 'autogenerated', dirName: 'app' },
  ],
  update: [
    { type: 'doc', id: 'update/start' },
    { type: 'doc', id: 'update/2025-01-01' },
    { type: 'doc', id: 'update/2024-12-18' },
    { type: 'doc', id: 'update/2024-12-11' },
    { type: 'doc', id: 'update/2024-12-09' },
    { type: 'doc', id: 'update/2024-12-06' },
    { type: 'doc', id: 'update/2024-12-04' },
    { type: 'doc', id: 'update/2024-12-02' },
    { type: 'doc', id: 'update/2024-11-29' },
    { type: 'doc', id: 'update/2024-11-22' },
    { type: 'doc', id: 'update/2024-11-18' },
    { type: 'doc', id: 'update/2024-11-08' },
    { type: 'doc', id: 'update/2024-11-06' }
  ],
  contact: [
    { type: 'autogenerated', dirName: 'contact' },
  ]
};

module.exports = sidebars;
