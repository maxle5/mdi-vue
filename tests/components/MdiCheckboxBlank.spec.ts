
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxBlank from "../../src/components/MdiCheckboxBlank.vue";

test("MdiCheckboxBlank snapshot", () => {
  const wrapper = mount(MdiCheckboxBlank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
