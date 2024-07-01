
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieOff from "../../src/components/MdiCookieOff.vue";

test("MdiCookieOff snapshot", () => {
  const wrapper = mount(MdiCookieOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
