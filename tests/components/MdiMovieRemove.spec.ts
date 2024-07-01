
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieRemove from "../../src/components/MdiMovieRemove.vue";

test("MdiMovieRemove snapshot", () => {
  const wrapper = mount(MdiMovieRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
