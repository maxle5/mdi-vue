
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasStationInUse from "../../src/components/MdiGasStationInUse.vue";

test("MdiGasStationInUse snapshot", () => {
  const wrapper = mount(MdiGasStationInUse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
