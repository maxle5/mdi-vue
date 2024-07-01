
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersEdit from "../../src/components/MdiLayersEdit.vue";

test("MdiLayersEdit snapshot", () => {
  const wrapper = mount(MdiLayersEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
