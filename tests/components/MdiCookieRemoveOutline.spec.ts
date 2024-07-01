
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieRemoveOutline from "../../src/components/MdiCookieRemoveOutline.vue";

test("MdiCookieRemoveOutline snapshot", () => {
  const wrapper = mount(MdiCookieRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
