
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageText from "../../src/components/MdiImageText.vue";

test("MdiImageText snapshot", () => {
  const wrapper = mount(MdiImageText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
