import React, { useState } from 'react'

function generateRota(reviewers) {
    /*given n reviewers, where n > 2 eg. A, B, C, D
      generate rota using neighbour algo, eg:
      A: B, D
      B: A, C
      C: B, D
      D: C, A
    */
    var rota = {}
    const reviewers_shuffled = shuffle(reviewers)
    for (var index = 0; index < reviewers_shuffled.length; index++) {
        rota[reviewers_shuffled[index]] = getReviewer(reviewers_shuffled, index)
    }
    console.log(rota)
    return rota
}

function shuffle(arrays) {
    return arrays.sort(() => Math.random() - 0.5)
}

function getReviewer(reviewers, index) {
    if (index === 0) {
        return [reviewers.slice(-1), reviewers[1]]
    } else if (index === reviewers.length - 1) {
        return [reviewers[reviewers.length - 2], reviewers[0]]
    } else {
        return [reviewers[index - 1], reviewers[index + 1]]
    }
}

function ReviewerTable(props) {
    return (
        <table>
            <ReviewerTableHeader rota={props.rota} />
            <tbody>
            {
                Object.keys(props.rota).sort().map(k =>
                    <ReviewerTableRow name={k} reviewers={props.rota[k]} />
                )
            }
            </tbody>
        </table>
    )
}

function ReviewerTableHeader(props) {
    if (Object.keys(props.rota).length > 0) {
        return <tr><th>Name</th> <th>Reviewers</th></tr>
    } else {
        return <></>
    }
}

function ReviewerTableRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.reviewers[0]}</td>
            <td>{props.reviewers[1]}</td>
        </tr>
    )
}

export default function ReviewerForm(props) {
    const [names, setNames] = useState("")
    const [rota, setRota] = useState({})
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`reviewers: ${names}`)
        const reviewers = names.split(",").map(x => x.trim())
        setRota(generateRota(reviewers))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Reviewers:
                    <input
                        type="text"
                        value={names}
                        onChange={e => setNames(e.target.value)}
                    />
                </label>
                <input type="submit" value="Get Rota!" />
            </form>
            <ReviewerTable rota={rota} />
        </>
    )
}
