export type Data = {
  items?: Data[];
  id: string;
  name: string;
};

export const getId = (() => {
  let id = 0;

  return () => `id${id++}`;
})();
