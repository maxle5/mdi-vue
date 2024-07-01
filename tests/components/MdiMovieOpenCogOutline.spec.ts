
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenCogOutline from "../../src/components/MdiMovieOpenCogOutline.vue";

test("MdiMovieOpenCogOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
