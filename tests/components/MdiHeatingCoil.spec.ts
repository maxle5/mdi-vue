
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeatingCoil from "../../src/components/MdiHeatingCoil.vue";

test("MdiHeatingCoil snapshot", () => {
  const wrapper = mount(MdiHeatingCoil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
