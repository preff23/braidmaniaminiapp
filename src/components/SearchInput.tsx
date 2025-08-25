'use client';

import { useState } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mb-6 fade-in-up">
      <input
        type="text"
        placeholder="Поиск по материалам…"
        value={query}
        onChange={handleChange}
        className="hlb-search w-full px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none transition-all duration-300"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
        🔍
      </div>
    </div>
  );
}
