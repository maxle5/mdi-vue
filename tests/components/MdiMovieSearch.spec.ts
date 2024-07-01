
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieSearch from "../../src/components/MdiMovieSearch.vue";

test("MdiMovieSearch snapshot", () => {
  const wrapper = mount(MdiMovieSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
