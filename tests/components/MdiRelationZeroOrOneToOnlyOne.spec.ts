
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrOneToOnlyOne from "../../src/components/MdiRelationZeroOrOneToOnlyOne.vue";

test("MdiRelationZeroOrOneToOnlyOne snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrOneToOnlyOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
