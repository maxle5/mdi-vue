
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneToZeroOrMany from "../../src/components/MdiRelationOneToZeroOrMany.vue";

test("MdiRelationOneToZeroOrMany snapshot", () => {
  const wrapper = mount(MdiRelationOneToZeroOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
