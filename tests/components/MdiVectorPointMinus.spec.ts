
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPointMinus from "../../src/components/MdiVectorPointMinus.vue";

test("MdiVectorPointMinus snapshot", () => {
  const wrapper = mount(MdiVectorPointMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
