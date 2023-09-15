module.exports = {
  apps: [
    {
      name: "next-app",
      script: "node_modules/next/dist/bin/next",
      args: "start --port 80",
      instances: 2,
      exec_mode: "cluster",
    },
  ],
};