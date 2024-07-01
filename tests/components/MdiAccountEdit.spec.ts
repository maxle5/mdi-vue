
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountEdit from "../../src/components/MdiAccountEdit.vue";

test("MdiAccountEdit snapshot", () => {
  const wrapper = mount(MdiAccountEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
