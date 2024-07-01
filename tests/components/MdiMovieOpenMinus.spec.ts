
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenMinus from "../../src/components/MdiMovieOpenMinus.vue";

test("MdiMovieOpenMinus snapshot", () => {
  const wrapper = mount(MdiMovieOpenMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
