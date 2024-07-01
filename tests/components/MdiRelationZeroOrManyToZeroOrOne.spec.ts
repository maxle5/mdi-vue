
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrManyToZeroOrOne from "../../src/components/MdiRelationZeroOrManyToZeroOrOne.vue";

test("MdiRelationZeroOrManyToZeroOrOne snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrManyToZeroOrOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
