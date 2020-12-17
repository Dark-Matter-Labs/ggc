import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import './App.css';
import pelican from './icons/1_PELICAN.svg'
import merezzate from './icons/2_Merezzate+.svg'
import cleantech from './icons/3_CleanTech London.svg'
import resettle from './icons/4_RESETTLE.svg'
import urbanclimate from './icons/5_Urban Climate Action.svg'
import uccri from './icons/6_UCCRI.svg'
import celsius from './icons/7_CELSIUS 2.0.svg'
import geco from './icons/8_GECO.svg'
import landscape from './icons/9_LANDSCAPE METROPOLIS.svg'
import greenlight from './icons/10_Green Light District.svg'
import cityfinance from './icons/11_City Finance Lab.svg'
import sushi from './icons/12_SUSHI.svg'
import opensurface from './icons/13_OpenSurface.svg'
import puffin from './icons/14_PUFFIN.svg'
import recam from './icons/15_RECAM.svg'
import rise from './icons/16_RISE.svg'
import crisi from './icons/17_CRISI-ADAPT II.svg'
import madames from './icons/18_MADAMES-AX.svg';
import lebel from './icons/19_Label Bas Carbone.svg'
import forland from './icons/20_FORLAND.svg'
import sapience from './icons/21_SAPIENCE.svg'
import geofootprint from './icons/22_GeoFootprint.svg'
import foodsystems from './icons/23_Food System Targets.svg'
import c2land from './icons/24_C2Land.svg'
import blueblogs from './icons/25_Bluebloqs.svg'
import safeplaces from './icons/27_SAFEPLACES.svg'
import carbonfarm from './icons/29_Carbon Farming.svg'
import arise from './icons/30_ARISE.svg'
import phosphorus from './icons/31_Phosphorus recovery and reuse.svg';
import feedx from './icons/32_FEED X.svg'
import smartawood from './icons/34_Smartawood.svg'
import drive from './icons/35_DRIVE 2.svg'
import innow from './icons/36_InnoWEEE.svg'
import bPlas from './icons/37_B-PLAS DEMO.svg'
import circularK from './icons/38_The Circular Kitchen .svg'
import co2 from './icons/39_C02nsistent.svg'
import drygo from './icons/41_DryGro.svg'
import ff from './icons/42_Friendly Fruit.svg'
import aeneta from './icons/43_AENETA.svg'
import circularH  from './icons/45_Circular Housing.svg'
import thirtyfivef from './icons/46_The 35 Framework for Forests.svg'
import bsg from './icons/49_BSG.svg'
import zero from './icons/51_Zero Carbon Lab.svg'
import lions from './icons/53_LIONS2LIFE.svg'
import reco from './icons/54_RE.CO.svg'

