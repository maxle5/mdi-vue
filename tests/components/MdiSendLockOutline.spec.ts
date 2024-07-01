
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendLockOutline from "../../src/components/MdiSendLockOutline.vue";

test("MdiSendLockOutline snapshot", () => {
  const wrapper = mount(MdiSendLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
