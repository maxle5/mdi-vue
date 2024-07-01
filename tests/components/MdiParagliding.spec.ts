
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiParagliding from "../../src/components/MdiParagliding.vue";

test("MdiParagliding snapshot", () => {
  const wrapper = mount(MdiParagliding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
