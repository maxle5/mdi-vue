
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieOpenEdit from "../../src/components/MdiMovieOpenEdit.vue";

test("MdiMovieOpenEdit snapshot", () => {
  const wrapper = mount(MdiMovieOpenEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
