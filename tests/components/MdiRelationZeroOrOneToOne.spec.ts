
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrOneToOne from "../../src/components/MdiRelationZeroOrOneToOne.vue";

test("MdiRelationZeroOrOneToOne snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrOneToOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
