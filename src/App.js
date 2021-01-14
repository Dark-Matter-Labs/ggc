import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./App.css";
import projects from "./projects";
import yaxis from "./images/y-axis.svg";
import xaxis from "./images/x-axis.svg";
import ckiclogo from "./images/logo_CKIC_EU.png";
import dmlogo from "./images/DML_Logo_black.png";

const CustomNode = ({
  x,
  y,
  node,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <image
        xlinkHref={node.data.icon}
        width={42}
        height={42}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
      <text text-anchor="middle" dx="2.2em" dy="5.5em" className="icon-label">
        {node.data.iconName}
      </text>
    </g>
  );
};

const overlayStyle = {
  overlay: {
    position: "absolute",
    top: 675,
    right: 0,
    bottom: 0,
    left: 1240,
    color: "#000",
    // This is important to preserve the chart interactivity
    pointerEvents: "none",
  },
  text: {
    fontSize: 16,
  },
};

const theme = {
  background: "#ecf0f1",
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
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 0, right: 300, bottom: 5, left: 0 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    yScale={{ type: "linear", min: 0, max: "auto" }}
    width="1400"
    height="750"
    axisTop={null}
    useMesh={false}
    renderNode={CustomNode}
    theme={theme}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    colors={[
      "#999999",
      "#9999FF",
      "#FFDED1",
      "#FF5757",
      "#FFFFFF",
      "#FF9A9A",
      "#3333FF",
    ]}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 0,
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
          background: "#000000D9",
          padding: "12px 16px",
          textAlign: "start",
          width: "540px",
          marginBottom: "-50%",
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
      <h1>EIT Climate-KIC Innovation Portfolio 2020</h1>
      <h3>(created for Great Green Connector event)</h3>
      <div className="link">
        <a href="https://www.climate-kic.org/">← Back to blog</a>
      </div>
      <div className="wrapper">
        <div className="yaxis">
          <img src={yaxis} alt="y axis"></img>
        </div>
        <div className="graph">
          <GGCPortfolioScatterPlot data={projects} />
          <div style={overlayStyle.overlay}>
            <span style={overlayStyle.text}>Indicative clustering</span>
          </div>
        </div>
      </div>
      <div className="xaxis">
        <img src={xaxis} alt="x axis"></img>
      </div>
      <p className="link-text">
        For more data visualisations visit👉
        <a href="https://climate-kic.cognitive.city/">Exaptive</a>
      </p>
      <div className="footer">
        <p>Supported by-</p>
        <div className="container">
          <a
            href="https://www.climate-kic.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logos"
              src={ckiclogo}
              alt="Climate-KIC EIT logo"
            ></img>
          </a>
          <a
            href="https://darkmatterlabs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logos"
              src={dmlogo}
              alt="Dark Matter Labs logo"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
