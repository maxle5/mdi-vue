
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieCheck from "../../src/components/MdiMovieCheck.vue";

test("MdiMovieCheck snapshot", () => {
  const wrapper = mount(MdiMovieCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
