import React, { useEffect, useState } from "react";

export default function FetchWhileReachEnd() {
  const [message,setMessage] = useState('Scroll to see console log')
  useEffect(() => {
    const handleScroll = () => {
      // document.documentElement.scrollHeight   total height of page let it is 100.
      // window.innerHeight                      view height let  it is 10.
      // window.scrollY                          then scrolling height is 90 i.e will be 100 - 10 = 90

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= scrollableHeight - 2) {
        console.log("User reached the bottom of the page!");
        setMessage('We Reached the End')
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      <h1>{message}</h1>
      {/* Add more content here */}
    </div>
  );
}
