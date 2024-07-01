
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketUk from "../../src/components/MdiPowerSocketUk.vue";

test("MdiPowerSocketUk snapshot", () => {
  const wrapper = mount(MdiPowerSocketUk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
