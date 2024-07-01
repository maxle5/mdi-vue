
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQrcodeEdit from "../../src/components/MdiQrcodeEdit.vue";

test("MdiQrcodeEdit snapshot", () => {
  const wrapper = mount(MdiQrcodeEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
