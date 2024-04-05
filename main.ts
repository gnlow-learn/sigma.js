import Sigma from "https://esm.sh/sigma@3.0.0-beta.16"
import Graph from "https://esm.sh/graphology@0.25.4"
import ForceSupervisor from "https://esm.sh/graphology-layout-force@0.2.4/worker"
import FA2Layout from "https://esm.sh/graphology-layout-forceatlas2@0.10.1/worker"
import { fromRange0to1 } from "https://esm.sh/gh/gnlow/twilight.js@5169ea7236c05f38ca7b346ed16fe2170a87c558/mod.ts"

const $container = document.createElement("div")
document.body.append($container)
$container.setAttribute("style", "height: 100%;")

const graph = new Graph()

graph.addNode("1", { x: 0, y: 0, size: 5 })
graph.addNode("2", { x: 10, y: 0, size: 5 })
graph.addNode("3", { x: 20, y: 10, size: 5 })
graph.addEdge("1", "2")
graph.addEdge("2", "3")

const sigma = new Sigma(graph, $container)


import { ba } from "./ba.ts"

if (true) {
    const layout = new FA2Layout(graph)
    layout.start()
    
    setInterval(() => {
        ba(graph)
    }, 300)
} else {
    for (let i=0; i<1000; i++)
        ba(graph)
    graph.forEachNode(node => {
        const degree = graph.degree(node)
        graph.setNodeAttribute(node, "label", degree)
        //console.log((Math.min(degree / 100, 0.99)), fromRange0to1(Math.min(degree / 100, 0.99)).toRgbStr())
        graph.setNodeAttribute(node, "color", fromRange0to1(Math.min(degree / 100, 0.99)).toRgbStr())
        graph.setNodeAttribute(node, "size", 2)
    })
    const layout = new FA2Layout(graph)
    layout.start()
}