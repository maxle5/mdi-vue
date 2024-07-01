
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerCycle from "../../src/components/MdiPowerCycle.vue";

test("MdiPowerCycle snapshot", () => {
  const wrapper = mount(MdiPowerCycle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
