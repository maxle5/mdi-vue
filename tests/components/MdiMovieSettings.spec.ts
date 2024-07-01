
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieSettings from "../../src/components/MdiMovieSettings.vue";

test("MdiMovieSettings snapshot", () => {
  const wrapper = mount(MdiMovieSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
