
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelect from "../../src/components/MdiSelect.vue";

test("MdiSelect snapshot", () => {
  const wrapper = mount(MdiSelect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
