type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean), //чтобы не прилетал undefined
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname, value]) => classname),
  ].join(' ');
}
