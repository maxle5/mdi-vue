
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldLockOutline from "../../src/components/MdiShieldLockOutline.vue";

test("MdiShieldLockOutline snapshot", () => {
  const wrapper = mount(MdiShieldLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