const data = [
  {
    "id": "Sustainable Development Communities of Practice",
    "data": [
      {
        "x": 105.5,
        "y": 70,
        "icon": pelican,
        "name": "PELICAN",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Policy: Policy Framework"
      },
      {
        "x": 112.5,
        "y": 79.5,
        "icon": carbonfarm,
        "name": "Carbon Farming",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Micro Demonstration"
      }
    ]
  },
  {
    "id": "Institutional Tools for Sustainable Development",
    "data": [
      {
        "x": 54,
        "y": 44.5,
        "icon": cleantech,
        "name": "CleanTech London",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Supply and Demand platform"
      },
      {
        "x": 120,
        "y": 55,
        "icon": resettle,
        "name": "RESETTLE",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 103,
        "y": 53,
        "icon": puffin,
        "name": "PUFFIN",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 94,
        "y": 60,
        "icon": forland,
        "name": "FORLAND",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Policy: Voluntary Codes of conduct"
      },
      {
        "x": 96,
        "y": 40,
        "icon": sapience,
        "name": "SAPIENCE",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Market intervention: Data Infrastructure"
      },
      {
        "x": 69.5,
        "y": 39,
        "icon": geofootprint,
        "name": "GeoFootprint",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Data Infrastructure"
      },
      {
        "x": 86.5,
        "y": 45,
        "icon": foodsystems,
        "name": "Food System Targets",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Market intervention: Data Infrastructure"
      },
      {
        "x": 94,
        "y": 52,
        "icon": arise,
        "name": "ARISE",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 66,
        "y": 52,
        "icon": smartawood,
        "name": "Smartawood",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Risk Systems and Markets"
      },
      {
        "x": 62.5,
        "y": 45,
        "icon": innow,
        "name": "InnoWEEE",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Supply and Demand platform"
      },
      {
        "x": 72.5,
        "y": 46.5,
        "icon": ff,
        "name": "Friendly Fruit",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Supply and Demand platform"
      },
      {
        "x": 61.5,
        "y": 38,
        "icon": thirtyfivef,
        "name": "S5",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Data Infrastructure"
      },
      {
        "x": 128.5,
        "y": 58.5,
        "icon": reco,
        "name": "RE.CO",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 105.5,
        "y": 41,
        "icon": reco,
        "name": "Icebreaker One",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Market intervention: Data Infrastructure"
      }
    ]
  },
  {
    "id": "Territorial/Networked Carbonisation Communities",
    "data": [
      {
        "x": 28.5,
        "y": 100,
        "icon": urbanclimate,
        "name": "Urban Climate Action",
        "xCategory": "Pure Climate",
        "yCategory": "Civic awareness program"
      },
      {
        "x": 31,
        "y": 71.5,
        "icon": celsius,
        "name": "CELSIUS 2.0",
        "xCategory": "Pure Climate",
        "yCategory": "Policy: Policy Framework"
      },
      {
        "x": 29,
        "y": 84,
        "icon": drive,
        "name": "DRIVE 2",
        "xCategory": "Pure Climate",
        "yCategory": "Micro Demonstration"
      }
    ]
  },
  {
    "id": "Demonstrators, Scaling & Market-making",
    "data": [
      {
        "x": 49.5,
        "y": 77.5,
        "icon": blueblogs,
        "name": "Bluebloqs",
        "xCategory": "Climate + Environmental",
        "yCategory": "Micro Demonstration"
      }
    ]
  },
  {
    "id": "Holistic Place-based Demonstrations",
    "data": [
      {
        "x": 126.5,
        "y": 72,
        "icon": geco,
        "name": "GECO",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Micro Demonstration"
      },
      {
        "x": 137.5,
        "y": 84,
        "icon": landscape,
        "name": "LANDSCAPE METROPOLIS",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Micro Demonstration"
      },
      {
        "x": 130.5,
        "y": 85.5,
        "icon": greenlight,
        "name": "Green Light District",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Micro Demonstration"
      },
      {
        "x": 135,
        "y": 74,
        "icon": sushi,
        "name": "SUSHI",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Macro Demonstration"
      },
      {
        "x": 144.5,
        "y": 80,
        "icon": madames,
        "name": "MADAMES-AX",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Micro Demonstration"
      },
      {
        "x": 145,
        "y": 72.5,
        "icon": lebel,
        "name": "Label Bas Carbone",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Micro Demonstration"
      },
      {
        "x": 125.5,
        "y": 79,
        "icon": merezzate,
        "name": "Merezzate+,",
        "xCategory": "Climate + Environmental + Economic + Social",
        "yCategory": "Micro Demonstration"
      },
    ]
  },
  {
    "id": "Institution AI Tool for Decarbonisation",
    "data": [
      {
        "x": 7.5,
        "y": 48,
        "icon": uccri,
        "name": "UCCRI",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Risk Systems and Markets"
      },
      {
        "x": 27.5,
        "y": 56.5,
        "icon": cityfinance,
        "name": "City Finance Lab",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 12.5,
        "y": 57,
        "icon": recam,
        "name": "RECAM",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 8,
        "y": 38.5,
        "icon": rise,
        "name": "RISE",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Data Infrastructure"
      },
      {
        "x": 16.5,
        "y": 48,
        "icon": crisi,
        "name": "CRISI-ADAPT II",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Risk Systems and Markets"
      },
      {
        "x": 6.5,
        "y": 29,
        "icon": c2land,
        "name": "C2Land",
        "xCategory": "Pure Climate",
        "yCategory": "Product Accelerator"
      },
      {
        "x": 25,
        "y": 49.5,
        "icon": safeplaces,
        "name": "SAFERPLACES",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Risk Systems and Platforms"
      },
      {
        "x": 20.5,
        "y": 62.5,
        "icon": co2,
        "name": "CO2nsistent",
        "xCategory": "Pure Climate",
        "yCategory": "Policy: Voluntary Codes of conduct"
      },
      {
        "x": 25,
        "y": 42.5,
        "icon": aeneta,
        "name": "AENETA",
        "xCategory": "Pure Climate",
        "yCategory": "Market intervention: Data Infrastructure"
      },
      {
        "x": 16,
        "y": 33.5,
        "icon": lions,
        "name": "LIONS2LIFE",
        "xCategory": "Pure Climate",
        "yCategory": "Product Accelerator"
      }
    ]
  },
  {
    "id": "Next Generation Enviromental Products & Services",
    "data": [
      {
        "x": 68,
        "y": 14.5,
        "icon": opensurface,
        "name": "OpenSurface",
        "xCategory": "Climate + Environmental",
        "yCategory": "Physical product"
      },
      {
        "x": 91.5,
        "y": 11.5,
        "icon": phosphorus,
        "name": "Phosphorus recovery and reuse",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Physical product"
      },
      {
        "x": 92.5,
        "y": 23,
        "icon": feedx,
        "name": "FEED X",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Product Accelerator"
      },
      {
        "x": 51,
        "y": 11.5,
        "icon": bPlas,
        "name": "B-PLAS DEMO",
        "xCategory": "Climate + Environmental",
        "yCategory": "Product"
      },
      {
        "x": 59,
        "y": 29.5,
        "icon": circularK,
        "name": "The Circular Kitchen",
        "xCategory": "Climate + Environmental",
        "yCategory": "Market intervention: Finance instruments"
      },
      {
        "x": 62.5,
        "y": 7,
        "icon": drygo,
        "name": "DryGro",
        "xCategory": "Climate + Environmental",
        "yCategory": "Physical product"
      },
      {
        "x": 62.5,
        "y": 22,
        "icon": circularH,
        "name": "Circular Housing",
        "xCategory": "Climate + Environmental",
        "yCategory": "Service"
      },
      {
        "x": 17,
        "y": 11.5,
        "icon": bsg,
        "name": "BSG",
        "xCategory": "Pure Climate",
        "yCategory": "Product"
      },
      {
        "x": 102,
        "y": 27,
        "icon": zero,
        "name": "Zero Carbon Lab",
        "xCategory": "Climate + Environmental + Economic",
        "yCategory": "Product Accelerator"
      }
    ]
  }
];

