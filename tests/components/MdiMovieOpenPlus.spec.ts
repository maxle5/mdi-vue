
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenPlus from "../../src/components/MdiMovieOpenPlus.vue";

test("MdiMovieOpenPlus snapshot", () => {
  const wrapper = mount(MdiMovieOpenPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
