
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarDoorLockOpen from "../../src/components/MdiCarDoorLockOpen.vue";

test("MdiCarDoorLockOpen snapshot", () => {
  const wrapper = mount(MdiCarDoorLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
