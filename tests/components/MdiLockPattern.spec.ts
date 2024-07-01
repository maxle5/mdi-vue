
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPattern from "../../src/components/MdiLockPattern.vue";

test("MdiLockPattern snapshot", () => {
  const wrapper = mount(MdiLockPattern, {});
  expect(wrapper.html()).toMatchSnapshot();
});
