
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarMinus from "../../src/components/MdiStarMinus.vue";

test("MdiStarMinus snapshot", () => {
  const wrapper = mount(MdiStarMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
