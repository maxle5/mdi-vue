
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldOutline from "../../src/components/MdiShieldOutline.vue";

test("MdiShieldOutline snapshot", () => {
  const wrapper = mount(MdiShieldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
