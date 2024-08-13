import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../Navbar.vue";

// Create a mock router
const routes = [
  { path: "/", component: { template: "<div>Home</div>" } },
  { path: "/shop", component: { template: "<div>Shop</div>" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe("Navbar", () => {
  it("renders navbar links correctly", async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router], // Use the mock router
      },
    });

    // Wait for the router to be ready
    await router.isReady();

    // Check if the links are rendered correctly
    const links = wrapper.findAll(".navbar__link__wrapper");
    expect(links).toHaveLength(2); // Ensure there are 2 links

    expect(links[0].text()).toContain("Catalog");
    expect(links[1].text()).toContain("Your Shop");
  });

  it("renders active class on the current route", async () => {
    // Set the initial route to '/'
    router.push("/");
    await router.isReady();

    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    // Check if the active class is applied to the current route link
    const activeLink = wrapper.find(".router-link-active");
    expect(activeLink.exists()).toBe(true);
    expect(activeLink.text()).toContain("Catalog");

    // Now push to '/shop' and check if the active class updates
    router.push("/shop");
    await router.isReady();

    const updatedWrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    const updatedActiveLink = updatedWrapper.find(".router-link-active");
    expect(updatedActiveLink.exists()).toBe(true);
  });
});
