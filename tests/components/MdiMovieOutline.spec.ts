
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOutline from "../../src/components/MdiMovieOutline.vue";

test("MdiMovieOutline snapshot", () => {
  const wrapper = mount(MdiMovieOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
