
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieEditOutline from "../../src/components/MdiMovieEditOutline.vue";

test("MdiMovieEditOutline snapshot", () => {
  const wrapper = mount(MdiMovieEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
