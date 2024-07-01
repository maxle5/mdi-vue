
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldLockOpen from "../../src/components/MdiShieldLockOpen.vue";

test("MdiShieldLockOpen snapshot", () => {
  const wrapper = mount(MdiShieldLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
