
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockCheck from "../../src/components/MdiLockCheck.vue";

test("MdiLockCheck snapshot", () => {
  const wrapper = mount(MdiLockCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
