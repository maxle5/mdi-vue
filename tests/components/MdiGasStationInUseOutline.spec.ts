
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasStationInUseOutline from "../../src/components/MdiGasStationInUseOutline.vue";

test("MdiGasStationInUseOutline snapshot", () => {
  const wrapper = mount(MdiGasStationInUseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
