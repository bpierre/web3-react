export type SendReturnResult = { result: any }
export type SendReturn = any

export type Send = (method: string, params?: any[]) => Promise<SendReturnResult | SendReturn>
export type SendOld = ({ method }: { method: string }) => Promise<SendReturnResult | SendReturn>
export type SendAsyncDeprecated = (
  { method }: { method: string },
  callback: (err: any, result: SendReturnResult | SendReturn) => void
) => void
