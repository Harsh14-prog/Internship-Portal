import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  BriefcaseIcon, MapPinIcon, CalendarDays, Building2,
  InfoIcon, ListTodo, ShieldCheck, GiftIcon, ClockIcon
} from 'lucide-react';

const tabList = [
  { key: 'description', label: 'Description', icon: InfoIcon },
  { key: 'responsibilities', label: 'Responsibilities', icon: ListTodo },
  { key: 'requirements', label: 'Requirements', icon: ShieldCheck },
  { key: 'perks', label: 'Perks', icon: GiftIcon },
  { key: 'company', label: 'Company Info', icon: Building2 },
  { key: 'timeline', label: 'Timeline', icon: CalendarDays }
];

const InternshipDetail = () => {
  const { id } = useParams();
  const internship = useSelector(state =>
    state.internships.list.find(item => item.id === id)
  );
  const [activeTab, setActiveTab] = useState('description');

  if (!internship) return <div className="p-6">Internship not found.</div>;

  return (
    <div className="flex-grow bg-white pt-24 pb-20 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6 md:p-10 border border-slate-200">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">
            {internship.title}
            <span className="text-slate-600 font-medium"> @ {internship.company}</span>
          </h1>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><BriefcaseIcon size={16} /> Role: {internship.title}</div>
            <div className="flex items-center gap-2"><MapPinIcon size={16} /> Location: {internship.location}</div>
            <div className="flex items-center gap-2"><ClockIcon size={16} /> Duration: {internship.duration}</div>
            <div className="flex items-center gap-2"><GiftIcon size={16} /> Stipend: {internship.stipend}</div>
          </div>

          <div className="flex flex-wrap gap-4 border-b mb-6 text-sm font-medium overflow-x-auto scrollbar-hide">
            {tabList.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 flex items-center gap-2 transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-b-2 border-indigo-600 text-indigo-700'
                    : 'text-slate-500 hover:text-indigo-600'
                }`}
              >
                <tab.icon size={14} /> {tab.label}
              </button>
            ))}
          </div>

          <div className="text-slate-700 space-y-4 leading-relaxed text-[15px]">
            {activeTab === 'description' && <p>{internship.description}</p>}
            {activeTab === 'responsibilities' && internship.responsibilities?.length > 0 && (
              <ul className="list-disc pl-6 space-y-1">
                {internship.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {activeTab === 'requirements' && internship.requirements?.length > 0 && (
              <ul className="list-disc pl-6 space-y-1">
                {internship.requirements.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {activeTab === 'perks' && internship.perks?.length > 0 && (
              <ul className="list-disc pl-6 space-y-1">
                {internship.perks.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {activeTab === 'timeline' && internship.timeline && (
              <ul className="list-disc pl-6 space-y-1">
                <li>Apply By: {internship.timeline.applyBy}</li>
                <li>Interview: {internship.timeline.interview}</li>
                <li>Start Date: {internship.timeline.start}</li>
                <li>End Date: {internship.timeline.end}</li>
              </ul>
            )}
            {activeTab === 'company' && internship.companyInfo && (
              <p>{internship.companyInfo}</p>
            )}
          </div>

          <div className="mt-10">
            <Link to={`/apply/${internship.id}`}>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium shadow transition">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[280px] flex-shrink-0 mt-8 md:mt-0">
          <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-md p-6">
            <img
              src={internship.logo || 'https://via.placeholder.com/150'}
              alt="Company Logo"
              className="w-20 h-20 mb-4 object-contain rounded mx-auto"
            />
            <h3 className="font-semibold text-slate-800 text-lg text-center">{internship.company}</h3>
            <p className="text-slate-600 text-sm text-center mt-2">
              {internship.type} internship<br />
              {internship.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetail;
