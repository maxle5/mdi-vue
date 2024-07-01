
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenPlus from "../../src/components/MdiLockOpenPlus.vue";

test("MdiLockOpenPlus snapshot", () => {
  const wrapper = mount(MdiLockOpenPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
