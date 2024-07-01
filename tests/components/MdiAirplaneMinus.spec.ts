
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneMinus from "../../src/components/MdiAirplaneMinus.vue";

test("MdiAirplaneMinus snapshot", () => {
  const wrapper = mount(MdiAirplaneMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
