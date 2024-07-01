
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenRemove from "../../src/components/MdiMovieOpenRemove.vue";

test("MdiMovieOpenRemove snapshot", () => {
  const wrapper = mount(MdiMovieOpenRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
