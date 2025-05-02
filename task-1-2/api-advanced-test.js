import http from "k6/http";
import { check, sleep } from "k6";

const TAG_NAME = "TodoRequest";

export const options = {
  stages: [
    { duration: "5s", target: 5 },
    { duration: "10s", target: 5 },
    { duration: "5s", target: 0 },
  ],

  // Performance thresholds
  thresholds: {
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.01"],
  },
};

export function setup() {
  return {
    apiUrl: "https://jsonplaceholder.typicode.com/todos/1",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export default function (data) {
  const response = http.get(data.apiUrl, {
    headers: data.headers,
    tags: {
      name: TAG_NAME,
    },
  });

  check(
    response,
    {
      "Status is 200": (r) => r.status === 200,
      "Response time < 200ms": (r) => r.timings.duration < 200,
    },
    { tags: TAG_NAME }
  );

  sleep(Math.random() * 1 + 0.5); // Random sleep between 0.5-1.5 seconds
}
