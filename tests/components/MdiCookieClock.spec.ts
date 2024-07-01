
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieClock from "../../src/components/MdiCookieClock.vue";

test("MdiCookieClock snapshot", () => {
  const wrapper = mount(MdiCookieClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
