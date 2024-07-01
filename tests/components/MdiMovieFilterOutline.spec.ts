
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieFilterOutline from "../../src/components/MdiMovieFilterOutline.vue";

test("MdiMovieFilterOutline snapshot", () => {
  const wrapper = mount(MdiMovieFilterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
