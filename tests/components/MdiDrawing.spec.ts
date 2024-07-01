
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDrawing from "../../src/components/MdiDrawing.vue";

test("MdiDrawing snapshot", () => {
  const wrapper = mount(MdiDrawing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
