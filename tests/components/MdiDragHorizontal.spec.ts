
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDragHorizontal from "../../src/components/MdiDragHorizontal.vue";

test("MdiDragHorizontal snapshot", () => {
  const wrapper = mount(MdiDragHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
