
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenRemoveOutline from "../../src/components/MdiMovieOpenRemoveOutline.vue";

test("MdiMovieOpenRemoveOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
