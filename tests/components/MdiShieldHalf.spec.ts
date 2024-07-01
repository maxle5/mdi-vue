
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldHalf from "../../src/components/MdiShieldHalf.vue";

test("MdiShieldHalf snapshot", () => {
  const wrapper = mount(MdiShieldHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
