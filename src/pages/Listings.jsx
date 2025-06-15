import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setTypeFilter } from "../Redux/InternshipsSlice";
import InternshipCard from "../components/InternshipCard";
import Input from "../components/Input";
import { motion } from "framer-motion";
import DropdownFilter from '../components/DropdownFilter'; 

const Listings = () => {
  const { list, filter, typeFilter } = useSelector(
    (state) => state.internships
  );
  const dispatch = useDispatch();

  const filtered = list.filter(
    (item) =>
      item.title.toLowerCase().includes(filter.toLowerCase()) &&
      (typeFilter === "All" || item.type === typeFilter)
  );

  const typeOptions = ["All", "Remote", "Onsite", "Hybrid"];

  return (
    <div className="max-w-7xl mx-auto p-6 pt-24">
      <motion.h2
        className="text-3xl font-bold text-slate-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Open Internships
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 max-w-3xl mx-auto">
        <Input
          placeholder="Search internships..."
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="flex-1 shadow"
        />
        <DropdownFilter
          options={typeOptions}
          selected={typeFilter}
          onChange={(val) => dispatch(setTypeFilter(val))}
        />
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filtered.map((internship, index) => (
          <motion.div
            key={internship.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            
            <InternshipCard internship={internship} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center text-slate-500 mt-16">
          No internships match your criteria.
        </div>
      )}
    </div>
  );
};

export default Listings;     