
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSelect from "../../src/components/MdiCarSelect.vue";

test("MdiCarSelect snapshot", () => {
  const wrapper = mount(MdiCarSelect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
