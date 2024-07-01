
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenMinus from "../../src/components/MdiLockOpenMinus.vue";

test("MdiLockOpenMinus snapshot", () => {
  const wrapper = mount(MdiLockOpenMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
