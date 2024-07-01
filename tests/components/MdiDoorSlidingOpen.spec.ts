
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorSlidingOpen from "../../src/components/MdiDoorSlidingOpen.vue";

test("MdiDoorSlidingOpen snapshot", () => {
  const wrapper = mount(MdiDoorSlidingOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
