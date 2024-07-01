
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAccountOutline from "../../src/components/MdiShieldAccountOutline.vue";

test("MdiShieldAccountOutline snapshot", () => {
  const wrapper = mount(MdiShieldAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
