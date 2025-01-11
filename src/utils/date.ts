export function formatDate(date: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
  }).format(new Date(date));
}
