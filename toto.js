const yolo = require('yolo')

const addresses = ['2N68EF7dYiUGVUHAGoWtYFXo7NfRvNraGjn', '2N6tZe936iWaWVKwQ6TN2uHE9uVSh1SfsBR']

yolo.getTransactions(addresses).then(transactions => {
  console.log(transactions)
  process.exit(0)
})
