
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadMinus from "../../src/components/MdiHeadMinus.vue";

test("MdiHeadMinus snapshot", () => {
  const wrapper = mount(MdiHeadMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
