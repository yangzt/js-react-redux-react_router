//this function is called a action creator, cause it returns a typical action object
export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}
