
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDrawingBox from "../../src/components/MdiDrawingBox.vue";

test("MdiDrawingBox snapshot", () => {
  const wrapper = mount(MdiDrawingBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
