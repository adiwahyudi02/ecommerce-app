import shareToWhatsApp from "@/utils/shareToWhatsApp";
import { describe, expect, it, vitest } from "vitest";

describe("shareToWhatsApp", () => {
  it("opens the WhatsApp share link with the correct text", () => {
    const text = "Hello, this is a test message!";
    const mockOpen = vitest.fn(); // Mock window.open

    // Override window.open with the mock function
    window.open = mockOpen;

    shareToWhatsApp(text);

    // Encode the text to match the expected URL
    expect(mockOpen).toHaveBeenCalledWith(
      `https://api.whatsapp.com/send?text=${text}`,
      "_blank",
    );
  });
});
