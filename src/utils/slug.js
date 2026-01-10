export const generateSlug = (title) => {
  if (!title) return "";

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const uniqueSuffix =
    Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

  return `${slug}-${uniqueSuffix}`;
};
