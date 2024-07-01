
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDragVariant from "../../src/components/MdiDragVariant.vue";

test("MdiDragVariant snapshot", () => {
  const wrapper = mount(MdiDragVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
