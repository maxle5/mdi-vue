
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookLockOpen from "../../src/components/MdiBookLockOpen.vue";

test("MdiBookLockOpen snapshot", () => {
  const wrapper = mount(MdiBookLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
