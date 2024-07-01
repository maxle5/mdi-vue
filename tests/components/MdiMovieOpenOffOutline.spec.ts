
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenOffOutline from "../../src/components/MdiMovieOpenOffOutline.vue";

test("MdiMovieOpenOffOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
