export interface RequestOption {
  method: string;
  header:
    | {
        Authorization: string;
        'Content-Type': string;
      }
    | {'Content-Type': string; Authorization?: undefined};
  body: string;
}
