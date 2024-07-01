
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldHalfFull from "../../src/components/MdiShieldHalfFull.vue";

test("MdiShieldHalfFull snapshot", () => {
  const wrapper = mount(MdiShieldHalfFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
