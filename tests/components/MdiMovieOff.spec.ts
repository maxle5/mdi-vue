
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOff from "../../src/components/MdiMovieOff.vue";

test("MdiMovieOff snapshot", () => {
  const wrapper = mount(MdiMovieOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
