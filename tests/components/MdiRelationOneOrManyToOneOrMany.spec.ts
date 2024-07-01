
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneOrManyToOneOrMany from "../../src/components/MdiRelationOneOrManyToOneOrMany.vue";

test("MdiRelationOneOrManyToOneOrMany snapshot", () => {
  const wrapper = mount(MdiRelationOneOrManyToOneOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
