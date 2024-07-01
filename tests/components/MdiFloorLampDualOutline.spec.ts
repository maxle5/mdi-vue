
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampDualOutline from "../../src/components/MdiFloorLampDualOutline.vue";

test("MdiFloorLampDualOutline snapshot", () => {
  const wrapper = mount(MdiFloorLampDualOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
