
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieFilter from "../../src/components/MdiMovieFilter.vue";

test("MdiMovieFilter snapshot", () => {
  const wrapper = mount(MdiMovieFilter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
