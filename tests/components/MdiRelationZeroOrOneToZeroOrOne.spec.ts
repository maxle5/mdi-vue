
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrOneToZeroOrOne from "../../src/components/MdiRelationZeroOrOneToZeroOrOne.vue";

test("MdiRelationZeroOrOneToZeroOrOne snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrOneToZeroOrOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
