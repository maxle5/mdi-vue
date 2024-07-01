
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieSearchOutline from "../../src/components/MdiMovieSearchOutline.vue";

test("MdiMovieSearchOutline snapshot", () => {
  const wrapper = mount(MdiMovieSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
