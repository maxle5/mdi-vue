
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenStarOutline from "../../src/components/MdiMovieOpenStarOutline.vue";

test("MdiMovieOpenStarOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
