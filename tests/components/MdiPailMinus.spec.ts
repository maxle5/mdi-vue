
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailMinus from "../../src/components/MdiPailMinus.vue";

test("MdiPailMinus snapshot", () => {
  const wrapper = mount(MdiPailMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
