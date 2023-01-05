module.exports = {
  webpack5: true,
  webpack: {
    output: {
      hashFunction: 'xxhash64',
    },
    experiments: {
      futureDefaults: true,
    },
  },
};
