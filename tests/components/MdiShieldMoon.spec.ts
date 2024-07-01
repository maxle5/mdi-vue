
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldMoon from "../../src/components/MdiShieldMoon.vue";

test("MdiShieldMoon snapshot", () => {
  const wrapper = mount(MdiShieldMoon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
