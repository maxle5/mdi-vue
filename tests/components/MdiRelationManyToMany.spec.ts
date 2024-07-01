
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationManyToMany from "../../src/components/MdiRelationManyToMany.vue";

test("MdiRelationManyToMany snapshot", () => {
  const wrapper = mount(MdiRelationManyToMany, {});
  expect(wrapper.html()).toMatchSnapshot();
});
