
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpen from "../../src/components/MdiLockOpen.vue";

test("MdiLockOpen snapshot", () => {
  const wrapper = mount(MdiLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
