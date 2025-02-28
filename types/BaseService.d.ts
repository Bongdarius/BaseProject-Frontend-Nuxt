interface BaseService {
  selectList: (params?: any) => Promise<any>
  saveList: (body: any) => Promise<any>
  deleteList: (params: any) => Promise<any>
}
