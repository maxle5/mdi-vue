
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoviePlusOutline from "../../src/components/MdiMoviePlusOutline.vue";

test("MdiMoviePlusOutline snapshot", () => {
  const wrapper = mount(MdiMoviePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
