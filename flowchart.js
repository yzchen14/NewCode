// Define your flowchart data as a JSON object
const flowchartData = {
    nodes: [
        { id: "Start", label: "Start" },
        { id: "Process1", label: "Process 1" },
        { id: "Decision", label: "Decision" },
        { id: "Process2", label: "Process 2" },
        { id: "End", label: "End" }
    ],
    links: [
        { source: "Start", target: "Process1" },
        { source: "Process1", target: "Decision" },
        { source: "Decision", target: "Process2" },
        { source: "Decision", target: "End" }
    ]
};

// Create a D3.js force-directed graph
const width = 800;
const height = 400;

const svg = d3.select("#flowchart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const simulation = d3.forceSimulation()
    .nodes(flowchartData.nodes)
    .force("link", d3.forceLink(flowchartData.links).distance(100))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.selectAll(".link")
    .data(flowchartData.links)
    .enter()
    .append("line")
    .attr("class", "link");

const node = svg.selectAll(".node")
    .data(flowchartData.nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 20);

// Add labels to nodes
node.append("title")
    .text(d => d.label);

// Add labels next to nodes
svg.selectAll(".label")
    .data(flowchartData.nodes)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("dy", 5)
    .text(d => d.label);

// Update the position of nodes and links
simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    svg.selectAll(".label")
        .attr("x", d => d.x)
        .attr("y", d => d.y);
});

// Initialize the simulation
simulation.alpha(1).restart();