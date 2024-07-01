
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPumpOff from "../../src/components/MdiWaterPumpOff.vue";

test("MdiWaterPumpOff snapshot", () => {
  const wrapper = mount(MdiWaterPumpOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
