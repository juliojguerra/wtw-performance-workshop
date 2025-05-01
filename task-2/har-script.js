// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://k6.io/', function () {
    response = http.get('https://k6.io/', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': 'W/"7db0748bda547ca646241153bb2c49e8"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://fonts.googleapis.com/css?family=Roboto+Mono%3A300%2C400%7CKalam%3A400&display=swap&family=Roboto%2BMono%3A300%2C400%7CKalam%3A400',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://k6.io/static/amazon-a8a3f55484b0e7d30c3ab0ae416cc69d.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/noaa-7fbe83bf43a3e1b9681893cc82ebc43b.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/sephora-922efcf5b1b703d5a04fa7c3b4aa1d36.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/citrix-4b63b90f22c5e8bf12e9b568aeb52a51.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/microsoft-78dd4a41b7bc3af7ebec21b1093da07b.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/yum-e3693c4fc2cbcc677a0fbe9f5c55e689.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/gitlab-4efdbb1df4fbce23b88b616a4296d2d2.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/carvana-4678a6323dc843e68faa8baea7cb78ac.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/app-5929e806068e78e0fc98.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/framework-396647af4f31b9368f98.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/webpack-runtime-e77a5bbb0e49dbd96611.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-KBV9L4L', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://snap.licdn.com/li.lms-analytics/insight.min.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://munchkin.marketo.net/munchkin.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://static.hotjar.com/c/hotjar-1699068.js?sv=6', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'static.hotjar.com',
        'If-None-Match': 'W/47441606f2516de00024f2b89565d67d',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Storage-Access': 'active',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://k6.io/static/tt-pro-regular-webfont-c026b25692b4d657d3410332d773a00d.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/static/tt-pro-bold-webfont-7842c22fb63b8a859ccff64910254df7.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/static/tt-pro-medium-webfont-a6840e7b36e244e19cb32d1b3b519a9f.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/robotomono/v23/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vvtSM1J-gEPT5Ese09hHSh0mQ.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://fonts.googleapis.com/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/static/home-page-main-30c6e72806506138b9bd44a2ab31a419.mp4',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'Accept-Encoding': 'identity;q=1, *;q=0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          Range: 'bytes=0-',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://sc.lfeeder.com/lftracker_v1_ywVkO4X2AnO8Z6Bj.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.post(
      'https://o175050.ingest.sentry.io/api/5509583/envelope/?sentry_key=59c36eeefc1246ecbfa516c2edd773e6&sentry_version=7&sentry_client=sentry.javascript.gatsby%2F7.57.0',
      '{"sent_at":"2025-05-01T18:25:40.488Z","sdk":{"name":"sentry.javascript.gatsby","version":"7.57.0"}}\n{"type":"session"}\n{"sid":"d55e87c1848c49439c25736e9a8dfd70","init":true,"started":"2025-05-01T18:25:40.488Z","timestamp":"2025-05-01T18:25:40.488Z","status":"ok","errors":0,"attrs":{"release":"ae4071d0d796b60c4b1194a5a38a8c5570f26bfd","environment":"production","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"}}',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'text/plain;charset=UTF-8',
          Host: 'o175050.ingest.sentry.io',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/page-data/app-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': '"9fa7e6b207240852bade7135bc890c1c"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/index/page-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': '"f59fccbbdf7952f5adb9749c61e03de3"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://px.ads.linkedin.com/attribution_trigger?pid=4981058&time=1746123940579&url=https%3A%2F%2Fk6.io%2F',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          Accept: '*',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=4981058&time=1746123940579&li_adsId=ec345785-460d-42da-9a22-ec9287f799a9&url=https%3A%2F%2Fk6.io%2F',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'px.ads.linkedin.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://munchkin.marketo.net/164/munchkin.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get(
      'https://px.ads.linkedin.com/attribution_trigger?pid=4981058&time=1746123940579&url=https%3A%2F%2Fk6.io%2F',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://356-yfg-389.mktoresp.com/webevents/visitWebPage?_mchNc=1746123940606&_mchCn=&_mchId=356-YFG-389&_mchTk=_mch-k6.io-bf2d5c251532b11a405661707033a82&_mchHo=k6.io&_mchPo=&_mchRu=%2F&_mchPc=https%3A&_mchVr=164&_mchEcid=&_mchHa=&_mchRe=&_mchQp=',
      null,
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: '356-yfg-389.mktoresp.com',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/ea88be26-949b8f06ac65684f24b7.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/commons-962a5d4825c150475167.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get(
      'https://k6.io/420f3b9cb13584731bf50cebd0d0316a0769aa9a-a9ec2fd2a8b09a0bea5d.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/1d0cd7e0ea7d1fef6d35344a52762abf9879f0ec-4531d9dba3d6b84b5e90.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://k6.io/component---src-pages-index-js-fe617514ca0c5b29b002.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/1437192782.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 28 Nov 2022 17:36:49 GMT',
        'If-None-Match': '"047c3a7ba6fbca7dc9d29edd8fd47253"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/1918644930.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 08 Jul 2024 14:44:48 GMT',
        'If-None-Match': 'W/"ad2965d91537a8bd1bd33a02f4d87705"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/3543381572.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Thu, 20 Jul 2023 10:04:58 GMT',
        'If-None-Match': 'W/"85e0e5a7b5e08cea9d611f4c90b9cc0b"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://tr-rc.lfeeder.com/?sid=ywVkO4X2AnO8Z6Bj&data=eyJnYVRyYWNraW5nSWRzIjpbXSwiZ2FNZWFzdXJlbWVudElkcyI6W10sImdhQ2xpZW50SWRzIjpbIjE3MzQ5NTY2ODQuMTc0NjEyMzc2MCJdLCJjb250ZXh0Ijp7ImxpYnJhcnkiOnsibmFtZSI6ImxmdHJhY2tlciIsInZlcnNpb24iOiIyLjY5LjAifSwicGFnZVVybCI6Imh0dHBzOi8vazYuaW8vIiwicGFnZVRpdGxlIjoiTG9hZCB0ZXN0aW5nIGZvciBlbmdpbmVlcmluZyB0ZWFtcyB8IEdyYWZhbmEgazYiLCJyZWZlcnJlciI6IiJ9LCJldmVudCI6InRyYWNraW5nLWV2ZW50IiwiY2xpZW50RXZlbnRJZCI6IjU1NThlMTI1ZGViNzdkMmMiLCJzY3JpcHRJZCI6Inl3VmtPNFgyQW5POFo2QmoiLCJjb29raWVzRW5hYmxlZCI6dHJ1ZSwiY29uc2VudExldmVsIjoibm9uZSIsImFub255bWl6ZUlwIjpmYWxzZSwibGZDbGllbnRJZCI6IkxGMS4xLjA2Y2VkODdiODhmODNhOWYuMTc0NjEyMzc1ODc4MCIsImZvcmVpZ25Db29raWVzIjpbXSwicHJvcGVydGllcyI6e30sImF1dG9UcmFja2luZ0VuYWJsZWQiOnRydWUsImF1dG9UcmFja2luZ01vZGUiOiJvbl9zY3JpcHRfbG9hZCJ9',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'tr-rc.lfeeder.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1744229221998702592/lzlen6zq_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1599851549337194496/TUE6LkYS_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1543739876016656384/FUGen2m7_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1353037199302815744/f9L0ozTE_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1794443042822279168/y0lVPPSC_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1783200598126473216/Yqa619No_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/data/jobs-positions.json', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/dashboard/img_0.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/17.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/16.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/15.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/14.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/13.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/12.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/11.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/10.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/9.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/8.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/7.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/6.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/5.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/4.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/3.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/2.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/1.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=G-H2LHZ4M8SN&l=dataLayer&cx=c&gtm=45He54u0v9126785498za200&tag_exp=101509156~103051953~103077950~103106314~103106316~103116025~103200001~103233424~103251618~103251620',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://script.hotjar.com/modules.e8a4a0ad0c33518716fb.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":213,"time":1746123941230,"domain":"k6.io","url":"https://k6.io/","pageTitle":"Load testing for engineering teams | Grafana k6","websiteSignalRequestId":"4b3a3944-7306-0119-289d-f7bd20721134","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":-4},"isLinkedInApp":false,"hem":null,"signalType":"PAGE_VISIT"}',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          Accept: '*',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'Content-Type': 'text/plain;charset=UTF-8',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://k6.io/manifest.webmanifest', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/icons/icon-144x144.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":213,"time":1746123943363,"domain":"k6.io","url":"https://k6.io/","pageTitle":"Load testing for engineering teams | Grafana k6","websiteSignalRequestId":"8ae2bf3d-82b8-bbb6-4e5f-150f721a07b7","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":-4},"isLinkedInApp":false,"hem":null,"signalType":"CLICK","href":"","domAttributes":{"elementSemanticType":null,"elementValue":null,"elementType":"button","tagName":"BUTTON","backgroundImageSrc":null,"imageSrc":null,"imageAlt":null,"innerText":"","elementTitle":null,"cursor":"pointer"},"innerElements":null,"elementCrumbsTree":[{"tagName":"div","nthChild":1,"id":"___gatsby"},{"tagName":"div","nthChild":0,"id":"gatsby-focus-wrapper"},{"tagName":"header","nthChild":0,"classes":["header-module--wrapper--98593"]},{"tagName":"div","nthChild":0,"classes":["container"]},{"tagName":"div","nthChild":0,"classes":["align-items-center","row"]},{"tagName":"div","nthChild":3,"classes":["default-layout-module--mobile-nav--b9d46"]},{"tagName":"button","nthChild":0,"classes":["header-burger-module--wrapper--f2ec2"]}],"isFilteredByClient":false}',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          Accept: '*',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'Content-Type': 'text/plain;charset=UTF-8',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://k6.io/page-data/cloud/page-data.json', {
      headers: {
        Accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        Origin: 'https://k6.io',
        Purpose: 'prefetch',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/privacy-policy/page-data.json', {
      headers: {
        Accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Wed, 07 Dec 2022 13:49:05 GMT',
        'If-None-Match': 'W/"4a57edd103cbbed1a086edf18451d99a"',
        Origin: 'https://k6.io',
        Purpose: 'prefetch',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/open-source/page-data.json', {
      headers: {
        Accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:37 GMT',
        'If-None-Match': '"4108d162f8c2cf9259926b75700010df"',
        Origin: 'https://k6.io',
        Purpose: 'prefetch',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/open-source/page-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:37 GMT',
        'If-None-Match': '"4108d162f8c2cf9259926b75700010df"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/privacy-policy/page-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Wed, 07 Dec 2022 13:49:05 GMT',
        'If-None-Match': 'W/"4a57edd103cbbed1a086edf18451d99a"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://k6.io/component---src-pages-privacy-policy-js-ffb14146f6200849bef5.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/component---src-pages-open-source-js-db4dc3811d6f09b97a70.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":213,"time":1746123944698,"domain":"k6.io","url":"https://k6.io/","pageTitle":"Load testing for engineering teams | Grafana k6","websiteSignalRequestId":"cdea654c-1371-1880-0d33-e2a1369cedd7","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":-4},"isLinkedInApp":false,"hem":null,"signalType":"CLICK","href":"https://grafana.com/docs/k6/latest","domAttributes":{"elementSemanticType":null,"elementValue":null,"elementType":null,"tagName":"A","backgroundImageSrc":null,"imageSrc":null,"imageAlt":null,"innerText":"DOCUMENTATION","elementTitle":null,"cursor":"pointer"},"innerElements":null,"elementCrumbsTree":[{"tagName":"div","nthChild":1,"id":"___gatsby"},{"tagName":"div","nthChild":0,"id":"gatsby-focus-wrapper"},{"tagName":"div","nthChild":9,"classes":["mobile-nav-module--visible--0d00a","mobile-nav-module--wrapper--b8cfc"]},{"tagName":"div","nthChild":1,"classes":["container","mobile-nav-module--inner--3f759"]},{"tagName":"ul","nthChild":0,"classes":["mobile-nav-module--list--2686e"]},{"tagName":"li","nthChild":3,"classes":["mobile-nav-module--list-item--b1199"]},{"tagName":"a","nthChild":0,"classes":["mobile-nav-module--list-link--539b4"],"attributes":{"href":"https://grafana.com/docs/k6/latest"}}],"isFilteredByClient":false}',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          Accept: '*',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'Content-Type': 'text/plain;charset=UTF-8',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://356-yfg-389.mktoresp.com/webevents/clickLink?_mchNc=1746123944793&_mchHr=https%3A%2F%2Fgrafana.com%2Fdocs%2Fk6%2Flatest&_mchId=356-YFG-389&_mchTk=_mch-k6.io-bf2d5c251532b11a405661707033a82&_mchCn=&_mchHo=k6.io&_mchPo=&_mchRu=%2F&_mchPc=https%3A&_mchVr=164&_mchEcid=&',
      null,
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: '356-yfg-389.mktoresp.com',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://analytics.google.com/g/collect?v=2&tid=G-H2LHZ4M8SN&gtm=45je54u0v9126796651z89126785498za200zb9126785498&_p=1746123940270&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=101509156~103051953~103077950~103106314~103106316~103116026~103200004~103233424~103251618~103251620&ptag_exp=101509156~103051953~103077950~103106314~103106316~103116025~103200001~103233424~103251618~103251620&cid=1734956684.1746123760&ul=en&sr=2752x1152&ir=1&uaa=x86&uab=64&uafvl=Google%2520Chrome%3B135.0.7049.115%7CNot-A.Brand%3B8.0.0.0%7CChromium%3B135.0.7049.115&uamb=0&uam=&uap=Windows&uapv=10.0.0&uaw=0&are=1&pae=1&frm=0&pscdl=noapi&_eu=EAAAAAI&_s=1&sid=1746123759&sct=1&seg=1&dl=https%3A%2F%2Fk6.io%2F&dt=Load%20testing%20for%20engineering%20teams%20%7C%20Grafana%20k6&en=page_view&tfd=4877',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          origin: 'https://k6.io',
          priority: 'u=1, i',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'x-client-data': 'CI+2yQEIpbbJAQipncoBCPPoygEIk6HLAQiSo8sBCIWgzQEI3u7OAQ==',
        },
      }
    )
  })

  group('page_2 - https://grafana.com/docs/k6/latest', function () {
    response = http.get('https://grafana.com/docs/k6/latest', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/docs/k6/latest/', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/fonts/inter.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/fonts/outfit.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/fonts/font-awesome/css/font-awesome.min.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/app.min.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/shared.min.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/tw-styles.min.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/themes.min.css', {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'style',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/at.js', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/static/assets/img/icons/grafana-icon-docs-search.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/static/assets/img/icons/grafana-icon-breadcrumb-arrow-gray.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/media/images/svg/thumbs-up.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/static/assets/img/icons/grafana-icon-card-webinar.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/static/assets/img/icons/grafana-icon-card-video.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/web/banner.fe1096d5c0907a4ff6d891d220f8fc6e4fffd70142d5245525772ca8106ff134.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/web/faro.b41236b93ac1063768612647cc4417ffa31a2abb840a56bb85805b3bf110b98b.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/web/app.1c9858bac3249bd0d7328eab1c0d050f2cba5d527d1328908eb62d690a5e3ff3.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/web/shared.061a61b1c9eb1a5d0a7b56da27c3d71f1cad8838128be595ce532371fa018ade.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/web/fonts/inter/inter-v3-latin-regular.woff2', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Origin: 'https://grafana.com',
        Referer: 'https://grafana.com/web/fonts/inter.css',
        'Sec-Fetch-Dest': 'font',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/web/fonts/inter/inter-v3-latin-500.woff2', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Origin: 'https://grafana.com',
        Referer: 'https://grafana.com/web/fonts/inter.css',
        'Sec-Fetch-Dest': 'font',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/web/fonts/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Origin: 'https://grafana.com',
          Referer: 'https://grafana.com/web/fonts/font-awesome/css/font-awesome.min.css',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/web/fonts/inter/inter-v3-latin-600.woff2', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Origin: 'https://grafana.com',
        Referer: 'https://grafana.com/web/fonts/inter.css',
        'Sec-Fetch-Dest': 'font',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://grafana.com/connect/af1fca71911a9641ebdffddb56889e97',
      '{"meta":{"sdk":{"version":"1.14.1"},"app":{"name":"grafana-website","version":"f1a1df32e949cb51bfca659c25d83ba482b3fdae","environment":"master"},"browser":{"name":"Chrome","version":"135.0.0.0","os":"Windows 10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36","language":"en","mobile":false,"brands":[{"brand":"Google Chrome","version":"135"},{"brand":"Not-A.Brand","version":"8"},{"brand":"Chromium","version":"135"}],"viewportWidth":"476","viewportHeight":"1058"},"page":{"url":"https://grafana.com/docs/k6/latest/"},"session":{"id":"4okW8igX1X"}},"events":[{"name":"session_start","domain":"browser","attributes":{},"timestamp":"2025-05-01T18:25:46.829Z"}],"measurements":[{"type":"web-vitals","values":{"fcp":1788},"timestamp":"2025-05-01T18:25:46.829Z","context":{}}]}',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'grafana.com',
          Origin: 'https://grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-faro-session-id': '4okW8igX1X',
        },
      }
    )

    response = http.get('https://grafana.com/api/profile', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'X-Referrer': 'https://grafana.com/docs/k6/latest/',
        'X-Request-ID': 'c0f4b700-61e7-48af-1e33-bd928708846c',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/docs/k6/GrafanaLogo_k6_orange_icon.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/media/events/grafanacon/2025/logo-gcon2025-countdown.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/media/events/grafanacon/2025/icon-close-x.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/static/assets/img/icons/grafana-icon-mobile-nav-open-white.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/static/assets/img/icons/grafana-icon-mobile-toc-open-white.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/media/images/icons/grafana-banner-close-btn-light.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/media/banners/observabilitycon/2025/logo-ocr2025-banner.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/media/events/grafanacon/2025/logo-gcon2025-banner-vertical.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/media/banners/images/cloud-banner-dashboards-bg.png', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/metrics-log-yellow.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/logs-orange.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/traces-red.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/pink-grafana.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/retention-purple.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/cloud-banner-bg-icons.png', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/banners/images/grafana-cloud-logo.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/media/products/k6-cloud/k6-sidebar-banner.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://grafana.com/media/products/k6-cloud/k6-sidebar-banner-dark.png?w=500',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://grafana.com/media/images/logos/adaptive-metrics-banner-logo-2.svg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          Host: 'grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://grafana.com/canspam', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://grafana.com/static/assets/img/fav32.png', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
        Connection: 'keep-alive',
        Host: 'grafana.com',
        Referer: 'https://grafana.com/docs/k6/latest/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://grafana.com/connect/af1fca71911a9641ebdffddb56889e97',
      '{"meta":{"sdk":{"version":"1.14.1"},"app":{"name":"grafana-website","version":"f1a1df32e949cb51bfca659c25d83ba482b3fdae","environment":"master"},"browser":{"name":"Chrome","version":"135.0.0.0","os":"Windows 10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36","language":"en","mobile":false,"brands":[{"brand":"Google Chrome","version":"135"},{"brand":"Not-A.Brand","version":"8"},{"brand":"Chromium","version":"135"}],"viewportWidth":"476","viewportHeight":"1058"},"page":{"url":"https://grafana.com/docs/k6/latest/"},"session":{"id":"4okW8igX1X"}},"events":[{"name":"faro.performance.navigation","domain":"browser","attributes":{"name":"https://grafana.com/docs/k6/latest/","duration":"3504","tcpHandshakeTime":"0","dnsLookupTime":"0","tlsNegotiationTime":"2","responseStatus":"200","redirectTime":"505","requestTime":"258","responseTime":"214","fetchTime":"474","serviceWorkerTime":"514","decodedBodySize":"388215","encodedBodySize":"59215","cacheHitStatus":"fullLoad","renderBlockingStatus":"non-blocking","protocol":"http/1.1","initiatorType":"navigation","visibilityState":"visible","ttfb":"773","pageLoadTime":"2989","documentParsingTime":"1650","domProcessingTime":"1065","domContentLoadHandlerTime":"53","onLoadTime":"2","type":"navigate","faroNavigationId":"aXYwwAWiTk","faroPreviousNavigationId":"unknown"},"timestamp":"2025-05-01T18:25:44.801Z"}],"measurements":[{"type":"web-vitals","values":{"ttfb":773.4000000953674},"timestamp":"2025-05-01T18:25:48.307Z","context":{}}]}',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'grafana.com',
          Origin: 'https://grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-faro-session-id': '4okW8igX1X',
        },
      }
    )

    response = http.post(
      'https://grafana.com/connect/af1fca71911a9641ebdffddb56889e97',
      '{"meta":{"sdk":{"version":"1.14.1"},"app":{"name":"grafana-website","version":"f1a1df32e949cb51bfca659c25d83ba482b3fdae","environment":"master"},"browser":{"name":"Chrome","version":"135.0.0.0","os":"Windows 10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36","language":"en","mobile":false,"brands":[{"brand":"Google Chrome","version":"135"},{"brand":"Not-A.Brand","version":"8"},{"brand":"Chromium","version":"135"}],"viewportWidth":"476","viewportHeight":"1058"},"page":{"url":"https://grafana.com/docs/k6/latest/"},"session":{"id":"4okW8igX1X"}},"events":[{"name":"faro.performance.resource","domain":"browser","attributes":{"name":"https://grafana.com/canspam","duration":"283","tcpHandshakeTime":"0","dnsLookupTime":"0","tlsNegotiationTime":"1","responseStatus":"403","redirectTime":"0","requestTime":"282","responseTime":"0","fetchTime":"283","serviceWorkerTime":"3504","decodedBodySize":"12","encodedBodySize":"12","cacheHitStatus":"fullLoad","renderBlockingStatus":"non-blocking","protocol":"http/1.1","initiatorType":"fetch","visibilityState":"visible","ttfb":"282","faroNavigationId":"aXYwwAWiTk","faroResourceId":"Tp0Qqscm4V"},"timestamp":"2025-05-01T18:25:48.305Z"}]}',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'grafana.com',
          Origin: 'https://grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-faro-session-id': '4okW8igX1X',
        },
      }
    )

    response = http.post(
      'https://grafana.com/connect/af1fca71911a9641ebdffddb56889e97',
      '{"meta":{"sdk":{"version":"1.14.1"},"app":{"name":"grafana-website","version":"f1a1df32e949cb51bfca659c25d83ba482b3fdae","environment":"master"},"browser":{"name":"Chrome","version":"135.0.0.0","os":"Windows 10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36","language":"en","mobile":false,"brands":[{"brand":"Google Chrome","version":"135"},{"brand":"Not-A.Brand","version":"8"},{"brand":"Chromium","version":"135"}],"viewportWidth":"476","viewportHeight":"1058"},"page":{"url":"https://grafana.com/docs/k6/latest/"},"session":{"id":"4okW8igX1X"}},"measurements":[{"type":"web-vitals","values":{"lcp":1868},"timestamp":"2025-05-01T18:25:58.105Z","context":{}},{"type":"web-vitals","values":{"cls":0.009258517955172045},"timestamp":"2025-05-01T18:25:58.106Z","context":{}}]}',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en,es-PE;q=0.9,es;q=0.8,es-ES;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'grafana.com',
          Origin: 'https://grafana.com',
          Referer: 'https://grafana.com/docs/k6/latest/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-faro-session-id': '4okW8igX1X',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
