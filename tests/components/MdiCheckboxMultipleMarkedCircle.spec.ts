
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleMarkedCircle from "../../src/components/MdiCheckboxMultipleMarkedCircle.vue";

test("MdiCheckboxMultipleMarkedCircle snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleMarkedCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
