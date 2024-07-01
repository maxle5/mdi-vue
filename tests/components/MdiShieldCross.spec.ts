
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCross from "../../src/components/MdiShieldCross.vue";

test("MdiShieldCross snapshot", () => {
  const wrapper = mount(MdiShieldCross, {});
  expect(wrapper.html()).toMatchSnapshot();
});
