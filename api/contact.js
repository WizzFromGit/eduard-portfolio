import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,     // Your Gmail address
        pass: process.env.GMAIL_APP_PASS, // Gmail App Password (not your regular password)
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: 'eduardjhonsarmiento24@gmail.com',
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    })

    return res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' })
  }
}