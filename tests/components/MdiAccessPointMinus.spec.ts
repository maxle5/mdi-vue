
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointMinus from "../../src/components/MdiAccessPointMinus.vue";

test("MdiAccessPointMinus snapshot", () => {
  const wrapper = mount(MdiAccessPointMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
