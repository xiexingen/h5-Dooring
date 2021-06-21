import type { Request, Response } from 'express';
export default {
  'GET /api/message/getMessages': (request:Request,response:Response)=>{
    const { nickName } = request.body;
    response.json({
      nickName:nickName,
      h5:'{}'
    });
  },
};
