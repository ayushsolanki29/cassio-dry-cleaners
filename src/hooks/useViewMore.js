"use client";

import { useState } from "react";

/**
 * Custom hook for progressive reveal functionality
 * @param {number} initialCount - Number of items to show initially
 * @returns {Object} - { showAll, toggleShowAll, visibleCount }
 */
export function useViewMore(initialCount = 3) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  return {
    showAll,
    toggleShowAll,
    visibleCount: showAll ? Infinity : initialCount,
  };
}
