
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieCheck from "../../src/components/MdiCookieCheck.vue";

test("MdiCookieCheck snapshot", () => {
  const wrapper = mount(MdiCookieCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
