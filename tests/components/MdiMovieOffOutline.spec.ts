
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOffOutline from "../../src/components/MdiMovieOffOutline.vue";

test("MdiMovieOffOutline snapshot", () => {
  const wrapper = mount(MdiMovieOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
