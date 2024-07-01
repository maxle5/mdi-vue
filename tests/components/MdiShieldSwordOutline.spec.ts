
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSwordOutline from "../../src/components/MdiShieldSwordOutline.vue";

test("MdiShieldSwordOutline snapshot", () => {
  const wrapper = mount(MdiShieldSwordOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
