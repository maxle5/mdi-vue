
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailLockOutline from "../../src/components/MdiEmailLockOutline.vue";

test("MdiEmailLockOutline snapshot", () => {
  const wrapper = mount(MdiEmailLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
