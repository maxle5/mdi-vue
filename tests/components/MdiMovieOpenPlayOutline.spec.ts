
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenPlayOutline from "../../src/components/MdiMovieOpenPlayOutline.vue";

test("MdiMovieOpenPlayOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
