
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneOrManyToOnlyOne from "../../src/components/MdiRelationOneOrManyToOnlyOne.vue";

test("MdiRelationOneOrManyToOnlyOne snapshot", () => {
  const wrapper = mount(MdiRelationOneOrManyToOnlyOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
