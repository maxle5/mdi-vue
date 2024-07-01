
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenEditOutline from "../../src/components/MdiMovieOpenEditOutline.vue";

test("MdiMovieOpenEditOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
