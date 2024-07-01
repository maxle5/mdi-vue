
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDataMatrixMinus from "../../src/components/MdiDataMatrixMinus.vue";

test("MdiDataMatrixMinus snapshot", () => {
  const wrapper = mount(MdiDataMatrixMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
