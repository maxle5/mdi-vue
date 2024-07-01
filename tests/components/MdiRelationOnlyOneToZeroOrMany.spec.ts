
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOnlyOneToZeroOrMany from "../../src/components/MdiRelationOnlyOneToZeroOrMany.vue";

test("MdiRelationOnlyOneToZeroOrMany snapshot", () => {
  const wrapper = mount(MdiRelationOnlyOneToZeroOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
