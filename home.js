"use strict";

const particleCount = 2000;
const particleProps = [
    "x",
    "y",
    "z",
    "vx",
    "vy",
    "vz",
    "life",
    "ttl",
    "speed"
];
const rangeY = 100;
const rangeZ = 200;
const baseTTL = 50;
const rangeTTL = 200;
const baseHue = rand(360);
const rangeHue = 100;
const xc = 0.0005;
const yc = 0.0005;
const zc = 0.0005;
const tc = 0.0005;
const noiseSteps = ceil(rand(4)) + 4;
const backgroundColor = "hsla(0,0%,0%,0.5)";
const { buffer, ctx } = createRenderingContext()

let center;
