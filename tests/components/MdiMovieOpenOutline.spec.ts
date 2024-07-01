
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenOutline from "../../src/components/MdiMovieOpenOutline.vue";

test("MdiMovieOpenOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
