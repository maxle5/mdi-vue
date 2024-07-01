
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenCheckOutline from "../../src/components/MdiMovieOpenCheckOutline.vue";

test("MdiMovieOpenCheckOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
