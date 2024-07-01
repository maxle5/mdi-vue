
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMinus from "../../src/components/MdiMapMinus.vue";

test("MdiMapMinus snapshot", () => {
  const wrapper = mount(MdiMapMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
