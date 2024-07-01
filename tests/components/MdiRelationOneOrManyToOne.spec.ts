
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRelationOneOrManyToOne from "../../src/components/MdiRelationOneOrManyToOne.vue";

test("MdiRelationOneOrManyToOne snapshot", () => {
  const wrapper = mount(MdiRelationOneOrManyToOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
