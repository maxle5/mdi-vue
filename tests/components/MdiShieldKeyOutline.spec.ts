
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldKeyOutline from "../../src/components/MdiShieldKeyOutline.vue";

test("MdiShieldKeyOutline snapshot", () => {
  const wrapper = mount(MdiShieldKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
