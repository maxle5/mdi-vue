
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieRemove from "../../src/components/MdiCookieRemove.vue";

test("MdiCookieRemove snapshot", () => {
  const wrapper = mount(MdiCookieRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
