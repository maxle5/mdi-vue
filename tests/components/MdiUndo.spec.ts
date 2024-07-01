
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUndo from "../../src/components/MdiUndo.vue";

test("MdiUndo snapshot", () => {
  const wrapper = mount(MdiUndo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
