class QueryBuilder {
  private query: string;

  constructor(url: string) {
    this.query = `${url}?`;
  }

  set(key: string, value: string | number | boolean | undefined): this {
    if (value === undefined || value === null || value === "") return this;
    this.query += `${encodeURIComponent(key)}=${encodeURIComponent(
      String(value)
    )}&`;
    return this;
  }

  build(): string {
    return this.query.slice(0, -1);
  }
}

export default QueryBuilder;
