/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

const FlowImage = (props) => (
  <svg
    aria-roledescription="flowchart-v2"
    role="graphics-document document"
    viewBox="0 0 542.7578125 382"
    style={{
      maxWidth: "100%",
    }}
    className="flowchart"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    id="graph-div"
    height="100%"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <style>
      {
        '#graph-div{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#graph-div .error-icon{fill:#a44141;}#graph-div .error-text{fill:#ddd;stroke:#ddd;}#graph-div .edge-thickness-normal{stroke-width:1px;}#graph-div .edge-thickness-thick{stroke-width:3.5px;}#graph-div .edge-pattern-solid{stroke-dasharray:0;}#graph-div .edge-thickness-invisible{stroke-width:0;fill:none;}#graph-div .edge-pattern-dashed{stroke-dasharray:3;}#graph-div .edge-pattern-dotted{stroke-dasharray:2;}#graph-div .marker{fill:lightgrey;stroke:lightgrey;}#graph-div .marker.cross{stroke:lightgrey;}#graph-div svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#graph-div p{margin:0;}#graph-div .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#ccc;}#graph-div .cluster-label text{fill:#F9FFFE;}#graph-div .cluster-label span{color:#F9FFFE;}#graph-div .cluster-label span p{background-color:transparent;}#graph-div .label text,#graph-div span{fill:#ccc;color:#ccc;}#graph-div .node rect,#graph-div .node circle,#graph-div .node ellipse,#graph-div .node polygon,#graph-div .node path{fill:#1f2020;stroke:#ccc;stroke-width:1px;}#graph-div .rough-node .label text,#graph-div .node .label text{text-anchor:middle;}#graph-div .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#graph-div .node .label{text-align:center;}#graph-div .node.clickable{cursor:pointer;}#graph-div .arrowheadPath{fill:lightgrey;}#graph-div .edgePath .path{stroke:lightgrey;stroke-width:2.0px;}#graph-div .flowchart-link{stroke:lightgrey;fill:none;}#graph-div .edgeLabel{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#graph-div .edgeLabel p{background-color:hsl(0, 0%, 34.4117647059%);}#graph-div .edgeLabel rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#graph-div .labelBkg{background-color:rgba(87.75, 87.75, 87.75, 0.5);}#graph-div .cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}#graph-div .cluster text{fill:#F9FFFE;}#graph-div .cluster span{color:#F9FFFE;}#graph-div div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(20, 1.5873015873%, 12.3529411765%);border:1px solid rgba(255, 255, 255, 0.25);border-radius:2px;pointer-events:none;z-index:100;}#graph-div .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#ccc;}#graph-div :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}'
      }
    </style>
    <g>
      <marker
        orient="auto"
        markerHeight={8}
        markerWidth={8}
        markerUnits="userSpaceOnUse"
        refY={5}
        refX={5}
        viewBox="0 0 10 10"
        className="marker flowchart-v2"
        id="graph-div_flowchart-v2-pointEnd"
      >
        <path
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
          className="arrowMarkerPath"
          d="M 0 0 L 10 5 L 0 10 z"
        />
      </marker>
      <marker
        orient="auto"
        markerHeight={8}
        markerWidth={8}
        markerUnits="userSpaceOnUse"
        refY={5}
        refX={4.5}
        viewBox="0 0 10 10"
        className="marker flowchart-v2"
        id="graph-div_flowchart-v2-pointStart"
      >
        <path
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
          className="arrowMarkerPath"
          d="M 0 5 L 10 10 L 10 0 z"
        />
      </marker>
      <marker
        orient="auto"
        markerHeight={11}
        markerWidth={11}
        markerUnits="userSpaceOnUse"
        refY={5}
        refX={11}
        viewBox="0 0 10 10"
        className="marker flowchart-v2"
        id="graph-div_flowchart-v2-circleEnd"
      >
        <circle
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
          className="arrowMarkerPath"
          r={5}
          cy={5}
          cx={5}
        />
      </marker>
      <marker
        orient="auto"
        markerHeight={11}
        markerWidth={11}
        markerUnits="userSpaceOnUse"
        refY={5}
        refX={-1}
        viewBox="0 0 10 10"
        className="marker flowchart-v2"
        id="graph-div_flowchart-v2-circleStart"
      >
        <circle
          style={{
            strokeWidth: 1,
            strokeDasharray: "1, 0",
          }}
          className="arrowMarkerPath"
          r={5}
          cy={5}
          cx={5}
        />
      </marker>
      <marker
        orient="auto"
        markerHeight={11}
        markerWidth={11}
        markerUnits="userSpaceOnUse"
        refY={5.2}
        refX={12}
        viewBox="0 0 11 11"
        className="marker cross flowchart-v2"
        id="graph-div_flowchart-v2-crossEnd"
      >
        <path
          style={{
            strokeWidth: 2,
            strokeDasharray: "1, 0",
          }}
          className="arrowMarkerPath"
          d="M 1,1 l 9,9 M 10,1 l -9,9"
        />
      </marker>
      <marker
        orient="auto"
        markerHeight={11}
        markerWidth={11}
        markerUnits="userSpaceOnUse"
        refY={5.2}
        refX={-1}
        viewBox="0 0 11 11"
        className="marker cross flowchart-v2"
        id="graph-div_flowchart-v2-crossStart"
      >
        <path
          style={{
            strokeWidth: 2,
            strokeDasharray: "1, 0",
          }}
          className="arrowMarkerPath"
          d="M 1,1 l 9,9 M 10,1 l -9,9"
        />
      </marker>
      <g className="root">
        <g className="clusters" />
        <g className="edgePaths">
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_A_B_0"
            d="M155.555,55.456L135.044,60.713C114.534,65.971,73.513,76.485,53.003,90.409C32.492,104.333,32.492,121.667,32.492,139C32.492,156.333,32.492,173.667,32.893,184.417C33.293,195.167,34.095,199.333,34.77,202.845C35.446,206.357,35.995,209.215,36.27,210.643L36.544,212.072"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_A_C_1"
            d="M169.839,62L159.728,66.167C149.617,70.333,129.394,78.667,119.283,84.917C109.172,91.167,109.172,95.333,109.172,98.833C109.172,102.333,109.172,105.167,109.172,106.583L109.172,108"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_A_D_2"
            d="M235.359,62L235.359,66.167C235.359,70.333,235.359,78.667,235.359,84.917C235.359,91.167,235.359,95.333,235.359,98.833C235.359,102.333,235.359,105.167,235.359,106.583L235.359,108"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_A_E_3"
            d="M300.746,62L310.836,66.167C320.927,70.333,341.108,78.667,351.199,84.917C361.289,91.167,361.289,95.333,361.289,98.833C361.289,102.333,361.289,105.167,361.289,106.583L361.289,108"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_A_F_4"
            d="M315.164,51.061L344.926,57.051C374.688,63.041,434.211,75.02,463.973,83.094C493.734,91.167,493.734,95.333,493.734,98.833C493.734,102.333,493.734,105.167,493.734,106.583L493.734,108"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_C_B_5"
            d="M94.457,166L92.186,170.167C89.915,174.333,85.374,182.667,81.567,188.917C77.76,195.167,74.688,199.333,72.011,202.963C69.335,206.593,67.054,209.687,65.914,211.234L64.773,212.78"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_C_H_6"
            d="M136.74,166L140.994,170.167C145.248,174.333,153.757,182.667,163.462,188.917C173.168,195.167,184.07,199.333,194.349,203.262C204.629,207.191,214.285,210.881,219.114,212.727L223.942,214.572"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_H_G_7"
            d="M298.324,270L298.324,274.167C298.324,278.333,298.324,286.667,293.284,293.417C288.244,300.168,278.164,305.335,268.677,310.199C259.19,315.062,250.297,319.621,245.85,321.901L241.403,324.181"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_B_G_8"
            d="M42.492,270L42.492,274.167C42.492,278.333,42.492,286.667,51.946,294.017C61.4,301.368,80.307,307.736,98.583,313.891C116.859,320.046,134.503,325.988,143.325,328.959L152.147,331.931"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_D_H_9"
            d="M235.359,166L235.359,170.167C235.359,174.333,235.359,182.667,237.882,188.917C240.405,195.167,245.45,199.333,249.981,203.075C254.512,206.818,258.53,210.135,260.538,211.794L262.547,213.453"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_E_H_10"
            d="M361.289,166L361.289,170.167C361.289,174.333,361.289,182.667,358.766,188.917C356.244,195.167,351.199,199.333,346.667,203.075C342.136,206.818,338.119,210.135,336.11,211.794L334.102,213.453"
          />
          <path
            markerEnd="url(#graph-div_flowchart-v2-pointEnd)"
            style={{}}
            className="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"
            id="L_F_H_11"
            d="M493.734,166L493.734,170.167C493.734,174.333,493.734,182.667,484.453,189.303C475.171,195.94,456.608,200.88,438.689,205.648C420.77,210.416,403.496,215.013,394.858,217.312L386.221,219.61"
          />
        </g>
        <g className="edgeLabels">
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
          <g className="edgeLabel">
            <g transform="translate(0, 0)" className="label">
              <foreignObject height={0} width={0}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  className="labelBkg"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="edgeLabel" />
                </div>
              </foreignObject>
            </g>
          </g>
        </g>
        <g className="nodes">
          <g
            transform="translate(235.359375, 35)"
            id="flowchart-A-2112"
            className="node default"
          >
            <rect
              height={54}
              width={159.609375}
              y={-27}
              x={-79.8046875}
              data-et="node"
              data-id="abc"
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-49.8046875, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={99.609375}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"duxuiExample"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(42.4921875, 243)"
            id="flowchart-B-2113"
            className="node default"
          >
            <rect
              height={54}
              width={68.984375}
              y={-27}
              x={-34.4921875}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-19.4921875, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={38.984375}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"duxui"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(109.171875, 139)"
            id="flowchart-C-2115"
            className="node default"
          >
            <rect
              height={54}
              width={83.359375}
              y={-27}
              x={-41.6796875}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-26.6796875, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={53.359375}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"duxcms"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(235.359375, 139)"
            id="flowchart-D-2117"
            className="node default"
          >
            <rect
              height={54}
              width={69.015625}
              y={-27}
              x={-34.5078125}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-19.5078125, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={39.015625}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"amap"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(361.2890625, 139)"
            id="flowchart-E-2119"
            className="node default"
          >
            <rect
              height={54}
              width={82.84375}
              y={-27}
              x={-41.421875}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-26.421875, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={52.84375}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"echarts"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(493.734375, 139)"
            id="flowchart-F-2121"
            className="node default"
          >
            <rect
              height={54}
              width={82.046875}
              y={-27}
              x={-41.0234375}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-26.0234375, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={52.046875}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"wechat"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(298.32421875, 243)"
            id="flowchart-H-2125"
            className="node default"
          >
            <rect
              height={54}
              width={168.0625}
              y={-27}
              x={-84.03125}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-69.03125, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={138.0625}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"duxappReactNative"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
          <g
            transform="translate(196.890625, 347)"
            id="flowchart-G-2127"
            className="node default"
          >
            <rect
              height={54}
              width={81.90625}
              y={-27}
              x={-40.953125}
              ry={5}
              data-et="node"
              data-id="abc"
              rx={5}
              style={{}}
              className="basic label-container"
            />
            <g
              transform="translate(-25.953125, -12)"
              style={{}}
              className="label"
            >
              <rect />
              <foreignObject height={24} width={51.90625}>
                <div
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    maxWidth: 200,
                    textAlign: "center",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <span className="nodeLabel">
                    <p>{"duxapp"}</p>
                  </span>
                </div>
              </foreignObject>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default FlowImage;
