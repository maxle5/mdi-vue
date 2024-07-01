
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenSettingsOutline from "../../src/components/MdiMovieOpenSettingsOutline.vue";

test("MdiMovieOpenSettingsOutline snapshot", () => {
  const wrapper = mount(MdiMovieOpenSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
