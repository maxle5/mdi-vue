
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenCog from "../../src/components/MdiMovieOpenCog.vue";

test("MdiMovieOpenCog snapshot", () => {
  const wrapper = mount(MdiMovieOpenCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
