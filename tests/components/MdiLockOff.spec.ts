
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOff from "../../src/components/MdiLockOff.vue";

test("MdiLockOff snapshot", () => {
  const wrapper = mount(MdiLockOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
