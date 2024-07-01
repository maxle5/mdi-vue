
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenMinusOutline from "../../src/components/MdiMovieOpenMinusOutline.vue";

test("MdiMovieOpenMinusOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
