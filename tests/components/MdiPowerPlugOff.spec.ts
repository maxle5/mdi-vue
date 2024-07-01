
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerPlugOff from "../../src/components/MdiPowerPlugOff.vue";

test("MdiPowerPlugOff snapshot", () => {
  const wrapper = mount(MdiPowerPlugOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
