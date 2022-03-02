import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest, res: NextApiResponse
) {
  if (req.method != 'POST') {
    return res.status(405).json({ message: 'This endpoint is for POST request' })
  }
  const body = req.body
  console.log(body)
  return res.status(200).json({})
}