const CustomNode = ({
  x,
  y,
  node,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <image
        xlinkHref={node.data.icon}
        width={65}
        height={65}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    </g>
  )
}

const MyResponsiveScatterPlot = ({ data /* see data tab */ }) => (
    <ResponsiveScatterPlot
        data={data}
        margin={{ top: 20, right: 300, bottom: 70, left: 120 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        axisTop={null}
        renderNode={CustomNode}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X: Amount of Focus (Impacts)',
          legendPosition: 'middle',
          legendOffset: 50
      }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y: Level of Transition (Typology of Impact)',
          legendPosition: 'middle',
          legendOffset: -50
        }}
        colors={{ scheme: 'category10' }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 60,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 10,
                itemDirection: 'left-to-right',
                symbolSize: 10,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        tooltip={({ node }) => (
          <div
              style={{
                  color: node.style.color,
                  background: '#333',
                  padding: '12px 16px',
              }}
          >
              <strong>
                  {node.data.name} ({node.data.serieId})
              </strong>
              <br />
              {`Main category: ${node.data.xCategory}`}
              <br />
              {`Typology of impact: ${node.data.yCategory}`}
          </div>
      )}
    />
)


function App() {
  return (
    <div className="App">
      <h1>GGC Projects</h1>
      <MyResponsiveScatterPlot data={data} />
    </div>
  );
}

export default App;
