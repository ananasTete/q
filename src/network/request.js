import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000,
  });

  // //拦截网络请求
  // instance.interceptors.request.use(config => {              //拦截成功回调
  //     console.log(config);
  //     return config;            //不通过return返回网络请求，此次网络请求就会失败
  // }, err => {                                                //拦截失败回调
  //     console.log(err);
  // })

  // //拦截请求响应
  // instance.interceptors.response.use(config => {
  //     console.log(config);
  //     return res;
  // }, err => {
  //     console.log(err);
  // })

  return instance(config);
}

const instance = axios.create({
  baseURL: "http://152.136.185.210:7878/api/hy66",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localCache.getCache("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return err;
  }
);

instance.interceptors.response.use(
  (res) => {
    const data = res.data;
    return data;
  },
  (err) => {
    return err;
  }
);
