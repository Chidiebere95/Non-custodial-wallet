import apiRoutes from '../../routes/api_routes';
import { get, post } from '../../network/https';

export default class PostsService {
  //  get all tokens
  static async getAllTokens() {
    const response: any = await get({
      url: apiRoutes.getAllTokens,
    });
    if (response.status !== 'success') {
      throw new Error('Something went wrong');
    }
    return response.data;
  }
  //  get all tokens
  //   static async getAllTokens(data: any) {
  //     const response: any = await get({
  //       url: apiRoutes.getAllTokens,
  //       data: { ...data },
  //     });
  //     if (response.status !== 'success') {
  //       throw new Error('Something went wrong');
  //     }
  //     return response.data;
  //   }
}
