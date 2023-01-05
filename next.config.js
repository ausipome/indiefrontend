module.exports = {
  webpack: {
    output: {
      hashFunction: 'xxhash64',
    },
    experiments: {
      futureDefaults: true,
    },
  },
};
