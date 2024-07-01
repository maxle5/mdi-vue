
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerStandby from "../../src/components/MdiPowerStandby.vue";

test("MdiPowerStandby snapshot", () => {
  const wrapper = mount(MdiPowerStandby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
