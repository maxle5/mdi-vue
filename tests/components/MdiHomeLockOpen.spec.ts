
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeLockOpen from "../../src/components/MdiHomeLockOpen.vue";

test("MdiHomeLockOpen snapshot", () => {
  const wrapper = mount(MdiHomeLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
