
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieSettingsOutline from "../../src/components/MdiMovieSettingsOutline.vue";

test("MdiMovieSettingsOutline snapshot", () => {
  const wrapper = mount(MdiMovieSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
