
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleBlankCircle from "../../src/components/MdiCheckboxMultipleBlankCircle.vue";

test("MdiCheckboxMultipleBlankCircle snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleBlankCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
