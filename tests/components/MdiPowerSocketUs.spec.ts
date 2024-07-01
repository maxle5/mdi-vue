
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketUs from "../../src/components/MdiPowerSocketUs.vue";

test("MdiPowerSocketUs snapshot", () => {
  const wrapper = mount(MdiPowerSocketUs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
