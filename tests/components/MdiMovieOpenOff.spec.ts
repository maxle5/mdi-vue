
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenOff from "../../src/components/MdiMovieOpenOff.vue";

test("MdiMovieOpenOff snapshot", () => {
  const wrapper = mount(MdiMovieOpenOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
