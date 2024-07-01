
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleMarkedCircleOutline from "../../src/components/MdiCheckboxMultipleMarkedCircleOutline.vue";

test("MdiCheckboxMultipleMarkedCircleOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleMarkedCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
