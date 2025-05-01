import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,
  iterations: 10,

  thresholds: {
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.01"],
  },
};

export function setup() {
  return {
    apiUrl: "https://official-joke-api.appspot.com/random_joke",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export default function (data) {
  const response = http.get(data.apiUrl, {
    headers: data.headers,
  });

  // Check if the request was successful
  check(response, {
    "Status is 200": (r) => r.status === 200,
    "Response time < 200ms": (r) => r.timings.duration < 200,
    "Response contains joke data": (r) =>
      r.json() && r.json().setup && r.json().punchline,
  });

  console.log("Response time: ", response.timings.duration, "ms");
}
