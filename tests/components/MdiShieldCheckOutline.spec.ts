
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCheckOutline from "../../src/components/MdiShieldCheckOutline.vue";

test("MdiShieldCheckOutline snapshot", () => {
  const wrapper = mount(MdiShieldCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
