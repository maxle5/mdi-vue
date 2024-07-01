
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleBlank from "../../src/components/MdiCheckboxMultipleBlank.vue";

test("MdiCheckboxMultipleBlank snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleBlank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
