import { sleep } from "k6";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Import the HAR-generated script
import { default as harScript } from "./har-script.js";

export const options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m", target: 20 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"],
  },
};

export default function () {
  harScript();
  sleep(1);
}

// Generate Enhanced HTML Summary Report
export function handleSummary(data) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const resultDir = "results/logs/";

  return {
    [`${resultDir}ResultSummary_${timestamp}.html`]: htmlReport(data),
    [`${resultDir}ResultSummary_${timestamp}.json`]: JSON.stringify(
      data,
      null,
      2
    ), // Save JSON summary
    [`${resultDir}ResultSummary_${timestamp}.txt`]: textSummary(data, {
      indent: " ",
      enableColors: false,
    }), // Save text summary
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
