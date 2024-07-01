
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageText from "../../src/components/MdiMessageText.vue";

test("MdiMessageText snapshot", () => {
  const wrapper = mount(MdiMessageText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
