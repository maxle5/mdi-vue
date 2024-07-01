
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasStationOutline from "../../src/components/MdiGasStationOutline.vue";

test("MdiGasStationOutline snapshot", () => {
  const wrapper = mount(MdiGasStationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
