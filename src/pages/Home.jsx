import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [walter, setState] = useState('teste');
  const [loading, setLoading] = useState(false);
  const teste = async () => {
    setLoading(true);
    const url = 'https://www.breakingbadapi.com/api/characters/1';
    const fetchApi = await fetch(url);
    const parse = await fetchApi.json();
    setState(parse);
    setLoading(false);
  }
  
  return (
    loading ? 'Loading...' : (
      <div>
        <h1>Home</h1>
        <button type="button" onClick={ teste }>Say my name</button>
        { walter === 'teste' ? walter : walter[0].name }
        <button type="button" onClick={ () => navigate('/teste')  }>Mudar de rota</button>
      </div>
    )
  )
}
