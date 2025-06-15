import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const DropdownFilter = ({ options = [], selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full md:w-48">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white text-sm border rounded-lg shadow text-slate-700 hover:border-indigo-400"
      >
        {selected}
        <ChevronDown size={18} />
      </button>

      {open && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-md z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-indigo-100 text-sm ${
                option === selected ? 'bg-indigo-50 font-semibold text-indigo-700' : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownFilter;
