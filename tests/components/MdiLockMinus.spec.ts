
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockMinus from "../../src/components/MdiLockMinus.vue";

test("MdiLockMinus snapshot", () => {
  const wrapper = mount(MdiLockMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
