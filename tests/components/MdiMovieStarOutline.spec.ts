
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieStarOutline from "../../src/components/MdiMovieStarOutline.vue";

test("MdiMovieStarOutline snapshot", () => {
  const wrapper = mount(MdiMovieStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
