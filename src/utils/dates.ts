export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale).format(date);
}

export function dateFromISO(date: string) {
  return new Date(date);
}
