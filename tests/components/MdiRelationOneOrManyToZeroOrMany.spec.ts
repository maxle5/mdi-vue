
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneOrManyToZeroOrMany from "../../src/components/MdiRelationOneOrManyToZeroOrMany.vue";

test("MdiRelationOneOrManyToZeroOrMany snapshot", () => {
  const wrapper = mount(MdiRelationOneOrManyToZeroOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
