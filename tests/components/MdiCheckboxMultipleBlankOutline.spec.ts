
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleBlankOutline from "../../src/components/MdiCheckboxMultipleBlankOutline.vue";

test("MdiCheckboxMultipleBlankOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleBlankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
