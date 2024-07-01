
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieEdit from "../../src/components/MdiMovieEdit.vue";

test("MdiMovieEdit snapshot", () => {
  const wrapper = mount(MdiMovieEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
