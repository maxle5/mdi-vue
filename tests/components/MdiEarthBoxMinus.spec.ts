
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthBoxMinus from "../../src/components/MdiEarthBoxMinus.vue";

test("MdiEarthBoxMinus snapshot", () => {
  const wrapper = mount(MdiEarthBoxMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
