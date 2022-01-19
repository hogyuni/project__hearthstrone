
export function classNameBind({ styles, prefix }: { [key: string]: string }) {
  return function () {
    const list = Array.prototype.slice.call(arguments);

    console.log(list)

    let _list: any[] = [];
    list.forEach(item => {
      if (Array.isArray(item)) {
        _list = [..._list, ...item];
      } else {
        _list.push(item);
      }
    });

    const __list: any[] = [];
    _list.forEach(item => {
      const className =
        prefix && !startsWith(item, prefix) ? `${prefix}${item}` : item;
      if (styles[className]) {
        __list.push(styles[className]);
      } else if (item) {
        __list.push(item);
      }
    });

    return __list.join(' ');
  };
}

export function startsWith(text: string, search: any) {
  if (typeof text !== 'string') {
    return false;
  }

  return text.indexOf(search) === 0;
}