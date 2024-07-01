
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneToOneOrMany from "../../src/components/MdiRelationOneToOneOrMany.vue";

test("MdiRelationOneToOneOrMany snapshot", () => {
  const wrapper = mount(MdiRelationOneToOneOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
