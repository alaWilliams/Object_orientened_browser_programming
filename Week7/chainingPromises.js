function getUserStocks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const investmentResult = {
        stocks: [
          {
            name: 'Apple', 
            amount: 5
          },
          {
            name: 'Microsoft', 
            amount: 10
          }
        ],
        netWorth: 10500
      };
      resolve(investmentResult)
    }, 2000)
  })
}

function getUserStockNews(userStockData) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const newsResults = [
        {
          title: 'New Iphone released',
          date: '2025-02-20'
        },
        {
          title: 'NVIDIA releases new chip',
          date: '2025-02-19'
        }
      ]

      resolve( { userStockData, newsResults })
    }, 1000)
  })
};

getUserStocks()
  .then(getUserStockNews)
  .then(finalResults => {{
    console.log(finalResults);
  }})