
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountLockOutline from "../../src/components/MdiAccountLockOutline.vue";

test("MdiAccountLockOutline snapshot", () => {
  const wrapper = mount(MdiAccountLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
