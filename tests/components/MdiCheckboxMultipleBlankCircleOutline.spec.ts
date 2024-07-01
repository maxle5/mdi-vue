
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleBlankCircleOutline from "../../src/components/MdiCheckboxMultipleBlankCircleOutline.vue";

test("MdiCheckboxMultipleBlankCircleOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleBlankCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
