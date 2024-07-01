
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoviePlay from "../../src/components/MdiMoviePlay.vue";

test("MdiMoviePlay snapshot", () => {
  const wrapper = mount(MdiMoviePlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
