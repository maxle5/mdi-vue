
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarkedCirclePlusOutline from "../../src/components/MdiCheckboxMarkedCirclePlusOutline.vue";

test("MdiCheckboxMarkedCirclePlusOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMarkedCirclePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
