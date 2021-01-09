import { ScatterPlot } from "@nivo/scatterplot";
import "./App.css";
import projects from "./projects";
import yaxis from "./images/y-axis.svg";
import xaxis from "./images/x-axis.svg";
import ckiclogo from './images/logo_CKIC_EU.png';
import dmlogo from './images/DML_Logo_black.png'

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
        width={72}
        height={72}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    </g>
  );
};

const theme = {
  background: "#D3D3D3",
  fontFamily: "SpaceMono-Regular, serif",
  textColor: "#000",
  fontSize: 12,
  axis: {
    domain: {
      line: {
        stroke: "#000",
        strokeWidth: 2,
      },
    },
    ticks: {
      text: {
        display: "none",
      },
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 0.2,
    },
  },
};

const GGCPortfolioScatterPlot = ({ data }) => (
  <ScatterPlot
    data={data}
    margin={{ top: 20, right: 280, bottom: 120, left: 5 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    yScale={{ type: "linear", min: 0, max: "auto" }}
    width= "1400"
    height= "750"
    axisTop={null}
    useMesh={false}
    renderNode={CustomNode}
    theme={theme}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    colors={[
      "#999999",
      "#999BF8",
      "#FADFD3",
      "#EC635D",
      "#FFFFFF",
      "#F19F9C",
      "#313DF5",
    ]}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 90,
        itemWidth: 100,
        itemHeight: 22,
        itemsSpacing: 10,
        itemDirection: "left-to-right",
        symbolSize: 10,
        symbolShape: "circle",
      },
    ]}
    tooltip={({ node }) => (
      <div
        style={{
          color: node.style.color,
          fontFamily: "SpaceMono-Regular, serif",
          background: "#333",
          padding: "12px 16px",
          textAlign: "start",
          marginRight: "30%",
          marginLeft: "30%",
          marginBottom: "-20%"
        }}
      >
        <strong>{node.data.name}</strong>
        <br />
        {node.data.description}
      </div>
    )}
  />
);

function App() {
  return (
    <div className="App">
      <h1>GGC Project Portfolio</h1>
      <div className="link">
      <a href="https://www.climate-kic.org/">← Back to blog</a>
      </div>
      <div className="wrapper">
        <div className="xaxis">
          <img src={yaxis} alt="y axis"></img>
        </div>
        <div className="graph">
          <GGCPortfolioScatterPlot data={projects} /> 
        </div>
      </div>
      <div className="yaxis">
        <img src={xaxis} alt="x axis"></img>
      </div>
      <p className="link-text">
        For more data visualisations visit👉<a href="https://climate-kic.cognitive.city/">Exaptive</a>
      </p>
      <div className="footer">
        <p>Supported by-</p>
        <div className="container">
          <a href="https://www.climate-kic.org/" target="_blank" rel="noreferrer"><img className="logos" src={ckiclogo} alt="Climate-KIC EIT logo"></img></a>
          <a href="https://darkmatterlabs.org/" target="_blank" rel="noreferrer"><img className="logos" src={dmlogo} alt="Dark Matter Labs logo"></img></a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
