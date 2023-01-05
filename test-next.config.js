module.exports = {
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://indie-bubba-backend.herokuapp.com',
          },
        ],
      },
    ];
  },
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
