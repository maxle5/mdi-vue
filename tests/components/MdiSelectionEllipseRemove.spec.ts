
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionEllipseRemove from "../../src/components/MdiSelectionEllipseRemove.vue";

test("MdiSelectionEllipseRemove snapshot", () => {
  const wrapper = mount(MdiSelectionEllipseRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
