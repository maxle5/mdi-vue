
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampOutline from "../../src/components/MdiFloorLampOutline.vue";

test("MdiFloorLampOutline snapshot", () => {
  const wrapper = mount(MdiFloorLampOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
