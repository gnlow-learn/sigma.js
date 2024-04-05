import type Graph from "https://esm.sh/graphology@0.25.4"

const randItem =
<T>
(collection: T[]) =>
collection[Math.floor(Math.random()*collection.length)]

const randHash =
() =>
Math.random().toString(36).substring(2, 7)

const randNode =
(graph: Graph) => {
    const randEdge = randItem(graph.edges())
    const source = graph.source(randEdge)
    const target = graph.target(randEdge)
    const randNode = randItem([source, target])

    return randNode
}

const randNodes =
(n: number) =>
(graph: Graph) => {
    const result: string[] = []
    for (let i=0; i<n; i++) {
        let node: string
        while (true) {
            node = randNode(graph)
            if (!result.includes(node)) break
        }
        result.push(node)
    }
    return result
}

export const ba =
(graph: Graph) => {

    const newNodeId = randHash()

    graph.addNode(newNodeId, {
        x: Math.random()*20,
        y: Math.random()*20,
        size: 5
    })

    randNodes(3)(graph).forEach(
        target => graph.addEdge(newNodeId, target)
    )
}