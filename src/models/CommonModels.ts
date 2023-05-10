export class CommonModels {
  getHash(): string {
    return Date.now().toString(16)
  }
  getToday(): string {
    const date = new Date()
    const d = new Intl.DateTimeFormat('ja-jp', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date)
    return d
  }
  getDayAndTime(): string {
    const date = new Date()
    const d = new Intl.DateTimeFormat('ja-jp', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date)
    return d
  }
}