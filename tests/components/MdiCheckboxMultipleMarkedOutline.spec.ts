
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleMarkedOutline from "../../src/components/MdiCheckboxMultipleMarkedOutline.vue";

test("MdiCheckboxMultipleMarkedOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleMarkedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
