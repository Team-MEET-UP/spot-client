export function formatName(name: string, maxLength: number = 5): string {
  return name.length > maxLength ? name.slice(0, maxLength) : name;
}
