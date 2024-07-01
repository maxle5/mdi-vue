
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrManyToOne from "../../src/components/MdiRelationZeroOrManyToOne.vue";

test("MdiRelationZeroOrManyToOne snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrManyToOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
