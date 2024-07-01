
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrOneToZeroOrMany from "../../src/components/MdiRelationZeroOrOneToZeroOrMany.vue";

test("MdiRelationZeroOrOneToZeroOrMany snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrOneToZeroOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
