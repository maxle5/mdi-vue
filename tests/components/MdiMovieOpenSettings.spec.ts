
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenSettings from "../../src/components/MdiMovieOpenSettings.vue";

test("MdiMovieOpenSettings snapshot", () => {
  const wrapper = mount(MdiMovieOpenSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
