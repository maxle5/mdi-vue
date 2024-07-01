
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeatPumpOutline from "../../src/components/MdiHeatPumpOutline.vue";

test("MdiHeatPumpOutline snapshot", () => {
  const wrapper = mount(MdiHeatPumpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
