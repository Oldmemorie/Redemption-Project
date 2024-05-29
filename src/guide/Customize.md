---
title: 自定义配置开发文档
layout: doc
titleTemplate: Tritium_docs
---


## CuprumTurbo V18 自定义配置开发文档 
> *本文档来自于上游开发者*我们只是对其字段进行通俗理解，当然我们不可能比开发者更懂这些参数

## 导航

* [JSON配置模块](./Json.md)
* [CPU配置模块](./CpuGovernor.md)
* [线程配置模块](./ThreadSchedOpt.md)
* [GPU配置模块](MtkGpuGovernor.md)
* [文件写入配置模块](./FileWriter.md)

## 完整config以联发科8100为例

```json
{
  "name": "Dimensity8000/8100",
  "author": "chenzyadb",
  "configVersion": 9,
  "CpuGovernor": {
    "enable": true,
    "params": {
      "activeRateHz": 60,
      "idleRateHz": 30,
      "minFreqStep": 200
    },
    "policies": [
      {
        "coreNum": 4,
        "perfScale": 100,
        "lowPowerFreq": 600,
        "optimalFreq": 1600,
        "modelFreq": 2000,
        "modelPower": 300
      },
      {
        "coreNum": 3,
        "perfScale": 260,
        "lowPowerFreq": 700,
        "optimalFreq": 2200,
        "modelFreq": 2850,
        "modelPower": 1610
      },
      {
        "coreNum": 1,
        "perfScale": 260,
        "lowPowerFreq": 800,
        "optimalFreq": 2200,
        "modelFreq": 2850,
        "modelPower": 1610
      }
    ],
    "modes": {
      "powersave": {
        "powerLimit": 3000,
        "perfMargin": [
          10,
          10,
          10
        ],
        "upRateLatency": 800,
        "overHeatTemp": 80,
        "burstCapacity": 8000,
        "recoverTime": 2000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "swipe": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "gesture": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "jank": {
            "durationTime": 100,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 200,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 60
          }
        }
      },
      "balance": {
        "powerLimit": 4000,
        "perfMargin": [
          20,
          20,
          20
        ],
        "upRateLatency": 600,
        "overHeatTemp": 80,
        "burstCapacity": 12000,
        "recoverTime": 3000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "swipe": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "gesture": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "jank": {
            "durationTime": 100,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 200,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 60
          }
        }
      },
      "performance": {
        "powerLimit": 5000,
        "perfMargin": [
          30,
          30,
          30
        ],
        "upRateLatency": 400,
        "overHeatTemp": 90,
        "burstCapacity": 20000,
        "recoverTime": 4000,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "swipe": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "gesture": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "jank": {
            "durationTime": 100,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 200,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 60
          }
        }
      },
      "fast": {
        "powerLimit": 10000,
        "perfMargin": [
          30,
          30,
          30
        ],
        "upRateLatency": 0,
        "overHeatTemp": 95,
        "burstCapacity": 0,
        "recoverTime": 0,
        "freqBurst": {
          "none": {
            "durationTime": 0,
            "lowLatency": false,
            "extraMargin": 0,
            "boost": 0
          },
          "tap": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "swipe": {
            "durationTime": 100,
            "lowLatency": false,
            "extraMargin": 10,
            "boost": 0
          },
          "gesture": {
            "durationTime": 200,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "heavyload": {
            "durationTime": 1000,
            "lowLatency": false,
            "extraMargin": 20,
            "boost": 0
          },
          "jank": {
            "durationTime": 100,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 40
          },
          "bigJank": {
            "durationTime": 200,
            "lowLatency": true,
            "extraMargin": 0,
            "boost": 60
          }
        }
      }
    }
  },
  "ThreadSchedOpt": {
    "enable": true,
    "GameRenderThread": {
      "cpus": [
        7
      ],
      "nice": -20
    },
    "GameMainThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -20
    },
    "GameProcessThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -16
    },
    "UIThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -16
    },
    "MediaThread": {
      "cpus": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "nice": -20
    },
    "WebViewThread": {
      "cpus": [
        4,
        5,
        6,
        7
      ],
      "nice": -16
    },
    "ProcessThread": {
      "cpus": [
        4,
        5,
        6
      ],
      "nice": -12
    },
    "CoProcessThread": {
      "cpus": [
        0,
        1,
        2,
        3
      ],
      "nice": -12
    },
    "JunkThread": {
      "cpus": [
        0,
        1,
        2,
        3
      ],
      "nice": 0
    },
    "Initial": {
      "cpus": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "nice": 0
    }
  },
  "MtkGpuGovernor": {
    "enable": true,
    "params": {
      "activeRateHz": 60,
      "idleRateHz": 30,
      "preferredFreq": []
    },
    "modes": {
      "powersave": {
        "maxFreq": 450,
        "minFreq": 0,
        "upRateThres": 90,
        "downRateDiff": 10
      },
      "balance": {
        "maxFreq": 600,
        "minFreq": 0,
        "upRateThres": 80,
        "downRateDiff": 10
      },
      "performance": {
        "maxFreq": 850,
        "minFreq": 0,
        "upRateThres": 70,
        "downRateDiff": 10
      },
      "fast": {
        "maxFreq": 850,
        "minFreq": 0,
        "upRateThres": 70,
        "downRateDiff": 20
      }
    }
  },
  "FileWriter": {
    "enable": true,
    "scenes": {
      "init": [
        {
          "path": "/dev/cpuset/restricted/cpus",
          "text": "0-3"
        },
        {
          "path": "/dev/cpuset/system-background/cpus",
          "text": "0-3"
        },
        {
          "path": "/dev/cpuset/background/cpus",
          "text": "0-3"
        },
        {
          "path": "/dev/cpuset/foreground/cpus",
          "text": "0-7"
        },
        {
          "path": "/dev/cpuset/top-app/cpus",
          "text": "0-7"
        }
      ],
      "screenOn": [],
      "screenOff": [],
      "powersaveMode": [],
      "balanceMode": [],
      "performanceMode": [],
      "fastMode": []
    }
  }
}
```
