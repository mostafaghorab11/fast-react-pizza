import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/order/${searchQuery}`);
    setSearchQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search order #"
        type="search"
      />
    </form>
  );
}

export default SearchOrder;
