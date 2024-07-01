
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSun from "../../src/components/MdiShieldSun.vue";

test("MdiShieldSun snapshot", () => {
  const wrapper = mount(MdiShieldSun, {});
  expect(wrapper.html()).toMatchSnapshot();
});
