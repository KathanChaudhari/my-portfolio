const blogs = () => {
  return (
    <div className='h-full flex flex-col bg-blue-200 items-center md:justify-center pb-20'>
      <div className=' text-2xl md:text-7xl font-semibold mb-10'>My Blogs</div>
      <div className='overflow-y-scroll md:overflow-hidden max-h-[90%] flex flex-col md:flex md:flex-row md:justify-center gap-10'>
        <div className='border bg-white border-gray-700  rounded-lg mx-6 p-5 max-w-sm'>
          <a href="https://medium.com/@kiyo07/integrating-mediapipe-tasks-vision-for-hand-landmark-detection-in-react-a2cfb9d543c7" target="_blank" rel="noopener noreferrer" className='text-3xl font-semibold'>
            Integrating MediaPipe Tasks Vision for Hand Landmark Detection in React
          </a>
          <p className='mt-2'>A comprehensive guide on integrating hand landmark detection in React applications using MediaPipe.</p>
        </div>
        <div className='border bg-white border-gray-700 rounded-lg mx-6 p-5 max-w-sm'>
          <a href="https://medium.com/@kiyo07/explaining-fluid-simulation-react-4ad0d607747e" target="_blank" rel="noopener noreferrer" className='text-3xl font-semibold'>
          Explaining fluid-simulation-react
          </a>
          <p className='mt-2'>I created npm package 'fluid-simulation-react'. This blog offers an insightful look into the package's core functionalities and invites you to build dynamic, visually captivating interfaces in React.</p>
        </div>
      </div>
    </div>
  );
}

export default blogs;
