
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationZeroOrManyToOnlyOne from "../../src/components/MdiRelationZeroOrManyToOnlyOne.vue";

test("MdiRelationZeroOrManyToOnlyOne snapshot", () => {
  const wrapper = mount(MdiRelationZeroOrManyToOnlyOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
