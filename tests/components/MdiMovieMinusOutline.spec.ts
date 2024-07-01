
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieMinusOutline from "../../src/components/MdiMovieMinusOutline.vue";

test("MdiMovieMinusOutline snapshot", () => {
  const wrapper = mount(MdiMovieMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
