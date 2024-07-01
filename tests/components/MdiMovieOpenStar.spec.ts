
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenStar from "../../src/components/MdiMovieOpenStar.vue";

test("MdiMovieOpenStar snapshot", () => {
  const wrapper = mount(MdiMovieOpenStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
