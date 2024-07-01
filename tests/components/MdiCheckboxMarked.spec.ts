
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarked from "../../src/components/MdiCheckboxMarked.vue";

test("MdiCheckboxMarked snapshot", () => {
  const wrapper = mount(MdiCheckboxMarked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
