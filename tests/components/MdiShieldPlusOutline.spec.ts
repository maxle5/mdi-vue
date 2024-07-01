
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldPlusOutline from "../../src/components/MdiShieldPlusOutline.vue";

test("MdiShieldPlusOutline snapshot", () => {
  const wrapper = mount(MdiShieldPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
