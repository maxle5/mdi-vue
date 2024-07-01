
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPenMinus from "../../src/components/MdiPenMinus.vue";

test("MdiPenMinus snapshot", () => {
  const wrapper = mount(MdiPenMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
