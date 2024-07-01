
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockClock from "../../src/components/MdiLockClock.vue";

test("MdiLockClock snapshot", () => {
  const wrapper = mount(MdiLockClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
