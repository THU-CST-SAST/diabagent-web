/** All project links also work on a GitHub Pages repository subpath. */
export const projectPath = (path: string) => {
  if (path === '/research' || path === '/about') return `https://lab.einsia.ai${path}`;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};
