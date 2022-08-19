import { URL } from "url";
import path from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import {
  ChildProcessWithoutNullStreams,
  exec,
  ExecException,
  spawn,
} from "child_process";
import { PowerShell } from "node-powershell/dist";
import { cpu, cpuTemperature, currentLoad } from "systeminformation";
import { app } from "electron";

const MINERS_PATH = app.getPath("appData") + "/Myriade/miners";

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === "development") {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (htmlFileName: string) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  };
} else {
  resolveHtmlPath = (htmlFileName: string) => {
    return `file://${path.resolve(__dirname, "../renderer/", htmlFileName)}`;
  };
}

const runShellCommand = (
  command: string,
  callback?: (
    error: ExecException | null,
    stdout: string,
    stderr: string
  ) => void
) => {
  exec(command, callback);
};

export const createMinerDir = () => {
  if (!existsSync(MINERS_PATH)) {
    mkdirSync(MINERS_PATH, { recursive: true });
  }
};

export const createWindowsExclusion = () => {
  if (process.platform === "win32") {
    PowerShell.$`Add-MpPreference -ExclusionPath "${MINERS_PATH}"`;
  }
};

export const downloadMiner = () => {
  const os = process.platform;

  switch (os) {
    case "win32":
      runShellCommand(
        `curl -L https://github.com/xmrig/xmrig/releases/download/v6.18.0/xmrig-6.18.0-gcc-win64.zip --output ${MINERS_PATH}/xmrig.zip`,
        (err, stdout, stderr) => {
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        }
      );
      break;
    case "darwin":
      runShellCommand(
        "curl -L https://github.com/xmrig/xmrig/releases/download/v6.18.0/xmrig-6.18.0-macos-x64.tar.gz --output src/main/miners/xmrig.tar.gz",
        (err, stdout, stderr) => {
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        }
      );
      break;
    case "linux":
      runShellCommand(
        "curl -L https://github.com/xmrig/xmrig/releases/download/v6.18.0/xmrig-6.18.0-linux-x64.tar.gz --output src/main/miners/xmrig.tar.gz",
        (err, stdout, stderr) => {
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        }
      );
      break;
  }
};

const minerPath = path.join(
  app.getPath("appData"),
  "Myriade",
  "miners",
  "xmrig-6.18.0",
  "xmrig.exe"
);
let minerProcess: ChildProcessWithoutNullStreams;

export const generateMinerConfig = (userId: string) => {
  writeFileSync(
    path.join(
      app.getPath("appData"),
      "Myriade",
      "miners",
      "xmrig-6.18.0",
      "config.json"
    ),
    JSON.stringify({
      autosave: true,
      cpu: {
        "memory-pool": true,
      },
      "donate-level": 1,
      "donate-over-proxy": 1,
      pools: [
        {
          algo: "rx/0",
          coin: "monero",
          url: "pool.myriade.io:8222",
          user: userId,
          "rig-id": null,
          nicehash: false,
          keepalive: true,
          enabled: true,
          tls: false,
          "tls-fingerprint": null,
          daemon: false,
          "self-select": null,
        },
      ],
      "print-time": 10,
      "health-print-time": 60,
      retries: 5,
      "retry-pause": 5,
      syslog: false,
      "user-agent": "Myriade Client",
      watch: true,
    })
  );
};

export const startMiner = () => {
  minerProcess = spawn(minerPath);

  minerProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });
};

export const pauseMiner = () => {
  minerProcess.kill("SIGINT");
};

export const getCpuUsage = async () => {
  const load = await currentLoad();
  return load;
};

export const getCpuTemp = async () => {
  const temp = await cpuTemperature();
  return temp;
};

export const getCpu = async () => {
  const model = await cpu();
  return model;
};
