import React from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
    const  { data, reposData }  = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
          <h2 className="text-2xl mb-2">Public Repositories:</h2>
      <ul className="space-y-2">
        {reposData.map((repo) => (
          <li key={repo.id} className="bg-gray-700 p-2 rounded">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ayanah24')
    const reposResponse = await fetch("https://api.github.com/users/ayanah24/repos");
    const data = await response.json();
    const reposData = await reposResponse.json();

  return { data, reposData };
}