
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageLockOutline from "../../src/components/MdiMessageLockOutline.vue";

test("MdiMessageLockOutline snapshot", () => {
  const wrapper = mount(MdiMessageLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
