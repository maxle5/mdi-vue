
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrManyToOneOrMany from "../../src/components/MdiRelationZeroOrManyToOneOrMany.vue";

test("MdiRelationZeroOrManyToOneOrMany snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrManyToOneOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
