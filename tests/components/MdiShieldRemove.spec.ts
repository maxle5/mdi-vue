
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldRemove from "../../src/components/MdiShieldRemove.vue";

test("MdiShieldRemove snapshot", () => {
  const wrapper = mount(MdiShieldRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
