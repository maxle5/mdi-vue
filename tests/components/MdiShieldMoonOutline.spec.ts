
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldMoonOutline from "../../src/components/MdiShieldMoonOutline.vue";

test("MdiShieldMoonOutline snapshot", () => {
  const wrapper = mount(MdiShieldMoonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
