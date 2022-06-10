export interface PrettyJoinOpts {
  separator?: string;
  trim?: boolean;
  whitespace?: boolean;
}

export const rmWhitespace = (val: string): string => {
  return val.replace(/\s+/g, " ");
};

type PrettyJoin = (value: Array<unknown>, opts?: PrettyJoinOpts) => string;
export const prettyJoin: PrettyJoin = (values, opts) => {
  const { separator, whitespace, trim }: PrettyJoinOpts = {
    separator: " ",
    whitespace: false,
    trim: true,
    ...opts,
  };
  let output = values
    .filter(
      value => value && (typeof value === "string" || typeof value === "number")
    )
    .join(separator);
  if (!whitespace) output = rmWhitespace(output);
  return trim ? output.trim() : output;
};
