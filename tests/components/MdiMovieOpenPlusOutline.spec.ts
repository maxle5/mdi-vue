
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenPlusOutline from "../../src/components/MdiMovieOpenPlusOutline.vue";

test("MdiMovieOpenPlusOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
