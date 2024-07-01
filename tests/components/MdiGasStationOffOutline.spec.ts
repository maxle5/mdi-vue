
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasStationOffOutline from "../../src/components/MdiGasStationOffOutline.vue";

test("MdiGasStationOffOutline snapshot", () => {
  const wrapper = mount(MdiGasStationOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
