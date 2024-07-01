
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOnlyOneToMany from "../../src/components/MdiRelationOnlyOneToMany.vue";

test("MdiRelationOnlyOneToMany snapshot", () => {
  const wrapper = mount(MdiRelationOnlyOneToMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
