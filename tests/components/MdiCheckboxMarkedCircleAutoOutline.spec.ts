
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarkedCircleAutoOutline from "../../src/components/MdiCheckboxMarkedCircleAutoOutline.vue";

test("MdiCheckboxMarkedCircleAutoOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMarkedCircleAutoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
