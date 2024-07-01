
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookEdit from "../../src/components/MdiBookEdit.vue";

test("MdiBookEdit snapshot", () => {
  const wrapper = mount(MdiBookEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
