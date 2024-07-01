
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkEdit from "../../src/components/MdiLinkEdit.vue";

test("MdiLinkEdit snapshot", () => {
  const wrapper = mount(MdiLinkEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
