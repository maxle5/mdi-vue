
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorSlidingLock from "../../src/components/MdiDoorSlidingLock.vue";

test("MdiDoorSlidingLock snapshot", () => {
  const wrapper = mount(MdiDoorSlidingLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
