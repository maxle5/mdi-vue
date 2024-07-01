
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldLockOpenOutline from "../../src/components/MdiShieldLockOpenOutline.vue";

test("MdiShieldLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiShieldLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
