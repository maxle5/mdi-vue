
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDragHorizontalVariant from "../../src/components/MdiDragHorizontalVariant.vue";

test("MdiDragHorizontalVariant snapshot", () => {
  const wrapper = mount(MdiDragHorizontalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
