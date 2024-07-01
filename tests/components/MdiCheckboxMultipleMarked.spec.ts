
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleMarked from "../../src/components/MdiCheckboxMultipleMarked.vue";

test("MdiCheckboxMultipleMarked snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleMarked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
