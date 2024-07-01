
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxSearchOutline from "../../src/components/MdiTextBoxSearchOutline.vue";

test("MdiTextBoxSearchOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
