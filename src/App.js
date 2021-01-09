import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./App.css";
import projects from "./projects";

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

const MyResponsiveScatterPlot = ({ data }) => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 20, right: 300, bottom: 120, left: 120 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    yScale={{ type: "linear", min: 0, max: "auto" }}
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
        }}
      >
        <strong>{node.data.name}</strong>
        <br />
        {node.data.serieId}
        <br />
        {`Main category: ${node.data.xCategory}`}
        <br />
        {`Typology of impact: ${node.data.yCategory}`}
      </div>
    )}
  />
);

function App() {
  return (
    <div className="App">
      <h1>GGC Projects</h1>
      <MyResponsiveScatterPlot data={projects} />
    </div>
  );
}

export default App;
