
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrOneToOneOrMany from "../../src/components/MdiRelationZeroOrOneToOneOrMany.vue";

test("MdiRelationZeroOrOneToOneOrMany snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrOneToOneOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
