
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationManyToOnlyOne from "../../src/components/MdiRelationManyToOnlyOne.vue";

test("MdiRelationManyToOnlyOne snapshot", () => {
  const wrapper = mount(MdiRelationManyToOnlyOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
