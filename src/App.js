import Avatar from "./Counter"; 
function App() {
  const obj = {
 src:"https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        width:"500px",
        height:"500px"
  }
  return (
    <>
      <Avatar {...obj} />
      <Avatar
        src="https://images.unsplash.com/photo-1691466517945-0f9cc5b47539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        width="500px"
        height="500px"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        width="500pxpx"
        height="500pxp"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        width="500pxpx"
        height="500pxp"
      >
        <h1>akshay bhaiaya</h1>
      </Avatar>
    </>
  );
}

export default App;
