
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpen from "../../src/components/MdiMovieOpen.vue";

test("MdiMovieOpen snapshot", () => {
  const wrapper = mount(MdiMovieOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
