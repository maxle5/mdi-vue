
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationManyToOneOrMany from "../../src/components/MdiRelationManyToOneOrMany.vue";

test("MdiRelationManyToOneOrMany snapshot", () => {
  const wrapper = mount(MdiRelationManyToOneOrMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
