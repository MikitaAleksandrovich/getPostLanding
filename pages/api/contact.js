const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { name = "", email = "", message = "" } = req.body || {};

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || trimmedName.length < 2) {
    return res.status(400).json({ error: "Please provide your full name." });
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return res.status(400).json({ error: "Please provide a valid email." });
  }

  if (trimmedMessage.length < 10 || trimmedMessage.length > 1000) {
    return res
      .status(400)
      .json({ error: "Message must be between 10 and 1000 characters." });
  }

  try {
    console.log("New contact submission:", {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Unable to submit your message. Please try again." });
  }
}