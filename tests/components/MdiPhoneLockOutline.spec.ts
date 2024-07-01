
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneLockOutline from "../../src/components/MdiPhoneLockOutline.vue";

test("MdiPhoneLockOutline snapshot", () => {
  const wrapper = mount(MdiPhoneLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
