const data = [
  [
    { x: 'Coronavac', y: 8 },
    { x: 'Pfizer', y: 27 },
    { x: 'Janssen', y: 2 },
    { x: 'Astrazeneca', y: 15 },
  ],
  [
    { x: 'Coronavac', y: 25 },
    { x: 'Pfizer', y: 89 },
    { x: 'Janssen', y: 63 },
    { x: 'Astrazeneca', y: 47 },
  ],
  [
    { x: 'Coronavac', y: 75 },
    { x: 'Pfizer', y: 48 },
    { x: 'Janssen', y: 78 },
    { x: 'Astrazeneca', y: 15 },
  ],
];

exports.get = async () => {
  return data;
};
