import React from "react";
import { Link } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="events">Events </Link>
                <Link to="budget">Budget </Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Budget() {
    return (
        <div>
            <h1>[Budget]</h1>
        </div>
    );
}

export function Oops() {
    return (
        <div>
            <h1> This page does not exsist </h1>
        </div>
    );
}