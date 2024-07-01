
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleMinus from "../../src/components/MdiAccountMultipleMinus.vue";

test("MdiAccountMultipleMinus snapshot", () => {
  const wrapper = mount(MdiAccountMultipleMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
