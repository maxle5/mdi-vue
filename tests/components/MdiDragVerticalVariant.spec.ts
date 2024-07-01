
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDragVerticalVariant from "../../src/components/MdiDragVerticalVariant.vue";

test("MdiDragVerticalVariant snapshot", () => {
  const wrapper = mount(MdiDragVerticalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
