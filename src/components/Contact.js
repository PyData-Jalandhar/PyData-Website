import React from 'react';
import styled from 'styled-components';

const Heading = styled.span`
    margin-top: 2rem;
`;

const Box = styled.input`
    &::placeholder {
        color: lightgrey;
}
`;

const BoxTwo = styled.textarea`
    &::placeholder {
        color: lightgrey;
}
`;

const Button = styled.button`
    width: 100%;
    background-color: #8B008B;
`;

const Text = styled.p`
    color: #8B008B;
`;

const Contact = () => (
<div className="section">
<div className="columns" id="contact">
    <div className="column has-text-centered">
    <Heading className="is-size-2 has-text-black">
        CONTACT
    </Heading>
    <br />
    <div className="column has-text-centered">
        <span className="is-size-2 has-text-weight-bold has-text-grey">
        We'd Love To Hear From You.
        </span>
        <br />
        <p
        className="is-size-5 has-text-grey has-text-centered">
        Ping us below for joining the community or for asking any queries.
        </p>
    </div>
    </div>
</div>
<div className="container">
    <div className="columns">
    <div className="column is-6 is-offset-3">
        <div className="field">
        <label className="label has-text-black is-size-5">Name</label>
        <div className="control">
            <Box
            id="name"
            className="input has-text-black is-size-5"
            type="text"
            placeholder="Name"
            />
        </div>
        </div>
        <div className="field">
        <label className="label has-text-black is-size-5">Email</label>
        <div className="control">
            <Box
            id="email"
            className="input has-text-black is-size-5"
            type="text"
            placeholder="Email"
            />
        </div>
        </div>
        <div className="field">
        <label className="label has-text-black is-size-5">Subject</label>
        <div className="control">
            <Box
            id="subject"
            className="input has-text-black is-size-5"
            type="text"
            placeholder="Subject"
            />
        </div>
        </div>
        <div className="field">
        <label className="label has-text-black is-size-5">Message</label>
        <div className="control">
            <BoxTwo
            id="message"
            // eslint-disable-next-line max-len
            className="textarea has-text-black is-size-5"
            placeholder="Message"
            />
        </div>
        </div>
        <br />
        <div className="columns">
        <div className="column has-text-centered">
            <Button className=" button is-size-5 has-text-light">
            Submit
            </Button>
            <br /> <br /> <br />
        </div>
        </div>
    </div>
    </div>
</div>
<div className="columns">
    <div className="column is-2 is-offset-2 has-text-centered">
    <p>
        <i className="fas fa-map-marker-alt is-size-4 has-text-light" />
    </p>
    <Text className="is-size-5">Follow US</Text>
    <p className="is-size-5 has-text-grey has-text-centered">
        B.R.S. Nagar Ludhiana, 141012, Punjab
    </p>
    </div>
    <div className="column is-2 is-offset-1 has-text-centered">
    <p>
        <i className="far fa-envelope is-size-4 has-text-light" />
    </p>
    <Text className="is-size-5">EMAIL US AT</Text>
    <p className="is-size-5 has-text-grey has-text-centered">
        berianushka@gmail.com
    </p>
    </div>
</div>
</div>
);
export default Contact