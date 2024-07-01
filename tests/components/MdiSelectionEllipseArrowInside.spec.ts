
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionEllipseArrowInside from "../../src/components/MdiSelectionEllipseArrowInside.vue";

test("MdiSelectionEllipseArrowInside snapshot", () => {
  const wrapper = mount(MdiSelectionEllipseArrowInside, {});
  expect(wrapper.html()).toMatchSnapshot();
});
