import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../components/Input';

const ApplicationForm = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    college: '',
    gradYear: '',
    skills: [],
    message: '',
    resume: null
  });

  const skillOptions = ['React', 'Node.js', 'UI/UX', 'Python', 'Marketing', 'Content Writing'];

  const handleCheckboxChange = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleResumeChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted!\nName: ${formData.name}`);
    setFormData({
      name: '', email: '', phone: '', linkedin: '',
      college: '', gradYear: '', skills: [], message: '', resume: null
    });
  };

  return (
    <div className="flex-grow px-4 md:px-6 py-16 bg-white">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">Apply for Internship</h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            className="w-full"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            className="w-full"
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            className="w-full"
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />

          <Input
            className="w-full"
            type="url"
            placeholder="LinkedIn Profile URL"
            value={formData.linkedin}
            onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
          />

          <Input
            className="w-full"
            placeholder="College / University"
            value={formData.college}
            onChange={e => setFormData({ ...formData, college: e.target.value })}
          />

          <Input
            className="w-full"
            type="number"
            placeholder="Graduation Year"
            value={formData.gradYear}
            onChange={e => setFormData({ ...formData, gradYear: e.target.value })}
          />

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Skills:</label>
            <div className="flex flex-wrap gap-3">
              {skillOptions.map((skill) => (
                <label key={skill} className="text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                    className="mr-2"
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Resume (PDF only):</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleResumeChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2"
            />
          </div>

          <textarea
            placeholder="Why are you a good fit for this role?"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full p-3 border border-gray-300 rounded-lg h-28 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
