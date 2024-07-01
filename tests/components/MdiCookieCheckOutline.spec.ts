
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieCheckOutline from "../../src/components/MdiCookieCheckOutline.vue";

test("MdiCookieCheckOutline snapshot", () => {
  const wrapper = mount(MdiCookieCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
