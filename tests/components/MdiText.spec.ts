
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiText from "../../src/components/MdiText.vue";

test("MdiText snapshot", () => {
  const wrapper = mount(MdiText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
