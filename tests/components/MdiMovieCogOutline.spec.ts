
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieCogOutline from "../../src/components/MdiMovieCogOutline.vue";

test("MdiMovieCogOutline snapshot", () => {
  const wrapper = mount(MdiMovieCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
