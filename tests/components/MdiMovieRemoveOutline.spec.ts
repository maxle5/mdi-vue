
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieRemoveOutline from "../../src/components/MdiMovieRemoveOutline.vue";

test("MdiMovieRemoveOutline snapshot", () => {
  const wrapper = mount(MdiMovieRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
