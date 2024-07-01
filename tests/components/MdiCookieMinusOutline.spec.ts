
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieMinusOutline from "../../src/components/MdiCookieMinusOutline.vue";

test("MdiCookieMinusOutline snapshot", () => {
  const wrapper = mount(MdiCookieMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
