const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
};
const fetchData1 = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!'+data);
    }, 2000);
  });
};

fetchData()
.then(res=>console.log(res))
fetchData1("OKKK")
.then(res=>console.log(res))
.catch(err=>console.log(err))
