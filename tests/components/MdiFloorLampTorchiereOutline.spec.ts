
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampTorchiereOutline from "../../src/components/MdiFloorLampTorchiereOutline.vue";

test("MdiFloorLampTorchiereOutline snapshot", () => {
  const wrapper = mount(MdiFloorLampTorchiereOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
