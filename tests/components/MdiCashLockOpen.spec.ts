
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashLockOpen from "../../src/components/MdiCashLockOpen.vue";

test("MdiCashLockOpen snapshot", () => {
  const wrapper = mount(MdiCashLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
