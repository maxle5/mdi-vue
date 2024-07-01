
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockEdit from "../../src/components/MdiClockEdit.vue";

test("MdiClockEdit snapshot", () => {
  const wrapper = mount(MdiClockEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
