"use client";
import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex-1 max-w-lg mx-auto px-4">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons-round text-slate-400 group-focus-within:text-primary">search</span>
                </div>
                <input
                    className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md leading-5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-200"
                    placeholder="Search content..."
                    type="text"
                />
            </div>
        </div>
    );
};

export default SearchBar;
