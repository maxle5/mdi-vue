
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldPlus from "../../src/components/MdiShieldPlus.vue";

test("MdiShieldPlus snapshot", () => {
  const wrapper = mount(MdiShieldPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
