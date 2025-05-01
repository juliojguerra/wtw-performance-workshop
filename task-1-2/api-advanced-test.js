import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  // Define stages for ramping up and down
  stages: [
    { duration: "20s", target: 10 },
    { duration: "40s", target: 10 },
    { duration: "20s", target: 0 },
  ],

  // Performance thresholds
  thresholds: {
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.01"],
  },
};

export function setup() {
  // Configuration data to be passed to the test function
  return {
    apiUrl: "https://official-joke-api.appspot.com/random_joke",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export default function (data) {
  // Make the request
  const response = http.get(data.apiUrl, {
    headers: data.headers,
    tags: { name: "JokeAPI" }, // Tag requests for better reporting
  });

  // Comprehensive checks to validate response quality
  check(response, {
    "Status is 200": (r) => r.status === 200,
    "Response time < 200ms": (r) => r.timings.duration < 200,
    "Response contains joke data": (r) =>
      r.json() && r.json().setup && r.json().punchline,
  });

  sleep(Math.random() * 1 + 0.5); // Random sleep between 0.5-1.5 seconds
}
