/** All project links also work on a GitHub Pages repository subpath. */
export const projectPath = (path: string) => {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};
