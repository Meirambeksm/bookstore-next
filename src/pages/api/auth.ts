import type { NextApiRequest, NextApiResponse } from "next";

interface ValidateResponse {
  error: boolean;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: true, message: "Only POST requests are allowed" });
  }

  const { email, password } = req.body as { email: string; password: string };

  const validatedInfo = validate(email, password);

  if (validatedInfo.error) {
    return res
      .status(400)
      .json({ error: true, message: "Email or password are incorrect" });
  } else {
    return res.status(200).json({ success: true, token: "testToken" });
  }
}

function validate(email: string, password: string): ValidateResponse {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: true, message: "Invalid email format" };
  }
  if (password.length < 6) {
    return {
      error: true,
      message: "Password must be at least 6 characters long",
    };
  }
  return { error: false };
}
