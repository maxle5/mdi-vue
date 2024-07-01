
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationManyToZeroOrMany from "../../src/components/MdiRelationManyToZeroOrMany.vue";

test("MdiRelationManyToZeroOrMany snapshot", () => {
  const wrapper = mount(MdiRelationManyToZeroOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
