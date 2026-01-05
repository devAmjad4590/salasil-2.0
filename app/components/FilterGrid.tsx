"use client";
import React from 'react';
import FilterButton from './FilterButton';

const filters = [
    "filter 1", "filter 2", "filter 3", "filter 4", "filter 5", 
    "filter 6", "filter 7", "filter 8", "filter 9"
];

const FilterGrid = () => {
    return (
        <div className="relative mb-12">
            <div 
                aria-label="Content filters" 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3" 
                role="group"
            >
                {filters.map((filter, index) => (
                    <FilterButton 
                        key={filter}
                        text={filter}
                        isActive={index === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterGrid;
