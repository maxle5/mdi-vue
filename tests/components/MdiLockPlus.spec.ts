
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPlus from "../../src/components/MdiLockPlus.vue";

test("MdiLockPlus snapshot", () => {
  const wrapper = mount(MdiLockPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
