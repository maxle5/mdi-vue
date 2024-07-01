
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoviePlayOutline from "../../src/components/MdiMoviePlayOutline.vue";

test("MdiMoviePlayOutline snapshot", () => {
  const wrapper = mount(MdiMoviePlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
