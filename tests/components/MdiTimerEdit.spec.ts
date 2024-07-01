
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerEdit from "../../src/components/MdiTimerEdit.vue";

test("MdiTimerEdit snapshot", () => {
  const wrapper = mount(MdiTimerEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
