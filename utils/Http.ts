export class Http {
  private static readonly baseUrl = 'http://localhost:30000';

  private static readonly getPortFromAction = (url: string): string => {
    const reUrl = this.baseUrl + url;
    return reUrl;
  };

  private static getAuthHeader(): any {
    const token = JsUtil.getCookie('token');

    return {
      Authorization: `Bearer ${token}`, // Bearer 토큰 방식
    };
  }

  private static async fetchWithAuth(url: string, options: object): Promise<any> {
    const authHeader = Http.getAuthHeader();
    const mergedOptions = {
      ...options,
      headers: {
        ...(options as { headers: Headers }).headers, // options 객체에 headers 속성이 있다고 단언
        ...authHeader, // 인증 헤더 추가
      },
    };

    const reqUrl = this.getPortFromAction(url);
    return $fetch(reqUrl, mergedOptions);
  }

  public static async get(action: string, params: object | null | void): Promise<any[]>;
  public static async get<T>(action: string, params: object | null | void): Promise<T[]> {
    return Http.fetchWithAuth(action, {
      method: 'GET',
      params: params || {},
    });
  }

  public static async post<T>(action: string, reqBody: object | object[] | void): Promise<T>;
  public static async post(action: string, reqBody: object | object[] | void): Promise<any> {
    return Http.fetchWithAuth(action, {
      method: 'POST',
      body: reqBody || {},
    });
  }

  public static async put<T>(action: string, reqBody: object | object[] | void): Promise<T>;
  public static async put(action: string, reqBody: object | object[] | void): Promise<any> {
    return Http.fetchWithAuth(action, {
      method: 'PUT',
      body: reqBody || {},
    });
  }

  public static async patch<T>(action: string, reqBody: object | object[] | void): Promise<T>;
  public static async patch(action: string, reqBody: object | object[] | void): Promise<any> {
    return Http.fetchWithAuth(action, {
      method: 'PATCH',
      body: reqBody || {},
    });
  }

  public static async delete<T>(action: string, params: object | void): Promise<T>;
  public static async delete(action: string, params: object | void): Promise<any> {
    return Http.fetchWithAuth(action, {
      method: 'DELETE',
      params: params || {},
    });
  }
}
