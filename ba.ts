import type Graph from "https://esm.sh/graphology@0.25.4"

const randItem =
<T>
(collection: T[]) =>
collection[Math.floor(Math.random()*collection.length)]

const randHash =
() =>
Math.random().toString(36).substring(2, 7)

export const ba =
(graph: Graph) => {
    const randEdge = randItem(graph.edges())
    const source = graph.source(randEdge)
    const target = graph.target(randEdge)
    const randNode = randItem([source, target])

    const newNodeId = randHash()

    graph.addNode(newNodeId, {
        x: Math.random()*20,
        y: Math.random()*20,
        size: 5
    })
    graph.addEdge(randNode, newNodeId)
}