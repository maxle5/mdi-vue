
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldRemoveOutline from "../../src/components/MdiShieldRemoveOutline.vue";

test("MdiShieldRemoveOutline snapshot", () => {
  const wrapper = mount(MdiShieldRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
