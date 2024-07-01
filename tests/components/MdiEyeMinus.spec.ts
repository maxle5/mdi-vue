
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeMinus from "../../src/components/MdiEyeMinus.vue";

test("MdiEyeMinus snapshot", () => {
  const wrapper = mount(MdiEyeMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
