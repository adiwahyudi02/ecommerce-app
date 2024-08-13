import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Image from "../Image.vue";

describe("Image", () => {
  const images = [
    { src: "/images/image1.jpg", alt: "Image 1" },
    { src: "/images/image2.jpg", alt: "Image 2" },
    { src: "/images/image3.jpg", alt: "Image 3" },
  ];

  it("renders main images correctly", () => {
    const wrapper = mount(Image, {
      props: { images },
    });

    const mainImages = wrapper.findAll('[data-testid="main-image"]');
    expect(mainImages).toHaveLength(images.length);

    mainImages.forEach((img, index) => {
      expect(img.attributes("src")).toMatch(images[index].src);
      expect(img.attributes("alt")).toMatch(images[index].alt);
    });
  });

  it("renders thumbnail images correctly", () => {
    const wrapper = mount(Image, {
      props: { images },
    });

    const thumbImages = wrapper.findAll('[data-testid="thumb-image"]');
    expect(thumbImages).toHaveLength(images.length);

    thumbImages.forEach((img, index) => {
      expect(img.attributes("src")).toMatch(images[index].src);
      expect(img.attributes("alt")).toMatch(images[index].alt);
    });
  });
});
