
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieCheckOutline from "../../src/components/MdiMovieCheckOutline.vue";

test("MdiMovieCheckOutline snapshot", () => {
  const wrapper = mount(MdiMovieCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
