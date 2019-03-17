/**
 * This is the function that should sort, filter, and slice the earthquakes
 * whenever neccessary.  Refer to the README.md for how this should specifically be done.
 *
 * @param {string} filter
 * @param {array} earthquakes
 */

export default function organizeEarthquakes(filter, earthquakes) {
  // 1. Sort Earthquakes
  const sorted = earthquakes.sort(
    // Sort from the highest magnitude to the lowest magnitude
    // If magnitude is the same, sort the most recent date first
    (a, b) => b.mag - a.mag || new Date(b.time) - new Date(a.time)
  );
  // 2. Filter Earthquakes
  if (filter !== '') {
    // 3. Slice Earthquakes to show no more than 20 results
    // Searching in different case should not affect results
    const lower = filter.toLowerCase();
    return sorted
      .filter(e => e.place.toLowerCase().includes(lower))
      .slice(0, 20);
  }
  const sliced = sorted.slice(0, 20);
  return sliced;
}
