
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrManyToZeroOrMany from "../../src/components/MdiRelationZeroOrManyToZeroOrMany.vue";

test("MdiRelationZeroOrManyToZeroOrMany snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrManyToZeroOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
