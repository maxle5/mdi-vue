
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardText from "../../src/components/MdiCardText.vue";

test("MdiCardText snapshot", () => {
  const wrapper = mount(MdiCardText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
