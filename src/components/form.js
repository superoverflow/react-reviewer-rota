import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

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
    const len = reviewers_shuffled.length
    for (var index = 0; index < len; index++) {
        rota[reviewers_shuffled[index]] = [
            reviewers_shuffled[(index - 1 + len) % len] ,
            reviewers_shuffled[(index + 1 + len) % len],
        ]
    }
    console.log(rota)
    return rota
}

function shuffle(arrays) {
    return arrays.sort(() => Math.random() - 0.5)
}

function ReviewerTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <ReviewerTableHeader rota={props.rota} />
            </thead>
            <tbody>
                {
                    Object.keys(props.rota).sort().map(k =>
                        <ReviewerTableRow key={k} name={k} reviewers={props.rota[k]} />
                    )
                }
            </tbody>
        </Table>
    )
}

function ReviewerTableHeader(props) {
    if (Object.keys(props.rota).length > 0) {
        return (
            <tr>
                <th>Name</th>
                <th colSpan="2">Reviewers</th>
            </tr>
        )
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
        <Container className="p-3">
            <Form>
                <Form.Group as={Row} controlId="reviewersInput">
                    <Col sm="2">
                        <Form.Label>Reviewers: </Form.Label>
                    </Col>
                    <Col sm="8">
                        <Form.Control
                            type="text"
                            placeholder="comma seperated list of reviewers, eg. Daniele, Ioan, Cyrus, Zacharo, Neil, Johanna"
                            onChange={e => setNames(e.target.value)}
                        />
                    </Col>
                    <Col sm="2">
                        <Button
                            variant="primary"
                            onClick={handleSubmit}>
                            Get Rota!
                        </Button>
                    </Col>
                </Form.Group>
            </Form>

            <ReviewerTable rota={rota} />
        </Container>
    )
}
