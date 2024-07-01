
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileUndo from "../../src/components/MdiFileUndo.vue";

test("MdiFileUndo snapshot", () => {
  const wrapper = mount(MdiFileUndo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
