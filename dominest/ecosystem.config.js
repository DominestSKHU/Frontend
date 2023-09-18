module.exports = {
  apps: [
    {
      name: "domidomi",
      script: "node_modules/next/dist/bin/next",
      args: "start --port 2949",
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};