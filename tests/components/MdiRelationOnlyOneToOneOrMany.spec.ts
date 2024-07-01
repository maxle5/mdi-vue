
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOnlyOneToOneOrMany from "../../src/components/MdiRelationOnlyOneToOneOrMany.vue";

test("MdiRelationOnlyOneToOneOrMany snapshot", () => {
  const wrapper = mount(MdiRelationOnlyOneToOneOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
