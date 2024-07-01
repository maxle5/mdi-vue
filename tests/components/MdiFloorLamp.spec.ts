
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLamp from "../../src/components/MdiFloorLamp.vue";

test("MdiFloorLamp snapshot", () => {
  const wrapper = mount(MdiFloorLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
