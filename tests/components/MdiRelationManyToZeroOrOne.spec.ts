
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationManyToZeroOrOne from "../../src/components/MdiRelationManyToZeroOrOne.vue";

test("MdiRelationManyToZeroOrOne snapshot", () => {
  const wrapper = mount(MdiRelationManyToZeroOrOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
