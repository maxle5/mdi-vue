
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountLockOpen from "../../src/components/MdiAccountLockOpen.vue";

test("MdiAccountLockOpen snapshot", () => {
  const wrapper = mount(MdiAccountLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
