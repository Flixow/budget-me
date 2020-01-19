export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;

    if (!promise || typeof promise.then !== 'function') {
      return next(action);
    }

    const SUCCESS = `${type}_SUCCESS`;
    const REQUEST = `${type}_REQUEST`;
    const FAILURE = `${type}_FAILURE`;
    next({ ...rest, type: REQUEST });

    return promise
      .then(response => response.json())
      .then(req => {
        next({ ...rest, req, type: SUCCESS });
        return Promise.resolve();
      })
      .catch(error => {
        console.log(error);
        next({ ...rest, error, type: FAILURE });
        return Promise.reject();
      });
  };
}
