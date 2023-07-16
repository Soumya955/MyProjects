const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

const soumya = async () => { 
  const data = await fetchData()
  console.log(data)
};
soumya()
