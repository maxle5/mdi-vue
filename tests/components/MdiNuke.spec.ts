
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNuke from "../../src/components/MdiNuke.vue";

test("MdiNuke snapshot", () => {
  const wrapper = mount(MdiNuke, {});
  expect(wrapper.html()).toMatchSnapshot();
});
