
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanEdit from "../../src/components/MdiHumanEdit.vue";

test("MdiHumanEdit snapshot", () => {
  const wrapper = mount(MdiHumanEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
