
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthMinus from "../../src/components/MdiEarthMinus.vue";

test("MdiEarthMinus snapshot", () => {
  const wrapper = mount(MdiEarthMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
