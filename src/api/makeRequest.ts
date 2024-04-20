export async function makeRequest<T>(method: string, url: string, data?: any): Promise<T> {
  return new Promise<string>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
          response: xhr.response,
          details: 'onLoad out of 200-300 log',
        });
      }
    };
    xhr.onabort = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
        details: 'onAbort log',
      });
    };
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
        response: xhr.response,
        details: 'onError log',
      });
    };
    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  }).then((x) => JSON.parse(x));
}
