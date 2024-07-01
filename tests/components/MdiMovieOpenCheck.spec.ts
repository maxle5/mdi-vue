
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenCheck from "../../src/components/MdiMovieOpenCheck.vue";

test("MdiMovieOpenCheck snapshot", () => {
  const wrapper = mount(MdiMovieOpenCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
