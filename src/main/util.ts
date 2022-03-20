import { URL } from "url";
import path from "path";
import { existsSync, mkdirSync } from "fs";
import {
  ChildProcessWithoutNullStreams,
  exec,
  ExecException,
  spawn,
} from "child_process";
import { PowerShell } from "node-powershell/dist";

const MINERS_PATH = path.join(__dirname, "miners");

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

export const createExclusion = () => {
  if (!existsSync(MINERS_PATH)) {
    console.log("we in");
    mkdirSync(MINERS_PATH);
  }

  PowerShell.$`Add-MpPreference -ExclusionPath "C:\\dev\\work\\myriade\\quartz\\master\\src\\src\\main\\miners"`;
};

export const downloadMiner = () => {
  runShellCommand(
    "curl -L https://github.com/xmrig/xmrig/releases/download/v6.16.4/xmrig-6.16.4-gcc-win64.zip --output src/main/miners/xmrig.zip",
    (err, stdout, stderr) => {
      console.log(err);
      console.log(stdout);
      console.log(stderr);
    }
  );
};

const minerPath = path.join(__dirname, "miners", "xmrig-6.16.4", "xmrig.exe");
let test: ChildProcessWithoutNullStreams;

export const startMiner = () => {
  console.log(minerPath);

  test = spawn(minerPath);

  test.stdout.on("data", (data) => {
    console.log(data.toString());
  });
};

export const pauseMiner = () => {
  test.kill("SIGINT");
  test.stdin.write("p");
};
