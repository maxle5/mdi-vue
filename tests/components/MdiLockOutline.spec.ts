
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOutline from "../../src/components/MdiLockOutline.vue";

test("MdiLockOutline snapshot", () => {
  const wrapper = mount(MdiLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
