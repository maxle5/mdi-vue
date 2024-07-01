
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieMinus from "../../src/components/MdiMovieMinus.vue";

test("MdiMovieMinus snapshot", () => {
  const wrapper = mount(MdiMovieMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
