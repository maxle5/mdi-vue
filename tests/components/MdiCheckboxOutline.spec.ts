
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxOutline from "../../src/components/MdiCheckboxOutline.vue";

test("MdiCheckboxOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
