
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieOutline from "../../src/components/MdiCookieOutline.vue";

test("MdiCookieOutline snapshot", () => {
  const wrapper = mount(MdiCookieOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
