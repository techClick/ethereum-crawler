import { CallArgs, IResponse } from '../types/types';

export const callEndpoint = ({
  api, body, type = 'json',
}: CallArgs) => async (): Promise<IResponse> => {
  const options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  try {
    // console.log('calling ..... ', api);
    const response = await fetch(
      `${api}`,
      options,
    );

    // console.log('response', response);
    if (!response) {
      return { status: 'error', description: 'Internet connection is not detected' } as IResponse;
    }

    let dataFromEndPoint: any;
    if (type === 'json') dataFromEndPoint = await response.json();
    else if (type === 'blob') {
      dataFromEndPoint = await response.blob();
    } else {
      dataFromEndPoint = await response.text();
    }
    console.log('response2', dataFromEndPoint);
    return { status: 'success', data: dataFromEndPoint.result ? dataFromEndPoint.result : [] } as IResponse;
  } catch (e: any) {
    return { status: 'error', description: e.message } as IResponse;
  }
};
