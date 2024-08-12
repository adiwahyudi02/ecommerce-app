/**
 * redirect to whatsapp with sending text
 * @param text string
 */
export default function shareToWhatsApp(text: string) {
  window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
}
