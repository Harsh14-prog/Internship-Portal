import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  GlobeIcon
} from 'lucide-react';
import Button from './Button';

const InternshipCard = ({ internship, index }) => {
  const {
    id,
    title,
    company,
    location,
    duration,
    type,
    logo,
    description,
    perks,
    timeline
  } = internship;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group bg-white shadow-md rounded-2xl p-6 w-full space-y-4 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition duration-300"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-lg font-semibold text-indigo-700 flex items-center gap-2">
            {title}
            {type.toLowerCase() === 'remote' && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Remote</span>
            )}
          </h2>
          <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
            <BriefcaseIcon size={14} /> {company}
          </p>
        </div>
        <img
          src={logo}
          alt={company}
          className="h-10 w-10 object-contain rounded transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 line-clamp-3">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs">
        {location !== type && (
          <span className="flex items-center gap-1 bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
            <MapPinIcon size={12} /> {location}
          </span>
        )}
        <span className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
          <ClockIcon size={12} /> {duration}
        </span>
        <span className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
          <GlobeIcon size={12} /> {type}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <Link to={`/internships/${id}`}>
          <Button className="text-sm bg-violet-600 hover:bg-violet-700">View Details</Button>
        </Link>
        <Link to={`/apply/${id}`}>
          <Button className="text-sm bg-emerald-600 hover:bg-emerald-700">Apply</Button>
        </Link>
      </div>
      
      {perks && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 right-3 hidden group-hover:block bg-indigo-50 text-indigo-700 text-xs px-3 py-2 rounded shadow-md z-10 w-52"
        >
          <p className="font-semibold text-sm mb-1">Perks Preview</p>
          <ul className="list-disc list-inside space-y-1">
            <li>{perks[0]}</li>
            {timeline?.applyBy && <li>Apply by: {timeline.applyBy}</li>}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InternshipCard;
