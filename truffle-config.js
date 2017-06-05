module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    },
    test: {
      network_id: 3,
      host: "localhost",
      port: 8547  // Different than the default below
    },
    live: {
      network_id: 1,
      host: "localhost",
      port: 8548  // Different than the default below
    }
  }
};
