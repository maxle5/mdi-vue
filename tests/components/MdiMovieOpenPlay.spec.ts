
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenPlay from "../../src/components/MdiMovieOpenPlay.vue";

test("MdiMovieOpenPlay snapshot", () => {
  const wrapper = mount(MdiMovieOpenPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
