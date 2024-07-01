
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormTextbox from "../../src/components/MdiFormTextbox.vue";

test("MdiFormTextbox snapshot", () => {
  const wrapper = mount(MdiFormTextbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
